<template>
  <div id="app1">
    <!-- 头部 -->

    <div class="tab">
      <div class="tab-item">
      <router-link v-bind:to="'/Hello'">
        首页
      </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/product">
         产品列表
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/news">
          旅行头条
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/dynamic">
          评论
        </router-link>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import header from './components/header/header.vue'

export default {
  name: 'app1',
  data () {
    return {
      seller: {}
    }
  },

}
</script>

<style>
  a{
    color: #666;
    text-decoration:none;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .tab{
    position: fixed;
    background-color: #333;
    z-index: 100;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #ccc;
  }
  .tab-item{
    width: 25%;
    float: left;
  }
  .tab-item a:hover{
    color: red;
    font-size: 18px;
  }
</style>
