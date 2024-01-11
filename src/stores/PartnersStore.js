import { defineStore } from 'pinia';
import axios from "axios";

export const usePartnersStore = defineStore('PartnersStore', {
  state: () => {
    return {
      event: null,
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      partners:
      {
        gold: {},
        silver: {},
        bronze: {},
      }
    }
  },
  actions: {
    fill (eventid){
      if (eventid==undefined){
        axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=gold', {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        },
      })
      .then(response => (this.partners.gold = response.data['data']));
      axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=silver', {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        },
      })
      .then(response => (this.partners.silver = response.data['data']));
      axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=bronze', {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY
        },
      })
      .then(response => (this.partners.bronze = response.data['data']));
      }
      else{
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=gold&event_id='+eventid, {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
        })
        .then(response => (this.partners.gold = response.data['data']));
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=silver&event_id='+eventid, {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
          event_id: this.event_id
        })
        .then(response => (this.partners.silver = response.data['data']));

      axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/companies_vue?partnership_tier=bronze&event_id='+eventid, {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
          event_id: this.event_id
        })
        .then(response => (this.partners.bronze = response.data['data']));
      }
      

      
    },
  }
});