import { defineStore } from "pinia";
import axios from "axios";

export const useSpeakersStore = defineStore("SpeakersStore", {
  state: () => {
    return {
      speakers: [],
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
          this.speakers = [];
          for (let i = 0; i < all_speakers.length; i++) {
            if (all_speakers[i].image && all_speakers[i].company_logo) {
              this.speakers.push(all_speakers[i]);
            }
          }
        });
    },
  },
});
