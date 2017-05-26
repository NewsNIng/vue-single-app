
export default [
    'UPDATETOKEN', // 更新Token
    'USERLOGIN', // 用户登录
    'USERLOGOUT', // 用户注销
].reduce(function(o, item){
    o[item] = item
    return o
},{})
