import Vue from 'vue'
import App from './App'
import router from './router'
import TopHomeNav from './pages/TopHomeNav/TopHomeNav'
import OtherClass from './pages/OtherClass/OtherClass'
import './mock/mockserver'
import store from './store'
import 'lib-flexible'

new Vue({
  el:'#app',
  //映射，注册组件标签名，可通过已注册好的标签名来调用子组件
  components:{
    App,
    TopHomeNav,
    OtherClass
  },
  //声明模板
  template:'<App/>',
  router,
  store
})
