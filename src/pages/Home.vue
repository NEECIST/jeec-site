<template>
  <div>
    <h1 class="visibility-hidden">JEEC</h1>
    <section class="page__section" id="home__coming-soon">
      <h2>19th to 23rd FEBRUARY, 2024</h2>
      <template v-if="isCountdownExpired">
        <h2>THE EVENT HAS STARTED</h2>
        <h2 class="glowing-text">See you soon</h2>
      </template>
      <template v-else>
        <h2>THE EVENT STARTS SOON!</h2>
        <HomeCountdown @countdownExpired="isCountdownExpired = true"></HomeCountdown>
      </template>
      <p class="home__paragraph home__description">A group of IST students whose main purpose is to organize an event with the intention of closing the gap between the business world and university life.</p>
    </section>
    <section class="page__section">
      <HomeLocation></HomeLocation>
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
import HomeOffers from "@/components/HomeOffers.vue";
import HomeCompanyStudents from "@/components/HomeCompanyStudents.vue";
import HomeLocation from "@/components/HomeLocation.vue";

export default {
  components: { HomeCountdown, HomeOffers, HomeCompanyStudents, HomeLocation, },
  data() {
    return {
      isCountdownExpired: false,
    }
  }
}
</script>

<style>
.glowing-text {
  font-family: "Russo One";
  font-size: 5rem;
  color: #79e0ff;
  text-shadow: 0px 0px 10px #1EE3CF;
  letter-spacing: 1rem;
  margin-top: 3rem;
  text-transform: uppercase;
}

.home__paragraph {
  font-size: 1.4rem;
}

#home__coming-soon > h2:first-child {
  font-size: 3rem;
}

#home__coming-soon > h2:nth-child(2) {
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
  #home__coming-soon > h2:first-child {
    font-size: 2.4rem;
  }
  #home__coming-soon > h2:nth-child(2) {
    font-size: 2rem;
    padding-top: 1rem;
  }
  .glowing-text {
    font-size: 4.4rem;
  }
}
@media screen and (max-width: 640px) {
  .home__paragraph {
    font-size: 1.1rem;
  }
  #home__coming-soon > h2:first-child {
    font-size: 2.2rem;
  }
  #home__coming-soon > h2:nth-child(2) {
    font-size: 1.8rem;
    padding-top: 1rem;
  }
  .glowing-text {
    font-size: 3.8rem;
  }
}
@media screen and (max-width: 500px) {
  .glowing-text {
    font-size: 3.2rem;
  }
}
</style>
