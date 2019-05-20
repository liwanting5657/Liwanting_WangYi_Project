<template>
  <div>
    <router-view/>
    <FooterNav v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav'
  import OtherClass from './pages/OtherClass/OtherClass'
  
  export default {
    components:{
      FooterNav,
      OtherClass
      
    }
   
  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
