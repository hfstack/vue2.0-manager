import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import Account from './modules/account'
import createPersistedState from 'vuex-persistedstate'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    Account
  },
  // strict: debug,
  plugins: [createPersistedState()]
  // plugins: debug ? [createLogger()] : []
})
