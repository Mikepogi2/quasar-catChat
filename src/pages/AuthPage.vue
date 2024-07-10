<template>
  <q-page class="q-pa-md">
    <q-card>
        <q-tabs
          v-model="$p.tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" no-caps/>
          <q-tab name="register" label="Register" no-caps/>
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="$p.tab" animated>
          <q-tab-panel name="login">
            <LoginReg/>
          </q-tab-panel>

          <q-tab-panel name="register">
            <LoginReg/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script setup>
// import { ref } from 'vue';
// import { useQuasar } from 'quasar';
import { usePiniaStore } from 'src/stores/example-store.js'
import LoginReg from 'src/components/LoginReg.vue'

const $p = usePiniaStore()
</script>

<style>



</style>
