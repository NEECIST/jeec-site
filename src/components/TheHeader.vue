<template>
  <header>
    <nav class="nav">
      <router-link id="header__logo" to="/">
        <img src="@/assets/logo-dark.svg" alt="JEEC Logo">
      </router-link>
      <div class="header__right">
        <WebAppLoginButton></WebAppLoginButton>
        <NavHamburguer></NavHamburguer>
      </div>
    </nav>
  </header>
</template>

<script>
import NavHamburguer from '@/components/NavHamburguer.vue';
import WebAppLoginButton from './WebAppLoginButton.vue';

export default {
  components: { NavHamburguer, WebAppLoginButton},
}
</script>