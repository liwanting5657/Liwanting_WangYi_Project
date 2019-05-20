//路由器对象模块

import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


Vue.use(Router)

export default new Router({
  //去掉#号
  mode:'history',
  routes
})
