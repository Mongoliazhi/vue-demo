<template>
  <div class="news">
    <h1 class="news_h1"> > <span>旅行头条</span> < </h1>
    <ul class="news_ul">
      <!--<li>-->
      <!--<img class="news_liImg" src="../../static/images/a1.jpg"/>-->
      <!--<div class="news_div">-->
      <!--<h4>别人在晒车房，你在晒太阳！</h4>-->
      <!--<p>为什么问题富豪们都爱住四季？据坊间流传，四季酒店风水极佳。</p>-->
      <!--<span>2017-16-15</span>-->
      <!--</div>-->
      <!--</li>-->
      <template v-for="(item,key) in newsLi">
        <a :href="item.vue_url">
          <li>
            <img class="news_liImg" :src="item.vue_Imgurl"/>
            <div class="news_div">
              <h4>{{item.vue_title}}</h4>
              <p>{{item.vue_content}}</p>
              <span>2017-16-15</span>
            </div>
          </li>
        </a>

      </template>

    </ul>

  </div>
</template>

<script>

  export default {
    name: 'news',
    data () {
      return {
        msg: 'news',
        newsLi: []
      }
    },
    methods: {
      showDetail:function () {
        alert('111111')
      },
//      getNewsList:function () {
//        $.ajax({
//          type: "GET",
//          url: 'http://localhost:3000/demo',
//          dataType: "json",  //由于客户端与远程资源不处于同一服务器，所以需要使用jsonp
//          success: function (data) {
//            var data_list = (JSON.parse(data));
//            console.log(data_list)
////            this.newsLi = data_list;
//          },
//          error: function (err) {
//            console.log(err)
//          }
//        })
//      }
    },
    created:function () {
      console.log(this)
      var self = this;
      this.$nextTick(function () {
        $.ajax({
          type: "GET",
          url: 'http://localhost:3000/demo',
          dataType: "json",  //由于客户端与远程资源不处于同一服务器，所以需要使用jsonp
          success: function (data) {
            console.log(this)
            var data_list = [];
            data_list = (JSON.parse(data));
            console.log(data_list)
            self.newsLi =  data_list;
          },
          error: function (err) {
            console.log(err)
          }
        })
      })
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

  .news_ul {
    width: 100%;
    margin-top: 80px;
    overflow: auto;
  }

  .news_ul li {
    width: 100%;
    overflow: auto;
    margin-bottom: 30px;
  }

  .news_liImg {
    width: 50%;
    float: left;
    padding: 10px;
  }

  .news_div {
    width: 50%;
    float: right;
    padding: 10px
  }

  .news_div h4 {
    font-weight: bold;
    color: #333;
  }

  .news_div p {
    text-indent: 2rem;
    text-align: justify;
  }

  .news_div span {
    display: block;
    text-align: right;
  }
</style>
