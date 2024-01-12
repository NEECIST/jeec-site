import { defineStore } from "pinia";
import axios from "axios";

export const useSponsorsStore = defineStore("SponsorsStore", {
  state: () => {
    return {
      event: null,
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
    fill() {
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
      // .get(
      //   process.env.VUE_APP_JEEC_WEBSITE_API_URL +
      //     "/companies?tier=sponsor_platinum",
      //   {
      //     auth: {
      //       username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
      //       password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
      //     },
      //   }
      // )
      // .then((response) => (this.sponsors.gold = response.data["data"]));
      // axios
      //   .get(
      //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
      //       "/companies?tier=sponsor_gold",
      //     {
      //       auth: {
      //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
      //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
      //       },
      //     }
      //   )
      //   .then((response) => (this.sponsors.gold = response.data["data"]));

      // axios
      //   .get(
      //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
      //       "/companies?tier=sponsor_silver",
      //     {
      //       auth: {
      //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
      //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
      //       },
      //     }
      //   )
      //   .then((response) => (this.sponsors.silver = response.data["data"]));

      // axios
      //   .get(
      //     process.env.VUE_APP_JEEC_WEBSITE_API_URL +
      //       "/companies?tier=sponsor_bronze",
      //     {
      //       auth: {
      //         username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
      //         password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
      //       },
      //     }
      //   )
      //   .then((response) => (this.sponsors.bronze = response.data["data"]));
    },
    format(arr) {

      this.sponsors.platinum = []
      this.sponsors.gold = []
      this.sponsors.silver = []
      this.sponsors.bronze = []
      arr.forEach((element) => {
        if(element.partnership_tier == "sponsor_platinum"){this.sponsors.platinum.push(element)}
        if(element.partnership_tier == "sponsor_gold"){this.sponsors.gold.push(element)}
        if(element.partnership_tier == "sponsor_silver"){this.sponsors.silver.push(element)}
        if(element.partnership_tier == "sponsor_bronze"){this.sponsors.bronze.push(element)}

      });
    },
  },
});
