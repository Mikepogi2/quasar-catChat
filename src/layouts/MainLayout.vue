<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="arrow_back" label="Back" dense v-if="route.name == 'chat'" @click="router.back"/>
        <q-toolbar-title class="absolute-center">
          {{ title }}
        </q-toolbar-title>

        <q-btn flat icon="account_circle" label="Login" dense class="absolute-right q-pa-sm" no-caps to="/auth" v-if="!$p.userDetails.userId"/>

        <q-btn @click="$p.signOutUser" flat icon="account_circle" dense class="absolute-right q-pa-sm" no-caps v-else style="line-height: 20px;">
          Logout <br>
          {{ $p.userDetails.name }}
        </q-btn>


      </q-toolbar>
    </q-header>

    <q-page-container class="container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePiniaStore } from 'src/stores/example-store';

const route = useRoute()
const router = useRouter()
const $p = usePiniaStore()

defineOptions({
  name: 'MainLayout'
})

const title = computed(() => {
  console.log(route.path, route.name)
  if (route.path == '/') return 'Cat Chat'
  else if (route.name == 'chat') return $p.other
  else if (route.name == 'authentication') return 'Login'
})

</script>

