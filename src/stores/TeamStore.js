import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore("TeamStore", {
  state: () => {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      teams: {
        coordination: {
          members: { data: [] },
        },
        webdev: {
          members: { data: [] },
        },
        marketing: {
          members: { data: [] },
        },
        business: {
          members: { data: [] },
        },
        logistics: {
          members: { data: [] },
        },
        speakers: {
          members: { data: [] },
        },
      },
    };
  },
  actions: {
    fill(eventId) {
      axios
        .get(
          process.env.VUE_APP_JEEC_WEBSITE_API_URL +
            "/teams_new?event_id=" + eventId,
          {
            auth: {
              username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
              password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
            },
          }
        )
        .then((response) => this.sort(response.data["data"]));
    },

    sort(arr) {
      this.teams = {
        coordination: {
          members: { data: [] },
        },
        webdev: {
          members: { data: [] },
        },
        marketing: {
          members: { data: [] },
        },
        business: {
          members: { data: [] },
        },
        logistics: {
          members: { data: [] },
        },
        speakers: {
          members: { data: [] },
        },
      }; // dar reset nas teams sempre que se dá fill para n haver dups

      arr.forEach((element) => {
        const teamName = element.name;
        this.teams[teamName] = element;
      });
    },
  },
});
