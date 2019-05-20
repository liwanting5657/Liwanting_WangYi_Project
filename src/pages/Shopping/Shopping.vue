<template>
  <div class="ShopCart">
    <div class="HeaderCart">
      <p class="is-left">购物车</p>
      <p class="is-right">领券</p>
    </div>
    <div class="ContentCart">
      <div class="TopBox">
        <div>30天无忧退货</div>
        <div>30天无忧退货</div>
        <div>30天无忧退货</div>
      </div>
      <div class="UpBox">
        <div class="imgCenter">
          <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
        </div>
      </div>
      <input class="is_button" type="button" value="登 陆">

    </div>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .HeaderCart
    width 100%
    height 90px
    .is-left
      float left
      font-size 35px
      line-height 90px
      margin-left 20px
    .is-right
      float right
      font-size 30px
      line-height 90px
      margin-right 20px
      color red
  .ContentCart
    position relative
    width 100%
    height 2000px
    background-color rgb(244,244,244)
    overflow hidden
    .TopBox
      width 100%
      height 50px
      margin-top 40px
      div
        float left
        margin-left 70px
        color gray
    .UpBox
      position relative
      width 100%
      height 500px
      .imgCenter
        position absolute
        bottom 0
        left 250px
    .is_button
      width 480px
      height 90px
      margin-left 140px
      font-size 30px
      background-color rgb(180,40,45)
      margin-top 70px
      border 1px solid red
      color #fff

</style>
