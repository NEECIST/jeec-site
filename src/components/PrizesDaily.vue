<template>
  <div class="daily-rewards" v-if="rewards">
    <carousel :breakpoints="carousel_breakpoints" :items-to-show="4.8" :wrap-around="true" autoplay="2500">
      <Slide v-for="(reward, key) in rewards" :key="reward" class="reward">
        <div class="reward-img radient-border-passthrough">
          <img :src="jeec_brain_url + reward.image">
        </div>
        <p>{{ weekDays[key] }}</p>
      </Slide>
    </carousel>
  </div>
</template>



<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: "PrizesDaily",
  props: {
    rewards: Object,
  },
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      carousel_breakpoints: {
        0: { itemsToShow: 2.8 },
        640: { itemsToShow: 3.6 },
        900: { itemsToShow: 4.8 }
      },
      weekDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    };
  },
  computed: {},
};
</script>

<style scoped>
.carousel {
  max-width: 900px;
  margin: 0 auto;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  transform: scale(0.8);
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}

.carousel__slide--prev {
  transform: scale(1);
}

.carousel__slide--next {
  transform: scale(1);
}

.carousel__slide--active {
  transform: scale(1.1);
}

.reward {
  padding: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reward-img {
  width: 110px;
  aspect-ratio: 1;
  box-shadow: 0px 0px 10px #4c99f0;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  --border-radius: 50%;
  --border-background: linear-gradient(135deg, #605ED0, #4CC9F0 40%, #7209B7);
}

.reward-img::before {
  content: "";
}

.reward-img img {
  height: 97%;
  width: 97%;
  border-radius: 50%;
  background-color: white;
}
</style>