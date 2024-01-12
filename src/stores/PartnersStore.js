import { defineStore } from "pinia";
import axios from "axios";

export const usePartnersStore = defineStore("PartnersStore", {
  state: () => {
    return {
      event: null,
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
      if (eventId == undefined) {
        console.log(eventId)
        axios
          .get(
            process.env.VUE_APP_JEEC_WEBSITE_API_URL +
              "/companies",
            {
              auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
              },
            }
          )
          .then((response) => (this.format(response.data["data"])));
        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=partner_gold",
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.gold = response.data["data"]));
        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=partner_silver",
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.silver = response.data["data"]));
        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=partner_bronze",
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.bronze = response.data["data"]));
      } else {
        console.log(eventId)
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

        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=gold&event_id=" + eventId,
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.gold = response.data["data"]));
        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=silver&event_id=" + eventId,
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.silver = response.data["data"]));

        // axios
        //   .get(
        //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
        //       "/companies_vue?tier=bronze&event_id=" + eventId,
        //     {
        //       auth: {
        //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        //       },
        //     }
        //   )
        //   .then((response) => (this.partners.bronze = response.data["data"]));
      }
    },
    format(arr) {
      this.partners.gold =[]
      this.partners.silver=[]
      this.partners.bronze = []

      arr.forEach((element) => {
        if(element.partnership_tier == "partner_gold"){this.partners.gold.push(element)}
        if(element.partnership_tier == "partner_silver"){this.partners.silver.push(element)}
        if(element.partnership_tier == "partner_bronze"){this.partners.bronze.push(element)}

      });
      // console.log(this.partners.gold)
    },
  },
});
