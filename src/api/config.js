export default {
  // 服务器接口基础地址
  baseURL: 'http://139.199.205.186:8360/api/',

  ERROR: {
    'SUCCESS': [1000, '操作成功。'],
    'SERVER_INVALID': [1001, '服务器错误，请重新尝试。'],
    'TOKEN_INVALID': [1002, '请核对您的登录信息后重新登录。'],
    'NEED_LOGIN': [1003, '您没有权限，需要登陆'],
    'DATA_NULL': [1004, '查询不到相关数据'],
    'PASSWORD_ERROR': [1005, '用户名密码错误，请重新登录。'],
    'DATA_REPEAT': [1006, '数据重复，请核对数据。']
  }
}
