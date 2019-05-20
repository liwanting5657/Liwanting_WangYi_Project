<template>
	<div class="OtherClassContent">
    <a href="#">
    <div class="LeftNav">
      <ul class="isList">
        <li v-for="(liItem,index) in currentCategory">推荐专区</li>
        
      </ul>
    </div>
    <div class="RightNav">
      <div class="ImgTop">
        <img src="https://yanxuan.nosdn.127.net/4a2efe27bba0fa5a60750df399423d94.png?imageView&thumbnail=0x196&quality=75" alt="">
      </div>
      <div class="TabDown">
          <ul class="LittleTab">
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
            <li>
              <img src="https://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&quality=85&thumbnail=144x144" alt="">
              <p>好货内部价</p>
            </li>
          </ul>
        </div>
      </div>
    </a>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    computed:{
      ...mapState({
        currentCategory: state=> state.MyOtherClass
      })
    },
    mounted() {
      this.$store.dispatch('getOtherList')
    }
  
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .OtherClassContent
    width 100%
    height 100%
    .LeftNav
      float left
      width 25%
      height 100%
      text-align center
      .isList
        li
          font-size 30px
          margin 55px 0
    .RightNav
      float left
      width 75%
      height 100%
      .ImgTop
        display flex
        justify-content center
        align-items center
        width 100%
        height 300px
        img
          background-size 100% 100%
      .TabDown
        .LittleTab
            li
              float left
              width 30%
              height 200px
              margin-left 10px

</style>
