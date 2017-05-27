import axios from 'axios'
import store from '../store'
import router from '../router'
import config from './config'



//设置全局axios默认值
axios.defaults.baseURL = config.baseURL
axios.defaults.timeout = 5000 //5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

//创建一个axios实例
const instance = axios.create()
axios.interceptors.request.use = instance.interceptors.request.use

//request拦截器
instance.interceptors.request.use(
    config => {
        // 获取 token
        let token = store.getters.getUserToken
        if(token){
            config.headers.token = token 
        }
        return config 
    },
    err => {
        return Promise.reject(err) 
    }
) 
//respone拦截器
instance.interceptors.response.use(
    response => {
        if(response.data.errno === undefined || response.data.errno !== 0){
            return  Promise.reject(response.data) 
        }
        return response.data 
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){
            switch(error.response.status){
                case 401:
                    store.dispatch('UserLogout')  // 可能是token失效，清除它
                    router.replace({ //跳转到登录页面
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    }) 
            }
        }
        return Promise.reject(error.response.data) 
    }
) 

export default instance
