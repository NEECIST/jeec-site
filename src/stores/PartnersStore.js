import { defineStore } from "pinia";
import axios from "axios";

export const usePartnersStore = defineStore("PartnersStore", {
  state: () => {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      partners: {
        gold: [],
        silver: [],
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
      .then((response) => (this.sort(response.data["data"])));
    },
    sort(arr) {
      this.partners.gold = []
      this.partners.silver = []
      this.partners.bronze = []

      arr.forEach((element) => {
        if(element.partnership_tier == "partner_gold"){this.partners.gold.push(element)}
        if(element.partnership_tier == "partner_silver"){this.partners.silver.push(element)}
        if(element.partnership_tier == "partner_bronze"){this.partners.bronze.push(element)}

      });
    },
  },
});
