<template>
  <TheHeader></TheHeader>
  <main class="view">
    <router-view></router-view>
  </main>
  <TheFooter></TheFooter>
</template>

<script>
  import TheHeader from './components/TheHeader.vue' 
  import TheFooter from './components/TheFooter.vue';

  export default({
    components: { TheHeader, TheFooter, },
    mounted() {
      this.$watch( () => this.$route.path, (to, from) => {
        document.documentElement.focus()
      })
    },
  });
</script>

<style>
</style>
