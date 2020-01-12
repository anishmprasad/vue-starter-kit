import Vue from "vue";
import Vuex from "vuex";

import { counter } from "../vuexr";

Vue.use(Vuex);

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: { counter }
});
