import types from './types.js'


const mutations = {
    [types.UPDATETOKEN]: (state, data) => {
        // 把token存到本地
        window.localStorage.setItem('token', data)
        // 更改token的值
        state.token = data
    },
    [types.USERLOGOUT]: (state) => {
        //登出的时候要移出token
        window.localStorage.removeItem('token')
        state.token = null
    },
    [types.USERLOGIN]: (state, data) => {
        //把用户数据存到本地
        window.localStorage.setItem('userinfo', JSON.stringify(data))
        state.userinfo = data
    },
    [types.UPDATEUSERINFO]: (state, data) => {
        let newData = Object.assign(state.userinfo, data)
        //把新用户数据存到本地
        window.localStorage.setItem('userinfo', JSON.stringify(newData))
        state.userinfo = newData
    },
    
}

export default mutations