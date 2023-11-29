<template>
  <div>
    <h1 class="page__title">SPEAKERS</h1>
    <Carousel :items-to-show="3" :autoplay="2000" :wrap-around="true" :transition="500">
      <Slide v-for="speaker in speakers" :key="speaker">
        <button class="speaker__card">
          <img class="speaker__image" :src="jeec_api_url + speaker.image" :alt="'Speaker ' + speaker.name + ' image'">
          <div class="speaker__card__flex">
            <p class="speaker__name">Meet {{ speaker.name }}</p>
            <img class="company__logo" :src="jeec_api_url + speaker.company_logo" alt="">
          </div>
        </button>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
    
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useSpeakersStore } from '@/stores/modules/SpeakersStore';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  computed: {
    ...mapState(useSpeakersStore, ['speakers']),
  }, components: {
    Carousel,
    Slide,
    Navigation,
  }, data() {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
    }
  }, mounted() {
    console.log(this.speakers)
  },
}
</script>

<style scoped>
.speaker__card {
  height: 600px;
  width: 250px;
  background: radial-gradient(132.68% 158.3% at -9.01% -11.24%,rgba(76, 201, 240, 0.85) 0%, rgba(16, 147, 188, 0.55) 58.9%, rgba(76, 201, 240, 0.00) 100%);
  border: none;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.speaker__image {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 20px;
}

.speaker__name {
  text-transform: uppercase;
}

.speaker__card .company__logo {
  max-width: 80%;
  max-height: 150px;
  object-fit: cover;
} 
</style>