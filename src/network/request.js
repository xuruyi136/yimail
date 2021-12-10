import axios from 'axios'
export function request(config) {

  // return new Promise((resolve,reject)=>{
  //1.创建axios实例
  const instance = axios.create({
    baseURL: ' https://api.coindesk.com/v1/bpi/currentprice.json',
    timeout: 5000
  })
  //2.axios的拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config
  }, err => {
    // console.log(err)
  });
  instance.interceptors.response.use(res => {
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  });
  //3.发送网络请求
  return instance(config)
}
