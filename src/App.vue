<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { usePiniaStore } from './stores/example-store';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const $p = usePiniaStore()

onMounted(() => {
  $p.handleAuthChange(router);
})

defineOptions({
  name: 'App'
});
</script>
