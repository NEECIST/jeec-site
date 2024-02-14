import { defineStore } from "pinia";
import axios from "axios";

export const useSpeakersStore = defineStore("SpeakersStore", {
  state: () => {
    return {
      main_speakers: [],
      other_speakers: [],
    };
  },
  actions: {
    fill(eventId) {
      axios
        .get(
          process.env.VUE_APP_JEEC_WEBSITE_API_URL +
            "/speakers_vue?event_id=" +
            eventId,
          {
            auth: {
              username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
              password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
            },
          }
        )
        .then((response) => {
          let all_speakers = response.data["data"];
          this.main_speakers = [];
          this.other_speakers = [];
          for (let i = 0; i < all_speakers.length; i++) {
            if (all_speakers[i].image && all_speakers[i].company_logo && all_speakers[i].spotlight) {
              this.main_speakers.push(all_speakers[i]);
            }
            else if(all_speakers[i].image && all_speakers[i].company_logo && !all_speakers[i].spotlight){
              this.other_speakers.push(all_speakers[i]);
            }
          }
        });
    },
  },
});
