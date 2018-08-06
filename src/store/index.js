import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'


import * as actions from './actions'
import {mutations} from './mutations'
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules: {
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  actions,
  mutations,
})