import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'


Vue.use(Vuex)

const state = {
    token: null,
    userinfo: null
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})