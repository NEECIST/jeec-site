<template>
  <button @click="toggleActive" v-bind:class="{active: isActive}" class="nav__hamburguer-button">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  },
}
</script>
<style lang="">
  
</style>