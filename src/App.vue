<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


  export default {
    name: 'app',
  }
</script>

<style>
  * {
    margin: 0 auto;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-size: 14px;
    margin: 0 auto;
    padding: 0;
    font-family: Georgia, serif;
  }

  body, html {
    -webkit-text-size-adjust: none;
    width: 100%;
    height: 100%;
  }

  img {
    border: 0px;
  }

  ul, li, dl, dd, dt, p, ol, h1, h2, h3, h4, h5 {
    font-weight: 100;
    padding: 0;
    margin: 0;
  }

  .wrap {
    margin: 0 auto;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .index {
    overflow: hidden;
  }

  .clr {
    clear: both;
    height: 0px;
    width: 100%;
    font-size: 1px;
    line-height: 0px;
    visibility: hidden;
    overflow: hidden;
  }

  .pointer {
    cursor: pointer;
  }

  a, input, button {
    outline: none;
  }

  ::-moz-focus-inner {
    border: 0px;
  }

  /*a:link {color:#0f0;text-decoration:none;}
  a:visited {color: #FFFF00; text-decoration:none;}
  a:hover {color: #00FF00; text-decoration:underline;}
  a:active {color: #0000FF; text-decoration:underline;}*/
  a {
    color: #000;
  }

</style>
