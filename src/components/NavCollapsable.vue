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
<style>
.nav__collapsable {
  position: absolute;
  right: 0;
  top: -10px;
  transform: translateY(-100%);
  width: 100%;
  display: none;
  flex-direction: column;  
  align-items: center;
  padding: 60px 0 20px 0;
  transition: transform .4s;
  z-index: -1;
  border-radius: var(--border-radius-default);
  overflow: hidden;
}

.nav__collapsable::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  /* background: radial-gradient(
    150% 300% at top left,
    rgba(76, 201, 240, 0.35) 0%,
    rgba(16, 137, 255, 0.07) 82.6%,
    rgba(70, 144, 212, 0.20)); */
  background: radial-gradient(147.72% 126.93% at 16.43% 20.07%, rgba(76, 201, 240, 0.35) 0%, rgba(16, 137, 255, 0.07) 82.6%, rgba(70, 144, 212, 0.00) 100%); 
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
}

.nav__toggle.active ~ .nav__collapsable{
  transform: translateY(0%);
  transition: transform ease-out .5s;
}

/* .nav__collapsable > .webapp-btn {
  display: none;
  position: absolute;
  height: 38px;
  background: linear-gradient(230deg, #F72585, #7209B7 90%);
  border: none;
  font-size: 0.9rem;
  color: white;
  border-radius: 18px;
  cursor: pointer;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  left: 20px;
  top: 20px;
  width: auto;
} */

.nav__collapsable > a{
  font-size: 1.5rem;
  text-decoration: none;
  font-family: "Russo One";
  width: 80%;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.5s;
}

.nav__toggle.active ~ .nav__collapsable > a {
  opacity: 1;
  transition: all 0.5s;
}

.nav__collapsable > :is(a:hover, a:focus-visible){
  background: radial-gradient(
    150% 300% at top left,
    rgba(40, 40, 40, 0.35),
    rgba(0, 0, 0, 0.35));
} 

.nav__collapsable > .webapp-btn {
  background: linear-gradient(230deg, #F72585, #7209B7 90%);
  border: none;
  font-size: 1.3rem;
  color: white;
  border-radius: 18px;
  cursor: pointer;
  padding: 0.5rem 2rem;
  display: none;
  justify-content: center;
  align-items: center;
  width: auto;
  font-family: 'Lexend Deca';
  font-size: 0.9rem;
}

@media screen and (max-width: 1007px) {
  .nav__collapsable {
    display: flex;
  }
}

@media screen and (max-width: 640px) {
  .nav__collapsable {
    width: 100vw;
  }
  .nav__collapsable > .webapp-btn {
    display: flex;
    position: static;
  }
}
</style>