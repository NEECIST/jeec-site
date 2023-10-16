<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<script>
  import TheHeader from './components/TheHeader.vue' 

  export default({
    components: { TheHeader, },
  });
</script>

<style>
</style>
