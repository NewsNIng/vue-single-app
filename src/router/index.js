import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'





// 登录页面
import Login from '@/components/common/login'
// 注册页面
import Register from '@/components/common/register'

// 个人中心 
import Person from '@/components/person/index'


// 主页
import Home from '@/components/home/index'

Router.prototype.back = function () {
  this.isBack = true
  this.go(-1)
}
Router.prototype.next = function (...arg) {
  this.isBack = false
  this.push(...arg)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', redirect: '/main'
    },
    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 注册页面
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 个人中心 
    {
      path: '/person',
      name: 'person',
      component: Person
    },
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/home',
        name: 'home',
        component: Home,
      }, {
        path: '/person',
        name: 'person',
        component: Person,
      },

      ]
    }
  ]
})
