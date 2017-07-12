<template>
  <div class="news">
    <h1>{{ msg }}</h1>
    <div class="img_li">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">
      <img src="./women.jpg" alt="">

    </div>

  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'news'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img_li{
  width: 100%;
  overflow: auto;
}
  .img_li img{
    width: 100%;
    margin: 10px;
  }
</style>
