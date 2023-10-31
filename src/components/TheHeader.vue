<template>
  <header>
    <nav>
      <router-link id="header__logo" to="/">
        <img class="classfied" src="@/assets/jeec-logo-dark.svg" alt="JEEC Logo">
      </router-link>
      <div class="header__right">
        <div class="nav__links">
          <router-link to="schedule">Schedule</router-link>
          <router-link to="team">Team</router-link>
          <router-link to="partners">Partners</router-link>
          <router-link to="sponsors">Sponsors</router-link>
          <router-link to="speakers">Speakers</router-link>
        </div>
        <WebAppButton></WebAppButton>
        <NavHamburguer></NavHamburguer>
        <NavCollapsable></NavCollapsable>
      </div>
    </nav>
  </header>
</template>

<script>
import NavHamburguer from '@/components/NavHamburguer.vue';
import WebAppButton from '@/components/WebAppButton.vue';
import NavCollapsable from '@/components/NavCollapsable.vue';


export default {
  components: { NavHamburguer, WebAppButton, NavCollapsable},
}
</script>