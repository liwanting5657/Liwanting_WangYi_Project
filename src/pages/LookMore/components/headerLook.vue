<template>
	<div class="headerLook">
    <div class="headerStyle">
      <div class="is-left">
        <a href="javascript:;" class="go_back" @click="$router.back()">
          <i class="iconfont iconhome"></i>
        </a>
      </div>
      <div class="is-content">
        <strong>发现</strong>&nbsp&nbsp
        <span>甄选家</span>
      </div>
      <div class="is-right">
        <i class="iconfont iconiconfontzhizuobiaozhun22"></i>
        <i class="iconfont icongouwuche"></i>
      </div>
    </div>
    <div class="menu-wrapper">
      <ul class="content">
        <li>推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码电子</li>
        <li>全球特色</li>
      </ul>
    </div>
    
	</div>
</template>

<script>
  import Bscroll from 'better-scroll'
  
  export default {
    mounted() {
      this.$nextTick(() => {
        new Bscroll('.menu-wrapper',{
          startX: 0,
          click: true,
          scrollX: true,
          // 忽略竖直方向的滚动
          scrollY: false,
          eventPassthrough: "vertical"
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerStyle
    width 100%
    height 100px
    display flex
    padding-top 20px
    box-sizing border-box
    border-bottom 2px solid silver
    background-color rgb(244,244,244)
    .is-left
      flex 3
      margin-left 10px
    .is-content
      flex 5
      strong
        font-size 45px
        color rgb(180,40,45)
      span
        font-size 35px
        color gray
    .is-right
      flex 2
    .iconfont
      font-size 48px
  .menu-wrapper
    height 80px
    display flex
    overflow hidden
    border 1px solid silver
    background-color rgb(244,244,244)
    .content
      display flex
      white-space nowrap
      line-height 80px
      li
        margin 0 10px
        font-size 29px
        color gray
    
</style>
