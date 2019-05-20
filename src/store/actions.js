//引入接口请求函数
import {
  reqDiscList,
  reqCategory
} from '../api'
//引入常量
import {
  REQ_HOMELIFE,
  REQ_OTHERCLASS
} from './mutation-types'

export default{
    //获取居家生活列表
   async getHomeLife({commit}){
      //通过接口异步请求，发送ajax
     const result =await reqDiscList()
      //请求成功获取到数据后，通过commit提交给mutation更新
      if(result.data.code===0){
        const shoplist = result.data.data  //将获取到的数据塞入到初始值中
        commit(REQ_HOMELIFE,shoplist)
      }
    },

    //获取分类列表
    async getOtherList({commit}){
    const result =await reqCategory()
    if(result.data.code===0){
      const MyOtherClass = result.data.data
      commit(REQ_OTHERCLASS,MyOtherClass)
    }
  }

}
