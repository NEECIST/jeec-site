<template>
  <button class="menu-item" @click="isOpen = !isOpen">
      Events
      <template v-if="isOpen">
        <div class="sub-menu" :class="{active : isOpen}">
  
          <template v-for="_event in event" :key="_event.id">
            <button @click="EventSetter(_event.external_id)">{{ _event.name }}</button>
          </template>
        </div>
      </template>
    </button>
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
.menu-item {
  border: none;
  background-color: transparent;
  position: relative
}

.menu-item .sub-menu {
  position: absolute;
  background-color: var(--clr-dark-header);
  top: calc(100% + 10px);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
  justify-content: center;
  opacity: 0;
  left: -2rem;
  padding: 10px 1rem;
  width: calc(100% + 3rem);
  display: flex;
  flex-direction: column;
}

.menu-item .sub-menu.active {
  opacity: 1;
  transition: all 1s;
}

.sub-menu button {
  background-color: transparent;
  border: none;
  font-family: 'Russo One';
  font-size: 1rem;
  border-radius: 5px;
}

.sub-menu button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}


</style>