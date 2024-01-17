<template>
  <button class="menu-item" @click="isOpen = !isOpen">
      Events
      <template v-if="isOpen">
        <div class="sub-menu" :class="{active : isOpen}">
  
          <template v-for="_event in events" :key="_event.id">
            <!-- <router-link id="header__logo" to="/"> -->
              <button @click="setEvent(_event.external_id)">{{ _event.name }}</button>
            <!-- </router-link> -->
            
          </template>
        </div>
      </template>
    </button>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useEventStore } from '@/stores/EventStore'

export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    ...mapActions(useEventStore, ['setEvent']),
  },
  computed: {
    ...mapState(useEventStore, ['events']),
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
  cursor: pointer;
}


</style>