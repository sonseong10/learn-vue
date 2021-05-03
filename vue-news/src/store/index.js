import Vue from "vue"
import Vuex from "vuex"
import getters from "./modules/getters.js"
import mutations from "./modules/mutations.js"
import actions from "./modules/actions.js"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: []
  },
  getters,
  mutations,
  actions
})
