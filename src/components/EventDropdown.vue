<template>
  <div class="menu-item" @click="isOpen = !isOpen">
      Events
    <!-- <svg viewBox="0 0 1030 638" width="10">
      <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
    </svg>
    <transition name="fade" appear> -->
      <div class="sub-menu" v-if="isOpen">

        <div v-for="_event in event" :key="_event.id" class="menu-item">
          <div class="button" @click="EventSetter(_event.external_id)">{{ _event.name }}</div>
        </div>
      </div>
    <!-- </transition> -->
  </div>
</template>



<script>

import { mapWritableState, mapActions} from 'pinia'
import { usePartnersStore } from '@/stores/PartnersStore'
import { useTeamStore } from '@/stores/TeamStore'
import { useSpeakersStore } from '@/stores/SpeakersStore';
import { useEventStore } from '@/stores/EventStore'

export default {
  name: 'eventdropdown',
  props: ["event"],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    ...mapActions(usePartnersStore, { updatePartners: 'fill' }),
    ...mapActions(useSpeakersStore, { updateSpeakers: 'fill' }),
    ...mapActions(useTeamStore, { updateTeam: 'fill' }),
    
    EventSetter(id) {
        this.event_id = id;
        this.updateSpeakers(id);
        this.updatePartners(id);
        this.updateTeam(id);
        console.log(id);
    } 
    

    
  },
  computed: {
    ...mapWritableState(useEventStore, ['event_id']),
    
  },
}
</script>

<style>
.menu-item svg {
  width: 10px;
  margin-left: 10px;
}

.menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>