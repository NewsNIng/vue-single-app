import Vue from 'vue'

// 用户相关
import user from './user'
// 动态相关
// import essay from './essay'


const api = function (Vue, options) {
  Vue.prototype.$api = Object.create({
    user,
    // essay
  })
}

Vue.use(api)

export default api
