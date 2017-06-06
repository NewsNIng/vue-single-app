import ajax from './axios'

export default new class User {
    constructor() {

    }

    /**
     * 注册
     * @param {Number} telphone 手机号码
     * @param {String} password 密码
     */
    register(telphone, password) {
        return ajax.post('/user/register', {
            telphone,
            password
        })
    }
    
    /**
     * 登录
     * @param {Number} telphone 手机号码
     * @param {String} password 密码
     */
    login(telphone, password) {
        return ajax.post('/user/login', {
            telphone,
            password

        })
    }
    /**
     * 更新用户资料
     * @param {Object} info 用户信息
     */
    update(info){
        return ajax.post('/user/update', {
            info
        })
    }

}()
