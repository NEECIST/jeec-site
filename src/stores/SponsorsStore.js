import { defineStore } from 'pinia';
import axios from "axios";

export const useSponsorsStore = defineStore('SponsorsStore', {
  state: () => {
    return {
      event: null,
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      sponsors:
      {
        platinum: {},
        gold: {},
        silver: {},
        bronze: {},
      }
    }
  },
  actions: {
    fill (){
      axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?sponsorship_tier=gold', {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        }
      })
      .then(response => (this.sponsors.gold = response.data['data']));

      axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?sponsorship_tier=silver', {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        })
        .then(response => (this.sponsors.silver = response.data['data']));

      axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies?sponsorship_tier=bronze', {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          }
        })
        .then(response => (this.sponsors.bronze = response.data['data']));
    },
  }
});