import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main'

import store from '../store'




// 登录页面
import Login from '@/components/common/login'
// 注册页面
import Register from '@/components/common/register'

// 个人中心 
import Person from '@/components/person/index'


// 主页
import Home from '@/components/home/index'
// 发布动态
import Release from '@/components/home/release'
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
Router.prototype.goto = function(rt, isBack = false){
  this.isBack = isBack
  this.push(rt)
}

Vue.use(Router)




const router = new Router({
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
    // 发布动态
    {
      path: '/release',
      name: 'release',
      component: Release,
      meta: {
        requiresAuth: true
      }
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
        meta: {
          requiresAuth: true
        }
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



//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(token){
      next();
    }else{
      next({
        name: 'login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  }else{
    next();//如果无需token,那么随它去吧
  }
});




export default router
