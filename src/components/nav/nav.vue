<template>
  <div class="nav">
    <p @click="nav_p" class="nav_p">Rixinyy</p>
    <!--<div class="nav_div">-->
    <!--<input type="text" placeholder="">-->
    <!--<span class="nav_span">搜索</span>-->
    <!--</div>-->
    <div @click="nav_p_off" class="nav_left">
        <span>右边侧栏</span>
    </div>
  </div>
</template>

<script>
  import $ from '../../../static/js/jquery-2.0.3.min'
  export default {
    name: 'hello',
    data () {
      return {}
    },
    methods: {
      nav_p(){
        $(".nav_left").animate({
          "left":"0"
        })
      },

      nav_p_off(){
        $(".nav_left").animate({
          "left":"-50%"
        })
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #e87979;
    color: #fff;
  }

  .nav p {
    font-size: 20px;
    float: left;
    margin-left: 30px;
  }
  .nav_left{
    position: fixed;
    width: 50%;
    left: -50%;
    top:0;
    height: 100%;
    background-color: #000;
    z-index: 100;
    opacity: 0.8;
  }

  .nav_div {
    text-align: right;
    padding-right: 20px;
  }

  .nav_div input {
    height: 30px;
    line-height: 30px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 5px;
  }

  /*.nav_span:hover{*/
  /*font-size:20px;*/
  /*}*/
</style>
