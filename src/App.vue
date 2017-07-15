<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
import data from './common/json/data.json'
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    console.log(data.seller)
    this.seller = data.seller;
  },
  components: {
    'v-header': header
  }
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
    width: 33.33%;
    float: left;
  }
  .tab-item a:hover{
    color: red;
    font-size: 18px;
  }
</style>
