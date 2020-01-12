import Vue from "vue";
import Vuex from "vuex";

import { mutations, actions, getters, state } from "../vuexr";

Vue.use(Vuex);

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({ mutations, actions, getters, state });
