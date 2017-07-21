<template>
  <div class="news">
    <h1 class="news_h1"> > <span>旅行头条</span> < </h1>
    <ul class="news_ul">
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
      <li>
        <img class="news_liImg" src="../../static/images/a1.jpg"/>
        <div class="news_div">
          <h4>别人在晒车房，你在晒太阳！</h4>
          <p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>
          <span>2017-16-15</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        msg: 'news'
      }
    },
    methods: {
      showDetail () {
        alert('111111')
      }

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news {
    position: relative;
    width: 100%;
    height: 1000px;
    color: #555;
  }

  .news_h1 {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 45px;

  }
  .news_ul{
    width: 100%;
    margin-top: 80px;
    overflow: auto;
  }
  .news_ul li{
    width: 100%;
    overflow: auto;
    margin-bottom: 30px;
  }
  .news_liImg{
    width: 50%;
    float: left;
    padding: 10px;
  }
  .news_div{
    width: 50%;
    float: right;
    padding: 10px
  }
  .news_div h4{
    font-weight: bold;
    color: #333;
  }
  .news_div p{
    text-indent: 2rem;
    text-align: justify;
  }
  .news_div span{
    display: block;
    text-align: right;
  }
</style>
