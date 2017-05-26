import ajax from './axios'

export default new class User {
    constructor(){
        
    }

    register(telphone, password){
        return ajax.post('/user/register', {
            telphone,
            password
        })
    }

    login(telphone, password){

        return new Promise((re, rj) => {
            setTimeout(function() {
                re({
                    telphone: 17000001995,
                    nickname: 'NewsNing'
                })
            }, 1000)
        }) || ajax.post('/user/login', {
            telphone,
            password
        })
    }

}()
