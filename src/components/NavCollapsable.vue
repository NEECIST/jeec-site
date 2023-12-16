<template lang="">
  <div class="nav__collapsable">
    <WebAppButton></WebAppButton>
    <router-link to="schedule" v-if="!EventSet">Schedule</router-link>
    <router-link to="partners" v-if="!EventSet">Partners</router-link>
    <router-link to="sponsors" v-if="!EventSet">Sponsors</router-link>
    <router-link to="speakers" v-if="!EventSet">Speakers</router-link>
    <router-link to="team" v-if="!EventSet">Team</router-link>
    <div @click="EventSet = true" v-if="!EventSet">Events</div>
    <!-- <option v-for="_event in event" :key="_event.id" :value="_event.external_id">{{ _event.name }}</option> -->

    <div  v-if="EventSet" v-for="_event in event" :key="_event.id" class="menu-item">
          <div class="button" @click="EventSetter(_event.external_id)">{{ _event.name }}</div>
        </div>

  </div>
</template>

<script>

import { mapWritableState, mapActions} from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useTeamStore } from '@/stores/TeamStore'
import { useSpeakersStore } from '@/stores/SpeakersStore';
import { useEventStore } from '@/stores/EventStore'

import { defineProps } from 'vue';
import WebAppButton from './WebAppButton.vue';

export default {
  components: {WebAppButton, },
  data () {
    return {
      EventSet: false
    }
  },
  props: ["event"],
  methods: {
    ...mapActions(usePartnersStore, { updatePartners: 'fill' }),
    ...mapActions(useSpeakersStore, { updateSpeakers: 'fill' }),
    ...mapActions(useTeamStore, { updateTeam: 'fill' }),
    
    EventSetter(id) {
        this.event_id = id;
        this.updateSpeakers(id);
        this.updatePartners(id);
        this.updateTeam(id);
        this.EventSet = false;
    } 
    

    
  },
  computed: {
    ...mapWritableState(useEventStore, ['event_id']),
    
  },
}




</script>
<style lang="">
  
</style>