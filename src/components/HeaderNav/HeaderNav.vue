<template>
      <div class="header-Container">
        <div class="box leftbox">
          <span>网易严选</span>
        </div>
        <div class="box centerbox">
          <input type="text" placeholder=" 请输入商品关键字...">
        </div>
        <div class="box rightbox">
          <input type="button" value="登陆">
        </div>
      </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header-Container
    height 90px
    background-color #fff
    display flex
    justify-content center
    align-items center
    .box
      padding 8px 0
    .leftbox
      flex 2
      span
        font-size 35px
        font-family cursive
        margin-left 10px
    .centerbox
      flex 7
      input
        float left
        width 460px
        height 45px
        border-radius 5px
        box-sizing border-box
        border 1px solid silver
        margin-left 15px
        background-color #ebeff6
        font-size 30px
        text-align center
    .rightbox
      flex 1
      input
        float left
        width 70px
        height 40px
        border-radius 7px
        vertical-align middle
        border 1px solid darkred
        color darkred
        background-color #fff
        margin-left -25px
        box-sizing border-box
        font-size 20px
  
        
  
  
  
  
  
</style>
