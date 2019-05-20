<template>
	<div class="headerList">
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
      <div class="iconArrow">
        <i class="iconfont iconjiantou" @click="toggle"></i>
      </div>
    </div>
    <div class="mask" v-show="isOpen">
      <div class="mask_top">
        <div class="ismovie">全部频道</div>
        <div class="iconImg">
          <i class="iconfont iconjiantoushang" @click="toggle"></i>
        </div>
      </div>
      <div class="mask_down">
        <ul class="mask_list">
          <li>推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>限时购</li>
          <li>运动旅行</li>
          <li>全球特色</li>
          <li>全球特色</li>
          <li>全球特色</li>
          <li>全球特色</li>
          <li>全球特色</li>
        </ul>
      </div>
    </div>
	</div>
</template>
<script>
  import Bscroll from 'better-scroll'
  export default {
    data(){
      return{
        isOpen:false
      }
    },
    methods:{
      toggle(){
        this.isOpen = !this.isOpen
      }
    },
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
  .headerList
    height 60px
    background-color #fff
    position relative
    .menu-wrapper
      display flex
      overflow hidden
      .content
        display flex
        white-space nowrap
        li
          margin 0 10px
      .iconArrow
        position absolute
        right 0
        width 100px
        height 60px
        background-color #FFF
        text-align center
        justify-content center
        .iconfont
          font-size 22px
  .mask
    width 100%
    height 400px
    position absolute
    top 0
    left 0
    z-index 999
    background-color #fff
    .mask_top
      width 100%
      height 20%
      .ismovie
        font-size 30px
        margin-left 20px
        padding-top 20px
        box-sizing border-box
      .iconImg
        position relative
        .iconfont
          position absolute
          top -40px
          right 20px
          font-size 30px
  
    .mask_down
      width 100%
      height 100%
      .mask_list
        li
          float left
          font-size 30px
          width 170px
          height 80px
          text-align center
          margin 20px 8px 0 8px
          background-color #fafafa
          padding-top 20px
          box-sizing border-box
          border-radius 8px
</style>
