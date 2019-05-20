//引入常量
import {
  REQ_HOMELIFE,
  REQ_OTHERCLASS
} from './mutation-types'

//接收数据并更新
export default {
  //主页
  [REQ_HOMELIFE](state, shoplist) {
    state.shoplist = shoplist
  },
  //分类
  [REQ_OTHERCLASS](state,MyOtherClass){
    state.MyOtherClass = MyOtherClass
  }


}
