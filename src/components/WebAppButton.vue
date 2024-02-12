<template lang="">
  <a v-if="toExternal" href="app.jeec.ist" class="webapp-btn external">Sign In</a>
  <router-link v-else to="/webapp" class="webapp-btn">Web App</router-link>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  toExternal: {
    default: false
  }
});
</script>

<style>
.webapp-btn.external {
}
</style>