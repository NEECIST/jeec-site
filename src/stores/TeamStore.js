import { defineStore } from 'pinia';
import axios from "axios";
import { useEventStore } from '@/stores/EventStore';
import { mapWritableState } from 'pinia'

export const useTeamStore = defineStore('TeamStore', {
  state: () => {
    return {
      jeec_api_url: process.env.VUE_APP_JEEC_BRAIN_URL,
      teams: {
        coordination: {
          members: { data: []}
        },
        webdev: {
          members: { data: []}
        },
        marketing: {
          members: { data: []}
        },
        business: {
          members: { data: []}
        },
        logistics: {
          members: { data: []}
        },
        speakers: {
          members: { data: []}
        },
      },
      teamImages: {}
    }
  },
  computed: {
    ...mapWritableState(useEventStore, ['event_id'])
  },
  actions: {
    fill(eventid) {
      if (eventid==undefined) {
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/teams_new', {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
          
        })
        .then(response => (
        console.log(response.data['data']),
        this.teamImages = response.data['data'],
        console.log("1")
        ));

        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/teams_image?event_id=default', {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
        })
        .then(response => (
        console.log(response.data['team_images']),
        this.formatTeamName(response.data['team_images']),
        console.log("2")
        ));
      }
      else {
        axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/teams_new?event_id='+eventid, {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY
          },
          
        })
        .then(response => (
          console.log(response.data['data']),
          this.formatTeamName(response.data['data']),
          console.log("3")
          ));

          axios
          .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + '/teams_image?event_id='+eventid, {
            auth: {
              username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
              password: process.env.VUE_APP_JEEC_WEBSITE_KEY
            },
          })
          .then(response => (
            console.log(response.data['team_images']),
            this.formatTeamName(response.data['team_images']),
            console.log("4")
            ));
            
      }
    },

    formatTeamName(arr) {
      console.log(arr)
      arr.forEach(element => {
        const teamName = element.name
        this.teams[teamName] = element
      });
    },

    formatString(str) {
      return str.replace(/\s/g, "").toLowerCase()
    }
  }
});