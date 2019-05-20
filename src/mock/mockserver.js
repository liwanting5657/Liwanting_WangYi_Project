//使用mockjs来mock数据接口

import Mock from 'mockjs'
import homedata from './homeData'  //内部已经将json解析成了js对象
import category from './category'

//提供接口
//——————————Home————————————
Mock.mock('/kingKongModule',{
  code:0,
  data:homedata
})

//分类
Mock.mock('/currentCategory',{
  code:0,
  data:category
})
