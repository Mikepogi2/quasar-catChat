import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPs6XlLEMP6CphqpmSmeasmQ8PNs8U2PM",
  authDomain: "catchat-3478f.firebaseapp.com",
  projectId: "catchat-3478f",
  storageBucket: "catchat-3478f.appspot.com",
  messagingSenderId: "628241540773",
  appId: "1:628241540773:web:6c98856e7716cb4d380f4c",
  databaseURL: "https://catchat-3478f-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app)

export { auth , db};
