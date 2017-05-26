export default {
    getUserToken: state => {
        let token = state.token
        if(!token){
            token = window.localStorage.getItem('token')
            state.token = token
        }
        return token
    },
    getUserInfo: state => {
        let userinfo = state.userinfo
        if(!userinfo){
            userinfo = window.localStorage.getItem('userinfo')
            state.userinfo = userinfo
        }
        return userinfo
    },
}