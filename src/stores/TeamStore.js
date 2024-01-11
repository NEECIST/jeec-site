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
      teamImages: {},
    };
  },
  actions: {
    test() {
      console.log("Hi from team store via event store");
    },
    fill(eventId) {
      if (eventId == undefined) {
        axios
          .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/teams_new", {
            auth: {
              username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
              password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
            },
          })
          .then((response) => (this.teamImages = response.data["data"]));

        axios
          .get(
            process.env.VUE_APP_JEEC_WEBSITE_API_URL +
              "/teams_image?event_id=default",
            {
              auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
              },
            }
          )
          .then((response) =>
            this.formatTeamName(response.data["team_images"])
          );
      } else {
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
          .then((response) => this.formatTeamName(response.data["data"]));

        axios
          .get(
            process.env.VUE_APP_JEEC_WEBSITE_API_URL +
              "/teams_image?event_id=" + eventId,
            {
              auth: {
                username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
                password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
              },
            }
          )
          .then((response) =>
            this.formatTeamName(response.data["team_images"])
          );
      }
    },

    formatTeamName(arr) {
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

    formatString(str) {
      return str.replace(/\s/g, "").toLowerCase();
    },
  },
});
