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
        main_sponsor:[],
        sponsors:[],
        research_clubs:[],
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
      this.partners.main_sponsor = []
      this.partners.sponsors = []
      this.partners.research_clubs = []

      arr.forEach((element) => {
        if(element.partnership_tier == "partner_gold"){this.partners.gold.push(element)}
        if(element.partnership_tier == "partner_silver"){this.partners.silver.push(element)}
        if(element.partnership_tier == "partner_bronze"){this.partners.bronze.push(element)}
        if(element.partnership_tier == "main_sponsor"){this.partners.main_sponsor.push(element)}
        if(element.partnership_tier == "sponsor_platinum"){this.partners.sponsors.push(element)}
        if(element.partnership_tier == "sponsor_gold"){this.partners.sponsors.push(element)}
        if(element.partnership_tier == "sponsor_silver"){this.partners.sponsors.push(element)}
        if(element.partnership_tier == "sponsor_bronze"){this.partners.sponsors.push(element)}
        if(element.partnership_tier == "nucleo"){this.partners.research_clubs.push(element)}

      });
    },
  },
});
