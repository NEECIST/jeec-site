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
      doneLoading: false,
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
        this.formatTeamName(response.data['data'])));
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
        this.formatTeamName(response.data['data'])));
      }
    },

    formatTeamName(arr) {
      arr.forEach(element => {
        const teamName = this.formatString(element.name)
        this.teams[teamName] = element
      });
    },

    formatString(str) {
      return str.replace(/\s/g, "").toLowerCase()
    }
  }
});