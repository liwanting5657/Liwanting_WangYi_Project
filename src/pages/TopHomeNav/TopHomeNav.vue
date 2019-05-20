<template>
    <div class="home_Container">
      <!--头部-->
      <HeaderNav/>
      <!--头部导航-->
      <HeaderList/>
      <!--轮播图-->
      <mySwiper/>
      
      <ShopList/>
      
    </div>
</template>

<script>
  import mySwiper from './components/swiper'
  import ShopList from './components/shoplist'
  import HeaderNav from '../../components/HeaderNav/HeaderNav'
  import HeaderList from '../../components/HeaderList/HeaderList'
  
  export default {
    components:{
      mySwiper,
      ShopList,
      HeaderNav,
      HeaderList
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home_Container
    padding-bottom 100px
    



</style>
