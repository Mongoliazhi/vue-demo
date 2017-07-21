<template>
  <div class="product">
    <h2 class="product_h2">
      <span @click="product_Jump"> < </span>
      {{msg}}
    </h2>
    <ul class="product_ul">
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/v/I73g9d4j4k154173582_kaNsQT.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/x/I73g9co7no710470446_PXVEmO.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/v/I73g9d4j4k154173582_kaNsQT.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/x/I73g9co7no710470446_PXVEmO.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/v/I73g9d4j4k154173582_kaNsQT.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/x/I73g9co7no710470446_PXVEmO.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/v/I73g9d4j4k154173582_kaNsQT.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
      <li>
        <img src="https://daily-test.oss-cn-hangzhou.aliyuncs.com/x/I73g9co7no710470446_PXVEmO.jpg" alt="">
        <div>
          <p>
            韩国holika去黑头猪皮贴三部曲*3袋
          </p>
          <span>￥29.29</span>
          <s>￥69.99</s>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import Vue from 'vue'
  import Router from 'vue-router';
  Vue.use(Router)

  export default {
    name: 'news',
    data () {
      return {
        msg: '产品列表'
      }
    },
    methods: {
      product_Jump(){
        this.$router.go(-1)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product{
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .product_h2{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
  }
  .product_h2 span{
    position: absolute;
    left: 20px;
    font-size: 30px;
  }
  .product_ul {
    width: 100%;
    overflow: auto;
    background-color: #F0EFED;
    padding:5px 10px;
    /*margin-top: 50px;*/
  }

  .product_ul li {
    list-style: none;
    width: 49%;
    float: left;
    text-align: left;
    margin: 5px 0;
    background-color: #fff;
  }
  .product_ul li:nth-child(2n-1){
    margin-right: 2%;
  }
  .product_ul img{
    width: 100%;
  }

  .product_ul div{
    width: 100%;
    padding: 5px 10px;
  }
  .product_ul div p{
    font-size: 16px;
    color: #999;
  }
  .product_ul div span{
    color: red;
    font-size: 16px;
  }
  .product_ul div s{
    font-size: 12px;
    margin-left: 5px;
    text-decoration:line-through;
  }
</style>
