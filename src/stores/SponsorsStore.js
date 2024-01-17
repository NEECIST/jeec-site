import { defineStore } from "pinia";
import axios from "axios";

export const useSponsorsStore = defineStore("SponsorsStore", {
  state: () => {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      sponsors: {
        platinum: [],
        gold: [],
        silver:  [],
        bronze: [],
      },
    };
  },
  actions: {
    fill(eventId) {
      axios
      .get(
        process.env.VUE_APP_JEEC_WEBSITE_API_URL +
          "/companies?event_id=" + eventId,
        {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
          },
        }
      )
      .then((response) => (this.format(response.data["data"])));
    },
    format(arr) {

      this.sponsors.platinum = []
      this.sponsors.gold = []
      this.sponsors.silver = []
      this.sponsors.bronze = []
      arr.forEach((element) => {
        // this.sponsors.platinum.push(element)
        console.log(element)
        if(element.partnership_tier == "sponsor_platinum"){this.sponsors.platinum.push(element)}
        if(element.partnership_tier == "sponsor_gold"){this.sponsors.platinum.push(element)}
        if(element.partnership_tier == "sponsor_silver"){this.sponsors.platinum.push(element)}
        if(element.partnership_tier == "sponsor_bronze"){this.sponsors.platinum.push(element)}

      });
    },
  },
});
