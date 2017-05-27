import ajax from './axios'

export default new class User {
    constructor() {

    }

    register(telphone, password) {
        return ajax.post('/user/register', {
            telphone,
            password
        })
    }

    login(telphone, password) {

        return ajax.post('/user/login', {
            telphone,
            password

        })
    }

}()
