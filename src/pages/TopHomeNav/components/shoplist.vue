<template>
  <div class="Home_shoplist">
    <!--网易自营品牌-->
    <div class="tab_list">
      <ul class="wangyi-grow">
      <li v-for="(word,index) in shoplist.policyDescList" :key="index">
      <img :src="word.icon" alt="">
      <span>{{word.desc}}</span>
      </li>
      </ul>
    </div>
    <!--居家生活列表-->
    <div class="morestyle">
      <ul class="more_list">
        <li v-for="(shop,index) in shoplist.kingKongModule.kingKongList" :key="index">
          <a href="javascript:;">
          <img :src="shop.picUrl" alt="tupian">
          <span>{{shop.text}}</span>
        </a>
        </li>
      </ul>
    </div>
    <!--灰白条-->
    <div class="nothing"></div>
    <!--新人专享礼-->
    <div class="newPersonGift">
      <div class="topword">
        <span>- 新人专享礼 -</span>
      </div>
      <div class="leftbox">
        <div class="pinkbox">
          <div class="topGift">
            <span>新人专享礼包</span>
          </div>
          <div class="giftImg">
            <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
          <div class="iconArrow"></div>
        </div>
      </div>
      <div class="rightbox">
        <div class="rightTopbox">
          <div class="leftfuli">
            <span class="fulishe">福利社</span><br>
            <span class="todysile">今日特价</span>
          </div>
          <div class="rightImg">
            <img src="https://yanxuan.nosdn.127.net/d9376c059ce15a774199e2cedc5a8d63.png?imageView&thumbnail=200x200&quality=75" alt="">
          </div>
        </div>
        <div class="rightUpbox">
          <div class="team">
            <span class="teamword">新人拼团</span><br>
            <span class="oneMoney">一元起包邮</span>
          </div>
          <div class="teamImg">
            <img src="https://yanxuan.nosdn.127.net/8ea31d3ee1482b67ed7102332019e0da.png?imageView&thumbnail=200x200&quality=75" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--灰白条-->
    <div class="nothing"></div>
    <!--品牌制造商直供-->
    <div class="wrap_brand">
      <div class="topWordBox">
        <span class="brandleftword">品牌制造商直供</span>
        <span class="brandrightword">更多》</span>
      </div>
      <div class="brandContent">
        <div class="leftTop">
          <div class="topword">
            <span>海外制造商</span><br>
            <span>9.9元起</span>
            <span>上新</span>
          </div>
          <div class="upImg">
            <img src="https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
        </div>
        <div class="rightTop">
          <div class="topword">
            <span>海外制造商</span><br>
            <span>9.9元起</span>
          </div>
          <div class="upImg">
            <img src="https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
        </div>
        <div class="leftBottom">
          <div class="topword">
            <span>海外制造商</span><br>
            <span>9.9元起</span>
          </div>
          <div class="upImg">
            <img src="https://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
        </div>
        <div class="rightBottom">
          <div class="topword">
            <span>海外制造商</span><br>
            <span>9.9元起</span>
          </div>
          <div class="upImg">
            <img src="https://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1" alt="">
          </div>
          
        </div>
      </div>
    </div>
    <!--灰白条-->
    <div class="nothing"></div>
    <!--类目热销榜-->
    <div class="ClasserHot">
      <div class="TopClassWord">
        <span>类目热销榜</span>
      </div>
      <div class="UpClassContent">
          <div class="TopBigBox">
            <div class="leftSmallBox">
              <div class="is-left">
                <span>热销榜</span>
              </div>
              <div class="is-right">
                <img src="https://yanxuan.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
            <div class="rightSmallBox">
              <div class="is-left">
                <span>好评榜</span>
              </div>
              <div class="is-right">
                <img src="https://yanxuan.nosdn.127.net/92b15a92bca821428174429e23621201.png?imageView&quality=65&thumbnail=200x200" alt="">
              </div>
            </div>
          </div>
          <div class="UpBigBox">
            <div class="leftLittleBox">
              <div class="L_TopLeft">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
              <div class="L_TopRight">
                <span>服饰鞋包榜</span>
                <img src="" alt="">
              </div>
              <div class="L_BottomRight">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
              <div class="L_BottomLeft">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
            </div>
            <div class="rightLittleBox">
              <div class="R_TopLeft">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
              <div class="R_TopRight">
                <span>服饰鞋包榜</span>
                <img src="" alt="">
              </div>
              <div class="R_BottomRight">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
              <div class="R_BottomLeft">
                <span>居家生活榜</span>
                <img src="" alt="">
              </div>
            </div>
          </div>
        </div>
        
      </div>
    <!--灰白条-->
    <div class="nothing"></div>
    
    
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    computed:{
      ...mapState(['shoplist'])
    },
    mounted() {
      this.$store.dispatch('getHomeLife')
    }
  
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  
  .Home_shoplist
  /*网易自营品牌*/
    .tab_list
      position relative
      width 100%
      height 90px
      .wangyi-grow
        position absolute
        left 0
        top -480
        width 100%
        display flex
        height 100%
        li
          display flex
          flex 1
          text-align center
          margin-left 28px
          margin-top 25px
          img
            width 30px
            height 30px
            background-size 19px 19px
            background-repeat no-repeat
          span
            font-size 25px
  /*居家生活列表*/
    .morestyle
      width 100%
      height 440px
      background-color #ebeff6
      .more_list
        li
          width 20%
          height 50%
          float left
  /*新人专享礼*/
  .newPersonGift
    width 100%
    height 500px
    padding 0 30px 30px
    box-sizing border-box
    .topword
      width 100%
      height 20%
      text-align center
      padding 20px 0
      box-sizing border-box
      span
        font-size 40px
    .leftbox
      float left
      width 50%
      height 80%
      background-color papayawhip
      .topGift
        width 100%
        height 30%
        text-align center
        padding 30px
        box-sizing border-box
        span
          font-size 35px
      .giftImg
        background-size 100% 100%
        display flex
        justify-content center
        align-items center
    .rightbox
      float left
      width 49%
      height 80%
      margin-left 1%
      .rightTopbox
        width 100%
        height 49%
        background-color peachpuff
        .leftfuli
          float left
          width 50%
          height 100%
          padding 40px 0 0 40px
          box-sizing border-box
          .fulishe
            font-size 27px
          .todysile
            font-size 15
            color #777
        .rightImg
          float left
          width 50%
          height 100%
      .rightUpbox
        width 100%
        height 49%
        background-color plum
        margin-top 2%
        .team
          float left
          width 50%
          height 100%
          padding 40px 0 0 40px
          box-sizing border-box
          .teamword
            font-size 27px
        .teamImg
          float left
          width 50%
          height 100%
        .oneMoney
          font-size 20px
          background-color silver
          color white
          display inline-block
          padding 8px
          border-radius 10px
  /*灰白条*/
  .nothing
    width 100%
    background-color #f5f5f5
    height 30px
  /*品牌制造商*/
  .wrap_brand
    width 100%
    height 660px
    background-color #fff
    .topWordBox
      width 100%
      height 100px
      .brandleftword,.brandrightword
        font-size 35px
        line-height 100px
      .brandleftword
        float left
        margin-left 20px
      .brandrightword
        float right
        margin-right 20px
    .brandContent
      width 100%
      height 560px
      padding 0 30px 30px 30px
      box-sizing border-box
      .leftTop,.rightTop,.leftBottom,.rightBottom
        float left
        width 48%
        height 48%
        position relative
      .leftTop,.leftBottom
        margin-right 5px
      .leftTop,.rightTop
        margin-bottom 5px
      .leftTop,.rightTop,.leftBottom,.rightBottom
        .topword
          position absolute
          top 15px
          left 80px
          z-index 90
          font-size 30px
        .upImg
          width 100%
          height 100%
          img
            background-size 100% 100%
  /*类目热销榜*/
  .ClasserHot
    width 100%
    height 700px
    background-color #fff
    padding 0 30px 30px 30px
    box-sizing border-box
    .TopClassWord
      width 100%
      height 13%
      font-size 35px
      padding-top 20px
      box-sizing border-box
    .UpClassContent
      width 100%
      height 87%
      background-color pink
      .TopBigBox
        width 100%
        height 40%
        background-color greenyellow
        .leftSmallBox,.rightSmallBox
          .is-left
            float left
            width 50%
            height 100%
            background-color skyblue
          .is-right
            float left
            width 50%
            height 100%
            background-color orangered
        .leftSmallBox
          float left
          width 50%
          height 100%
          background-color red
        .rightSmallBox
          float left
          width 50%
          height 100%
          background-color gold
      .UpBigBox
        width 100%
        height 60%
        background-color palevioletred
        .leftLittleBox
          float left
          width 50%
          height 100%
          background-color green
          .L_TopLeft
            float left
            width 50%
            height 50%
            background-color slateblue
          .L_TopRight
            float left
            width 50%
            height 50%
            background-color sienna
          .L_BottomRight
            float left
            width 50%
            height 50%
            background-color silver
          .L_BottomLeft
            float left
            width 50%
            height 50%
            background-color skyblue
        .rightLittleBox
          float left
          width 50%
          height 100%
          background-color wheat
          .R_TopLeft
            float left
            width 50%
            height 50%
            background-color slateblue
          .R_TopRight
            float left
            width 50%
            height 50%
            background-color sienna
          .R_BottomRight
            float left
            width 50%
            height 50%
            background-color silver
          .R_BottomLeft
            float left
            width 50%
            height 50%
            background-color skyblue




</style>

