import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './modules'

Vue.use(Vuex)

export interface IRootState {
  [propName: string]: any
}

const store = new Vuex.Store<IRootState>({
  state: {},
  modules: {
    ...modules
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})

export default store
