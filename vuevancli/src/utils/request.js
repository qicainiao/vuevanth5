import axios from 'axios'
import {navigate} from '../utils'
import { Toast } from 'juanziaaa'
import { getToken } from '@/utils/auth'

// var Authorization = "2da4012e-fa37-4db7-aa3f-b07f6f7ca76f"

// axios.defaults.headers.common['Authorization'] = Authorization //Authorization;
// axios.defaults.headers.common['token'] = Authorization
axios.defaults.headers.common['token'] = localStorage.getItem('token')
axios.defaults.timeout = 60000
axios.defaults.headers.post['Content-Type'] = 'application/json';
// code状态码200判断
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  res => {
    if (res.status !== 200) {
      Toast('网络错误');
      return Promise.reject(res)
    }
    if(res.data.retCode === '1001'){
      // token失效
      navigate('gotoLogin', '登录')
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios

// export const request=(url,{method,data})=>fetch(url,{
//     method,
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         token:Authorization
//     },
//     body:JSON.stringify({
//         ...data,
//         token:Authorization
//     })
// })
