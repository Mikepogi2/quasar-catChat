<template>
  <q-page class="flex column border" ref="pageChat">
    <q-banner v-if="$p.isOffline" class="text-white bg-grey-6 text-center">
      {{ $p.other }} is offline.
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <div style="width: 100%; max-width: 1560px">
        <q-chat-message
          v-for="message in $p.messages"
          :key="message.id"
          :name="message.from === 'me' ? $p.userDetails.name : $p.other"
          avatar="https://cdn.quasar.dev/img/avatar4.jpg"
          :text="[message.text]"
          :stamp="formatRelativeDate(message.timestamp)"
          :sent="message.from === 'me'"
        />
      </div>
    </div>
    <q-footer elevated>
      <q-toolbar class="flex justify-center">
        <q-input
          @keydown.enter="sendMessage"
          outlined
          rounded
          placeholder="Name"
          bg-color="white"
          dense
          v-model="$p.text"
          required
          style="width: 100%; max-width: 900px"
        >
          <template v-slot:after>
            <q-btn round dense flat icon="send" color="white" @click="sendMessage" />
          </template>
        </q-input>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { formatDistance } from 'date-fns';
import { usePiniaStore } from 'src/stores/example-store.js';

const route = useRoute();
const $p = usePiniaStore();
const pageChat = ref(null);

const formatRelativeDate = (timestamp) => {
  return formatDistance(new Date(timestamp), new Date(), { addSuffix: true });
};

const scrollToBottom = () => {
  nextTick(() => {
    if (pageChat.value) {
      const el = pageChat.value.$el || pageChat.value;
      el.scrollTop = el.scrollHeight;
    }
  });
};

const sendMessage = () => {
  $p.sendMessage(route);
  scrollToBottom();
};

onMounted(() => {
  $p.getMessages(route);
  scrollToBottom();
});

onUnmounted(() => {
  $p.stopGetMessages();
});

watch(
  () => $p.messages,
  (newMessages, oldMessages) => {
    if (newMessages.length !== oldMessages.length) {
      scrollToBottom();
    }
  },
  { deep: true }
);
</script>

<style>
/* Add any custom styles here */
</style>
