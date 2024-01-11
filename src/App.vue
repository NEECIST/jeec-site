<template>
  <PrefetchLazy v-if="loadPrefetch"></PrefetchLazy>
  <TheHeader></TheHeader>
  <main>
    <router-view></router-view>
  </main>
  <TheFooter></TheFooter>
</template>

<script>
  import TheHeader from '@/components/TheHeader.vue' 
  import TheFooter from '@/components/TheFooter.vue'
  import PrefetchLazy from '@/PrefetchLazy.vue';

  export default({
    components: { 
      TheHeader, TheFooter, PrefetchLazy
    }, data() {
      return {
        loadPrefetch: false
      }
    }, mounted() {
      this.$watch( () => this.$route.path, (to, from) => {
        document.documentElement.focus()
      }),

      this.loadPrefetch = true
    }
  });
</script>

<style>
</style>
