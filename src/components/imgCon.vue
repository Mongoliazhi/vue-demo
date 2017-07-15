<template>
  <div id="hello">
    <router-link to="news">
      <button class="hello_btn" type="button">返回</button>
    </router-link>

    <h1>{{ msg }}</h1>
    <div class="img_li">
      <img src="./women.jpg" alt="">
      <h3>Vue.js 是什么</h3>
      <p>
         Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，
      Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有
      项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单
      页应用程序提供驱动。如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是图片详情页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hello{
    position: relative;
    width: 100%;
    overflow: auto;
  }
  .hello_btn{
    position: absolute;
    left: 10px;
    top: 26px;
    border: none;
    border-radius: 5px;
    width: 50px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: crimson;
    color: #fff;
    font-size: 18px;
  }

  .img_li{
    width: 100%;
    overflow: auto;
  }
  .img_li img{
    width: 100%;
    margin: 10px 0;
  }
  .img_li p{
    text-align: justify;
  }
</style>
