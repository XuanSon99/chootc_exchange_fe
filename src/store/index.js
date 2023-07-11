import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: "",
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload
    },
  },
  actions: {
    setAccount({ commit }, payload) {
      commit("setAccount", payload)
    }
  },
  getters: {
    account: state => state.account,
  }
})
