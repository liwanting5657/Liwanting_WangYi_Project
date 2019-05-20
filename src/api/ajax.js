//发送ajax请求的函数模块
//1地址，2请求参数data=一个默认空对象，可能有也可能没有，3请求方式，4响应数据
//引入axios发送ajax请求
//ajax()的返回值是一个promise对象
//自定义new一个promise的好处是，异步得到的不再是response，而是data数据(result)
//且对请求错误进行了统一的处理（建议使用try..catch方法处理错误），外面使用更方便

import axios from 'axios'

export default function ajax(url, data = {}, methods = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    if (methods === 'GET') {
      promise = axios.get(url, data, methods)
    } else {
      promise = axios.post(url, data, methods)
    }

    promise.then(response => {
      //请求成功，调用resolve
      resolve(response)
    }).catch(error => {
      //请求失败
      alert('----请求出错 :' + error)
    })

  })


}
