import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: "",
    notifications: [],
    noti_count: 0,
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload
    },
    setNotifications(state, payload) {
      state.notifications = payload
    },
    setNotiCount(state, payload) {
      state.noti_count = payload
    },
  },
  actions: {
    setAccount({ commit }, payload) {
      commit("setAccount", payload)
    },
    setNotifications({ commit }, payload) {
      commit("setNotifications", payload)
    },
    setNotiCount({ commit }, payload) {
      commit("setNotiCount", payload)
    }
  },
  getters: {
    account: state => state.account,
    notifications: state => state.notifications,
    noti_count: state => state.noti_count
  }
})
