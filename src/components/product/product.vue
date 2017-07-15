<template>
  <div class="product">
    <h2>{{msg}}</h2>
    <ul class="product_ul">
      <li>
        <img src="" alt="">
        <p>
          韩国holika去黑头猪皮贴三部曲*3袋
        </p>
        <div>
          <span>￥29.29</span>
          <s>￥69.99</s>
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
        msg: '产品列表'
      }
    },
    methods: {}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product_ul {
    width: 100%;
    overflow: auto;
  }

  .product_ul li {
    list-style: none;
    width: 50%;
    float: left;
    text-align: left;
  }
  .product_ul p{

  }
  .product_ul div{

  }
  .product_ul div span{
    color: red;
  }
  .product_ul div s{

  }
</style>
