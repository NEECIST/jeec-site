<template lang="">
  <div class="nav__collapsable">
    <WebAppButton></WebAppButton>
    <router-link to="schedule">Schedule</router-link>
    <router-link to="partners">Partners</router-link>
    <router-link to="sponsors">Sponsors</router-link>
    <router-link to="speakers">Speakers</router-link>
    <router-link to="team">Team</router-link>
    <!-- <div v-for="_event in event" :key="_event.id" :value="_event.external_id">{{ _event.name }}</div> -->
    <!-- <option v-for="_event in event" :key="_event.id" :value="_event.external_id">{{ _event.name }}</option> -->
  </div>
</template>
<script>

import { defineProps } from 'vue';
import WebAppButton from './WebAppButton.vue';

export default {
  components: {WebAppButton, },
  // defineProps({
  // greetingMessage: String
  // }),
  props: ["event"],
  // methods: {
  //   ...mapActions(usePartnersStore, { updatePartners: 'fill' }),
  //   ...mapActions(useSpeakersStore, { updateSpeakers: 'fill' }),
  //   ...mapActions(useTeamStore, { updateTeam: 'fill' }),
    
  //   EventSetter(id) {
  //       this.event_id = id;
  //       this.updateSpeakers(id);
  //       this.updatePartners(id);
  //       this.updateTeam(id);
  //   } 
    

    
  // },
  // computed: {
  //   ...mapWritableState(useEventStore, ['event_id']),
    
  // },
}




</script>
<style lang="">
  
</style>