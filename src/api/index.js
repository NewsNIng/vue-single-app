import Vue from 'vue'


import user from './user'

const api = function (Vue, options) {
  Vue.prototype.$api = Object.create({
    user
  })
}

Vue.use(api)

export default api
