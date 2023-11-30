import { defineStore } from 'pinia';
import { mapWritableState } from 'pinia'
import axios from "axios";

export const useEventStore = defineStore('EventStore', {
  state: () => {
    return {
      event_id: '',
      
    }
  },
});


