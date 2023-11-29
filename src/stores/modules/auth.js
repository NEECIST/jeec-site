import { ref } from 'vue';

const state = {
  event_id: '',
};

const getters = {
    event_id: state => state.event_id,
};


const mutations = {
    setEvent_id(state, event_id) {
      state.event_id = event_id
    },
};

export default {
  state,
  getters,
  mutations
};


