<template>
  <div class="hello">
    <!--<v-header :seller="seller"></v-header>-->
    <!--导入页头-->
    <v-nav></v-nav>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../static/images/a1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../static/images/a2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../static/images/a3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../../static/images/a4.jpg" alt="">
        </div>

      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="">

    </div>

    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

  import Swiper from '../../static/js/swiper-3.4.2.min'

  import header from '../components/header/header.vue'
  import nav from '../components/nav/nav.vue'
  import data from '../common/json/data.json'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js',
        seller: {}
      }
    },
    created () {
      console.log(data.seller)
      this.seller = data.seller
    },
    components: {
      'v-header': header,
      'v-nav': nav,
    },

    mounted(){
      this.$nextTick(function () {
        /* 焦点图 */
        var mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          loop: true,

          // 如果需要分页器
          pagination: '.swiper-pagination',
          paginationClickable :true,

//          autoplay: 2000
        });
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../common/css/swiper-3.4.2.min.css';

  .swiper-container {
    width: 100%;
    height: 180px;
    /*overflow: auto;*/
  }

  .swiper-wrapper {
    width: 100%;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
