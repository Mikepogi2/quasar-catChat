import { defineStore } from 'pinia';
import { auth, db } from 'src/boot/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { ref, set, get, child, update, onChildAdded, onChildChanged, onValue, off, push } from 'firebase/database';

let messagesRef;
let messagesListener;

export const usePiniaStore = defineStore('counter', {
  state: () => ({
    messages: [],
    text: '',
    tab: 'login',
    userName: '',
    email: '',
    password: '',
    userDetails: {},
    users: {},
    other: '',
    otherDetails: ''
  }),
  getters: {
    Gcontacts: (state) => {
      const usersFiltered = {};
      Object.keys(state.users).forEach(key => {
        if (key !== state.userDetails.userId) { // Assuming `userDetails` has a `userId` field
          usersFiltered[key] = state.users[key];
        }
      });
      return usersFiltered;
    }
  },
  actions: {
    setUserDetails(payload) {
      this.userDetails = payload;
    },
    getUsers() {
      const usersRef = ref(db, 'users/');
      onChildAdded(usersRef, (snapshot) => {
        const userDetails = snapshot.val();
        this.users = { ...this.users, [snapshot.key]: userDetails };
        console.log(this.users);
      });
      onChildChanged(usersRef, (snapshot) => {
        const userDetails = snapshot.val();
        this.users = { ...this.users, [snapshot.key]: userDetails };
        console.log(this.users);
      });
    },
    sendMessage(route) {
      if (this.text !== '') {
        let message = {
          text: this.text,
          from: 'me',
          timestamp: Date.now() // Added timestamp for message ordering
        };
        let otherUserId = route.params.otherUserId;

        if (!otherUserId) {
          console.error('No otherUserId provided in route params');
          return;
        }

        console.log(message, otherUserId);

        // Send message to the current user's chat
        const myChatRef = ref(db, `chats/${this.userDetails.userId}/${otherUserId}`);
        push(myChatRef, message);

        // Send message to the other user's chat with 'from' changed to 'them'
        message.from = 'them';
        const otherChatRef = ref(db, `chats/${otherUserId}/${this.userDetails.userId}`);
        push(otherChatRef, message);

        // Clear the text field after sending the message
        this.text = '';
      }
    },
    async getMessages(route) {
      const stateId = this.userDetails.userId;
      const routeId = route.params.otherUserId;
      this.other = this.users[routeId]?.name || '';

      messagesRef = ref(db, `chats/${stateId}/${routeId}`);

      messagesListener = onValue(messagesRef, (snapshot) => {
        if (snapshot.exists()) {
          const messageData = snapshot.val();
          // Ensure messages is an array and sort by timestamp ascending
          this.messages = messageData ? Object.values(messageData).sort((a, b) => a.timestamp - b.timestamp) : [];
        } else {
          console.log('No data available');
          this.messages = []; // Clear messages if no data available
        }
      }, (error) => {
        console.error('Error getting messages:', error);
      });
    },
    stopGetMessages() {
      if (messagesRef && messagesListener) {
        off(messagesRef, 'value', messagesListener);
      }
      this.messages = [];
    },
    submitForm(notify) {
      if (this.tab === 'login') {
        this.loginUser(notify);
      } else {
        this.registerUser(notify);
      }
    },
    async registerUser(notify) {
      try {
        const response = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const userId = auth.currentUser.uid;

        await set(ref(db, 'users/' + userId), {
          name: this.userName,
          email: this.email,
          online: true
        });
        console.log(response);
        notify({
          message: 'Successful Registration!',
          color: 'secondary',
          textColor: 'white',
          position: 'top'
        });
      } catch (error) {
        console.error(error.message);
      }
    },
    async loginUser(notify) {
      try {
        const response = await signInWithEmailAndPassword(auth, this.email, this.password);
        console.log(response);
        notify({
          message: 'Successful Login!',
          color: 'secondary',
          textColor: 'white',
          position: 'top'
        });
      } catch (error) {
        if (error.code === 'auth/invalid-credential') {
          notify({
            message: 'Invalid Credentials',
            color: 'negative',
            textColor: 'white',
            position: 'top'
          });
          console.error(error.message);
        }
      }
    },
    async signOutUser() {
      await auth.signOut();
    },
    handleAuthChange(router) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userId = auth.currentUser.uid;
          try {
            const userSnapshot = await get(child(ref(db), `users/${userId}`));
            if (userSnapshot.exists()) {
              const userValue = userSnapshot.val();
              console.log(userValue);
              this.setUserDetails({
                name: userValue.name,
                email: userValue.email,
                userId: userId
              });
              await update(ref(db, 'users/' + userId), {
                online: true
              });
              this.getUsers();
              router.push('/');
            } else {
              console.log('No data available');
            }
          } catch (error) {
            console.error(error);
          }
        } else {
          // user signed out
          if (this.userDetails.userId) {
            const userId = this.userDetails.userId;

            // Set user online status to false
            await update(ref(db, 'users/' + userId), {
              online: false
            });
          }
          this.setUserDetails({});
          router.replace('/auth');
        }
      });
    }
  }
});
