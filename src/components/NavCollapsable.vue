<template lang="">
  <div class="nav__collapsable">
    <WebAppButton></WebAppButton>
    <router-link to="schedule">Schedule</router-link>
    <router-link to="team">Team</router-link>
    <router-link to="partners">Partners</router-link>
    <router-link to="sponsors">Sponsors</router-link>
    <router-link to="speakers">Speakers</router-link>
  </div>
</template>
<script>
import WebAppButton from './WebAppButton.vue';

export default {
  components: {WebAppButton, },
}
</script>
<style lang="">
  
</style>