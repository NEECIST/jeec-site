import Vuex from 'vuex';
// import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';

import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    auth
  },
  plugins: [createPersistedState()]
})


// Create store
// export default new Vuex.Store({
//   modules: {
//     auth
//   },
//   plugins: [createPersistedState()]
// });
