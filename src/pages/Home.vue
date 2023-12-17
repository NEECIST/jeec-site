<template>
  <div>
    

    <h1 class="visibility-hidden">JEEC</h1>
    <section class="page__section" id="home__coming-soon">
      <h2>19 TO 23 OF FEBRUARY, 2024</h2>
      <h2>THE EVENT STARTS SOON!</h2>
      <HomeCountdown></HomeCountdown>
      <p class="home__paragraph home__description">A group of IST students whose main purpose is to organize an event with the intention of closing the gap between the business world and university life.</p>
    </section>
    <section class="page__section">
      <HomeOffers></HomeOffers>
    </section>
    <section class="page__section">
      <HomeCompanyStudents></HomeCompanyStudents>
    </section>
  </div>
</template>
<script>
import HomeCountdown from "@/components/HomeCountdown.vue";
import HomeOffers from "@/components/HomeOffers.vue"
import PrefetchLazy from '@/components/PrefetchLazy.vue';
import axios from "axios"
import { useEventStore } from '@/stores/EventStore'
import { mapWritableState } from 'pinia'

export default {
  components: { HomeOffers, PrefetchLazy, },
  data() {
    return {
      event__id: null,
      jeec_api_url: process.env.VUE_APP_JEEC_WEBSITE_API_URL,
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      event_logo:"../../static/jeec-logo.png",
      
    }
  }, computed: {
    ...mapWritableState(useEventStore, ['event_id'])
  },
    mounted() {
    axios
      .get(this.jeec_api_url + "/event_vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
        // event_id: this.event_id
      })
      .then((response) => {
        (this.event__id = response.data.event)
        console.log(this.event__id)
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
}
@media screen and (max-width: 640px) {
  .home__paragraph {
    font-size: 1.1rem;
  }
  #home__coming-soon > h2 {
    font-size: 2.2rem;
  }
  #home__coming-soon > h2:last-of-type {
    font-size: 1.8rem;
    padding-top: 1rem;
  }
}
</style>