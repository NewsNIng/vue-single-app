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
// 详情
import Detail from '@/components/home/detail'
// 斗图
import Doutu from '@/components/doutu/index'


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
  history: true,
  saveScrollPosition: true,
  abstract: true,
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
    // 详情
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },

    {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        // 默认进入 主页
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        // 主页
        path: '/home',
        name: 'home',
        component: Home,
      }, {
        // 个人中心 
        path: '/person',
        name: 'person',
        component: Person,
      },
      {
        // 斗图中心 
        path: '/doutu',
        name: 'doutu',
        component: Doutu,
      },

      ]
    }
  ]
})
