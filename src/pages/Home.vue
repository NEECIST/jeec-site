<template>
  <div>
    

    <h1 class="visibility-hidden">JEEC</h1>
    <section class="page__section" id="home__coming-soon">
      <h2>19 TO 23 OF FEBRUARY, 2024</h2>
      <h2>THE EVENT STARTS SOON!</h2>
      <div class="coming-soon__countdown">
        <div class="countdown__time__wrapper">
          <div class="countdown__time" id="countdown__days">43</div>
          <div class="countdown__name">Days</div>
        </div>
        <div class="countdown__time countdown__colon">:</div>
        <div class="countdown__time__wrapper">
          <div class="countdown__time" id="countdown__hours">21</div>
          <div class="countdown__name">Hours</div>
        </div>
      </div>
      <p class="home__paragraph home__description">A group of IST students whose main purpose is to organize an event with the intention of closing the gap between the business world and university life.</p>
    </section>
    <section class="page__section" id="home__offers">
      <h2>WHAT WE OFFER</h2>
      <HomeOffers></HomeOffers>
    </section>
  </div>
</template>
<script>
import HomeOffers from "@/components/HomeOffers.vue"
import PrefetchLazy from '@/components/PrefetchLazy.vue';
import axios from "axios"
import { mapGetters } from "vuex";

export default {
  components: { HomeOffers, PrefetchLazy, },
  data() {
    return {
      event: null,
      jeec_api_url: process.env.VUE_APP_JEEC_WEBSITE_API_URL,
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      event_logo:"../../static/jeec-logo.png",
      
    }
  }, methods: {
    ...mapGetters("auth", ["event_id"]),
  },
    mounted() {
    axios
      .get(this.jeec_api_url + "/event_vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
        event_id: this.event_id()
      })
      .then((response) => {
        (this.event = response.data.data)
        console.log(this.event)
        this.loaded = true});
      
      
  },
}
</script>

<style>
.home__paragraph {
  font-size: 1.4rem;
}

#home__coming-soon > h2 {
  font-size: 3rem;
}

#home__coming-soon > h2:last-of-type {
  font-size: 2.6rem;
  padding-top: 1rem;
}

.coming-soon__countdown {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2rem;
}

.countdown__time__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown__time {
  font-family: "Russo One";
  font-size: 7rem;
  color: #4cc9f0;
  text-shadow: 0px 0px 10px #1EE3CF;
  letter-spacing: 1rem;
  margin-right: -1rem;
}

.countdown__colon {
  align-self: flex-start;
  margin-right: -2.3rem;
}

.countdown__name {
  font-family: "Lexend Zetta";
  font-size: 2.5rem;
  color: #4cc9f0;
  text-shadow: 0px 0px 5px #1EE3CF;
  margin-top: -1rem;
}

.home__description {
  padding-top: 4rem;
  max-width: 700px;
  text-align: center;
}

@media screen and (max-width: 1007px) {
  .home__paragraph {
    font-size: 1.2rem;
  }
  #home__coming-soon > h2 {
    font-size: 2.4rem;
  }
  #home__coming-soon > h2:last-of-type {
    font-size: 2rem;
    padding-top: 1rem;
  }
  .countdown__time {
    font-size: 5.4rem;
    letter-spacing: 0.6rem;
  }
  .countdown__name {
    font-size: 1.8rem;
  }
  .countdown__colon {
    margin-right: -1.8rem;
  }
}
</style>