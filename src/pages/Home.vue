<template>
  <div>
    <section id="home__coming-soon">
      <h1>19 TO 23 OF FEBRUARY, 2024</h1>
      <h2>THE EVENT STARTS SOON!</h2>
      <div class="coming-soon__countdown">
        <div class="countdown__days__wrapper">
          <div class="countdown__time" id="countdown__days">99</div>
          <div>Days</div>
        </div>
        <div class="countdown__time">:</div>
        <div class="countdown__hours__wrapper">
          <div class="countdown__time" id="countdown__hours">24</div>
          <div>Hours</div>
        </div>
      </div>
      <p>A group of IST students whose main purpose is to organize an event with the intention of closing the gap between the business world and university life.</p>
    </section>
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {
      event: null,
      jeec_api_url: process.env.VUE_APP_JEEC_WEBSITE_API_URL,
      jeec_brain_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      event_logo:"../../static/jeec-logo.png",
    }
  }, mounted() {
    axios
      .get(this.jeec_api_url + "/event", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
      })
      .then((response) => {
        (this.event = response.data.data)
        this.loaded=true;
      console.log(this.event)});
  },
}
</script>