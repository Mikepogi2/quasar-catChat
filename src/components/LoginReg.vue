<template>
    <q-form @submit="$p.submitForm($q.notify)">
        <q-input outlined rounded v-model="$p.userName" placeholder="Name" class="q-mb-md" v-if="$p.tab == 'register'" required/>
        <q-input outlined rounded v-model="$p.email" placeholder="Email" type="email" class="q-mb-md" required/>
        <q-input outlined rounded v-model="$p.password" placeholder="Password" type="password" class="q-mb-md" required/>
        <div class="flex justify-end">
            <q-btn color="primary" :label=" $p.tab" rounded type="submit"/>
        </div>
    </q-form>
    {{ $p.tab }}
</template>

<script setup>
import { usePiniaStore } from 'src/stores/example-store.js';
import { useQuasar } from 'quasar';

const $q = useQuasar()
const $p = usePiniaStore()

</script>
