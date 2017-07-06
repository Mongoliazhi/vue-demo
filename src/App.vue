<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="tab">
      <div class="tab-item">
      <router-link v-bind:to="'/'">
      主页
      </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/news">
          消息
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/dynamic">
          评论
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  margin-top: 60px;
}
  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #ccc;
  }
  .tab-item{
    width: 33.33%;
    float: left;
  }
  .tab-item a:hover{
    color: red;
    font-size: 18px;
  }
</style>
