<template>
    <div class="ProfileCenter">
      <div class="headerStyle">
          <div class="is-left">
            <a href="javascript:;" class="go_back" @click="$router.back()">
              <i class="iconfont iconhome"></i>
            </a>
          </div>
          <div class="is-content">
            <span>网易严选</span>
          </div>
          <div class="is-right">
            <i class="iconfont iconiconfontzhizuobiaozhun22"></i>
            <i class="iconfont icongouwuche"></i>
          </div>
      </div>
      <div class="Content_wrap">
        <div class="Img_Middle">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <div class="buttonTwo">
        <div class="TopInput">
          <input type="button" value="手机号码登陆">
        </div>
        <div class="UpInput">
          <input type="button" value="邮箱账号登陆">
        </div>
        <div class="Info">
          <i class="iconfont iconweixin">微信&nbsp&nbsp|</i>
          <i class="iconfont iconqq">QQ&nbsp&nbsp|</i>
          <i class="iconfont iconweibo">&nbsp&nbsp微博</i>
        </div>
      </div>
      
      
      
    </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ProfileCenter
  background-color rgb(244,244,244)
  .headerStyle
    width 100%
    height 100px
    display flex
    padding-top 20px
    box-sizing border-box
    border 1px solid silver
    .is-left
      flex 4
      margin-left 10px
    .is-content
      flex 4
      font-size 40px
    .is-right
      flex 2
    .iconfont
      font-size 48px

  .Content_wrap
    position relative
    width 100%
    height 300px
    .Img_Middle
      position absolute
      bottom 0
      left 210px
      &>img
        width 320px
  .buttonTwo
    position relative
    width 100%
    height 1000px
    padding-top 100px
    box-sizing border-box
    .TopInput,.UpInput
      &>input
        width 600px
        height 100px
        margin 10px 0 30px 70px
        font-size 30px
        border 1px solid red
    .TopInput
      &>input
        background-color rgb(180,40,45)
        color #fff
    .UpInput
      &>input
        background-color #fff
        color red
  .Info
    position absolute
    top 780px
    left 0
    width 100%
    height 100px
    display flex
    justify-content space-around
    padding 0 150px
    box-sizing border-box
    .iconfont
      font-size 35px
      color gray
</style>
