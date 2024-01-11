import { defineStore } from "pinia";
import axios from "axios";

import { usePartnersStore } from "./PartnersStore";
import { useTeamStore } from "./TeamStore";
import { useSpeakersStore } from "./SpeakersStore";

export const useEventStore = defineStore("EventStore", {
  state: () => {
    return {
      events: [],
      event_id: "",
      event_default_id: "",
    };
  },
  actions: {
    fill() {
      axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/event_vue", {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
          },
        })
        .then((response) => {
          this.event_default_id = response.data.event_id
        });

      axios
        .get(process.env.VUE_APP_JEEC_WEBSITE_API_URL + "/events/vue", {
          auth: {
            username: process.env.VUE_APP_JEEC_WEBSITE_USERNAME,
            password: process.env.VUE_APP_JEEC_WEBSITE_KEY,
          },
        })
        .then((response) => {
          this.events = response.data.events
        });
    },
    setEvent(eventId) {
      this.event_id = eventId;

      const teamStore = useTeamStore();
      const partnersStore = usePartnersStore();
      const speakersStore = useSpeakersStore();

      teamStore.fill(eventId);
      partnersStore.fill(eventId);
      speakersStore.fill(eventId);
    }
  },
});
