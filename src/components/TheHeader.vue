<template>
  <header>
    <nav>
      <router-link id="header__logo" to="/">
        <img class="classfied" src="@/assets/jeec-logo-dark.svg" alt="JEEC Logo">
      </router-link>
      <div class="header__right">
        <div class="nav__links">
          <router-link v-if="event_id==event_default_id" to="schedule">Schedule</router-link>
          <router-link to="partners">Partners</router-link>
          <!-- <router-link v-if="event_id!=event_default_id" to="sponsors">Sponsors</router-link> -->
          <router-link to="speakers">Speakers</router-link>
          <router-link to="team">Team</router-link>
          <EventDropdown></EventDropdown>
        </div>
        <WebAppButton></WebAppButton>
        <NavHamburguer></NavHamburguer>
        <NavCollapsable></NavCollapsable>
      </div>
    </nav>
  </header>
  <div v-if="event_id == jeec23_id" class="jeec_23_warning">
    <p class="warning">You are now in JEEC 23!</p>
  </div>
</template>

<script>
import NavHamburguer from '@/components/NavHamburguer.vue';
import WebAppButton from '@/components/WebAppButton.vue';
import NavCollapsable from '@/components/NavCollapsable.vue';
import EventDropdown from './EventDropdown.vue';

import { mapState } from 'pinia';
import { useEventStore } from '@/stores/EventStore';

export default {
  components: { NavHamburguer, WebAppButton, NavCollapsable, EventDropdown},
  computed: {
    ...mapState(useEventStore, ['event_id', 'event_default_id', 'jeec23_id']),
  }
}
</script>

<style>
header {
  z-index: 9999;
  position: fixed;
  width: 100%;

}

nav {
  background-color: var(--clr-dark-header);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 10px 0;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.27);
  width: 100%;
  border-radius: 0px 0px 5px 5px;
}

#header__logo {
  margin-left: 10px;
}

#header__logo img{
  height: 50px;
}

.header__right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 30px;
  position: relative;
  z-index: 0;
  height: 100%;
  width: auto;
}

/* .select {
  font-family: "Russo One";
  text-decoration: none;
  width: 100px;
  font-size: 1.1rem;
  padding: .7rem .5rem;
  border-radius: 5px;
  background-color: var(--color-header-dark);
} */

/* .events {
  font-family: "Russo One";
  text-decoration: none;
  font-size: 1.1rem;
  padding: .7rem .5rem;
  border-radius: 5px;
  background-color: var(--color-header-dark);
} */


.nav__links {
  display: flex;
  gap: 20px;
}

.nav__links > * {
  font-family: "Russo One";
  text-decoration: none;
  font-size: 1.1rem;
  padding: .7rem .5rem;
  border-radius: 5px;
  cursor: pointer;
}

.nav__links > :is(*:hover, *:focus-visible) {
  background-color: rgba(255, 255, 255, 0.1);
}

.webapp-btn {
  height: 38px;
  background: linear-gradient(230deg, #F72585, #7209B7 90%);
  border: none;
  font-size: 0.9rem;
  color: white;
  border-radius: 18px;
  cursor: pointer;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.nav__toggle {
  border: none;
  background: none;
  width: 32px;
  height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  display: none;
}

.nav__toggle span {
  background-color: #F72585;
  width: 100%;
  height: 3px;
  display: block;
  position: absolute;
  border-radius: 3px;
  rotate: 0;
  box-shadow: 0px 0px 3px #F72585;
  transition: all 0.5s, box-shadow 0s;
}

@media screen and (max-width: 1007px){
  .header__right{
    width: 260px;
    justify-content: end;
  }
  .nav__toggle {
    position: relative;
    display: inline;
  }
  .nav__links {
    position: absolute;
    display: none;
  }
}

@media screen and (max-width: 640px) {
  header .webapp-btn {
    position: absolute;
    display: none;
  }
}
.jeec_23_warning{
  display: flex;
  background-color: #79e0ff;
  position: fixed;
  height: 30px;
  z-index: 2;
  top: 70px;
  width: 90%;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  left: 50%;
  translate: -50% 0;
  border-radius: 0px 0px 30px 30px;
}

.warning{
  color: white;
  font-weight: 600;
}
</style>
