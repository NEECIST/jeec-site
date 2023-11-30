import { defineStore } from 'pinia';
import { mapWritableState } from 'pinia'
import axios from "axios";

export const useEventStore = defineStore('EventStore', {
  state: () => {
    return {
      bigdata: {
        event_id: '',
        event_default: null
      }
      
    }
  },
  actions: {
    fill() {
    axios
    .get(this.jeec_api_url + "/event_vue", {
      auth: {
        username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
        password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
      },
    })
    .then((response) => {
      (this.bigdata.event_default = response.data.data)
      // console.log(response.data)
      // this.loaded = true
    });
    
  }}
  // mutations: {
  //   setEvent_id(id) {
  //     this.event_id = id
  //   },
  // }
});


