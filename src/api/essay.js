import ajax from './axios'

export default new class Essay {
  constructor() {

  }

  /**
   * 获取说说列表
   * @param {Number} pageNo 页码 
   * @param {Number} pageSize 页量
   */
  list(pageNo = 1, pageSize = 10) {
    console.log(pageNo + '_' + pageSize)
    return ajax.post('/essay/list', {
      pageNo,
      pageSize
    })
  }
  /**
   * 发布说说
   * @param {String} content 内容
   */
  release(content){
    return ajax.post('/essay/release', {
      content
    })
  }
  

}()
