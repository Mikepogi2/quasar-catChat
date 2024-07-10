<template>
  <q-page class="q-pa-md">
    <q-list separator>
      <q-item v-for="(contact, key) in contacts" :key="key" clickable v-ripple :to="'/chat/' + key">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="contact.online ? 'green' : 'grey'">
            {{ contact.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import { usePiniaStore } from 'src/stores/example-store';

const $p = usePiniaStore()
const contacts = computed(() => {
  return $p.Gcontacts
})

// const contacts = ref([ {
//     id: 1,
//     name: 'Ruddy Jedrzej',
//     isOnline: true
//   }, {
//     id: 2,
//     name: 'Mallorie Alessandrini',
//     isOnline: false
//   }, {
//     id: 3,
//     name: 'Elisabetta Wicklen',
//     isOnline: true
//   }, 
// ])

</script>

<style>



</style>
