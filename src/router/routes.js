//包含应用中所有路由的数组模块

import TopHomeNav from '../pages/TopHomeNav/TopHomeNav'
import Shopping from '../pages/Shopping/Shopping'
import ProfileCenter from '../pages/ProfileCenter/ProfileCenter'
import OtherClass from '../pages/OtherClass/OtherClass'
import LookMore from '../pages/LookMore/LookMore'


export default [
  {
    path: '/tophomenav',
    component:TopHomeNav,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/shopping',
    component:Shopping,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/profilecenter',
    component:ProfileCenter
  },
  {
    path: '/otherclass',
    component:OtherClass,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/lookmore',
    component:LookMore,
    meta:{
      showFooter:true
    }
  },

  // 重定向
  {
    path: '/tophomenav',
    replace:TopHomeNav
  }
]
