import types from './types.js'

//actions其实就是在操作mutations
export default {
    updateToken({ commit }, data){
        commit(types.UPDATETOKEN, data)
    },
    UserLogin({ commit }, data){
        commit(types.USERLOGIN, data)
    },
    UserLogout({ commit }){
        commit(types.USERLOGOUT)
    },
}