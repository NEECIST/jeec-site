<template>
  <div class="weekly-rewards" v-if="rewards">
    <div class="rewards-container">
      <div v-for="(reward, key) in rewards" :key="reward" class="reward big radient-border-passthrough">
        <img :src="jeec_brain_url + reward.image" class="reward-img">
      </div>
    </div>
  </div>
</template>



<script>

//import { Carousel, Slide } from 'vue3-carousel'
//import 'vue3-carousel/dist/carousel.css'

export default {
  name: "JeecpotPrizes",
  props: {
    rewards: Object,
  },
  data() {
    return {
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
    };
  },
  computed: {},
};
</script>

<style scoped>
.weekly-rewards {
  font-weight: 600;
}

.rewards-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 600px;
  margin: 0 auto;
  gap: 20px;
  padding-bottom: 1rem;
}

.reward {
  position: relative;
  width: 120px;
  aspect-ratio: 1;
  box-shadow: 0px 0px 15px #F72585;
  display: flex;
  justify-content: center;
  align-items: center;
  --border-radius: 50%;
  --border-background: linear-gradient(135deg, #A414A4, #F72585 40%, #7209B7)
}

.reward::before {
  content: "";
}

.reward.big {
  width: 140px;
}

.reward-img {
  width: 97%;
  height: 97%;
  border-radius: 50%;
  object-fit: contain;
  background-color: white;
}

.ranking {
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  box-shadow: 0px 0px 15px #F72585;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first {
  background-color: #C1A875;
  border: #ddc695 2px solid;
}

.second {
  background-color: #a8a8a8;
  border: #c4c2c2 2px solid;
}

.third {
  background-color: #C9705C;
  border: #e18a77 2px solid;
}
</style>