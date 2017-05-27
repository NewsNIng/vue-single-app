import ajax from './axios'

export default new class Essay {
  constructor() {

  }

  /**
   * 获取说说列表
   * @param {Number} pageNo 页码 
   * @param {Number} pageSize 页量
   */
  getList(pageNo = 1, pageSize = 10) {
    return ajax.get('/essay/list', {
      pageNo,
      pageSize
    })
  }

  

}()
