<template>
  <footer class="footernav">
    <a href="javascript:;" class="footerItem" :class="{on:$route.path==='/tophomenav'}" @click="goTo('/tophomenav')">
      <span class="item_icon">
        <i class="iconfont iconxiazai45"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="footerItem" :class="{on:$route.path==='/otherclass'}" @click="goTo('/otherclass')">
      <span class="item_icon">
        <i class="iconfont iconleimupinleifenleileibie"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="footerItem" :class="{on:$route.path==='/lookmore'}" @click="goTo('/lookmore')">
      <span class="item_icon">
        <i class="iconfont iconother"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="footerItem" :class="{on:$route.path==='/shopping'}" @click="goTo('/shopping')">
      <span class="item_icon">
        <i class="iconfont icongouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="footerItem" :class="{on:$route.path==='/profilecenter'}" @click="goTo('/profilecenter')">
      <span class="item_icon">
        <i class="iconfont icontubiaozhizuomoban"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
  
</template>

<script>
  export default {
    methods:{
      goTo(path){
        //编程式导航
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footernav
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 100px
    display flex
    .footerItem
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 25px
        margin-top 5px
        margin-bottom 2px
      .iconfont
        font-size 35px
    
  
  
  
  

</style>
