import request from 'utils/request'

export default {
  //考勤规则
  fnGetRecordRule(oBody){
    return  request({ url: '/queryRecordRule', method: 'GET', data: oBody })
  },
  // 考勤记录
  fnGetRecord (oBody){
    return  request(`${baseUrl}/queryRecord`, { method: 'POST', data: oBody })
  },
  // 获取用户信息
  fnGetUserInfo (oBody){
    return  request(`${baseUrl}/getUserInfo`, { method: 'GET', data: oBody })
  },
}
