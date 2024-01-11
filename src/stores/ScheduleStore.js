import { defineStore } from "pinia";
import axios from "axios";

export const useScheduleStore = defineStore("ScheduleStore", {
  state: () => {
    return {
      activities: {
        monday: [{isShowing: false} ,[]],
        tuesday: [{isShowing: false}, []],
        wednesday: [{isShowing: false}, []],
        thursday: [{isShowing: false}, []],
        friday: [{isShowing: false}, []],
      },
    };
  },
  actions: {
    fill() {
      axios
      .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/activities_vue", {
        auth: {
          username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
          password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
        },
      })
      .then((response) => (this.sortActivities(response.data["data"])));
      
      
    }, 
    sortActivities(array) {
      array.forEach(activity => {
        this.activities[this.formatDate(activity.day)][1].push(activity)
      });
     }, 
     formatDate(str) {
       return str.slice(12).toLowerCase()
     }
  },
});
