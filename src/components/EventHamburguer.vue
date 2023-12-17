<template>
    <button @click="toggleActive" v-on:event="handle" v-bind:class="{active: isActive}" class="event__toggle">
        Events
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
      },
    },
    created() {
      window.addEventListener("resize", this.onResize)
    },
    destroyed() {
      window.removeEventListener("resize", this.onResize)
    },
    mounted() {
      this.$watch( () => this.$route.path, (to, from) => {
        this.isActive = false
      })
    },
  }
  </script>
  <style>
  .nav__toggle.active span{
    transition: all 0.5s, box-shadow 0s;
  }
  
  .nav__toggle span:nth-child(1){
    top: 0;
    left: 0%;
  }
  
  .nav__toggle span:nth-child(2){
    top: 10px;
  }
  
  .nav__toggle span:nth-child(3){
    top: 10px;
    box-shadow: 0px 0px 0px #F72585;
  }
  
  .nav__toggle span:nth-child(4){
    top: 20px;
    left: 0%;
  }
  
  .nav__toggle.active span:nth-child(1){
    width: 0%;
    left: 50%;
    top: 10px
  }
  
  .nav__toggle.active span:nth-child(2){
    rotate: 45deg;
    height: 4px;
  }
  
  .nav__toggle.active span:nth-child(3){
    rotate: -45deg;
    box-shadow: 0px 0px 3px #F72585;
    height: 4px;
  }
  
  .nav__toggle.active span:nth-child(4){
    width: 0%;
    left: 50%;
    top: 10px
  }
  </style>