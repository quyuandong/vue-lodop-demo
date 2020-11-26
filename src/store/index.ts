import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import modules from './modules'

Vue.use(Vuex)
export interface IRootState {
  [propName: string]: any
}

const store = new Vuex.Store<IRootState>({
  state: {
    tempTableList: [] //模板数据
  },
  modules: {
    ...modules
  },
  mutations: {
    SET_TEMP_TABLE_LIST(state, payload) {
      state.tempTableList = payload
    }
  },
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})

export default store
