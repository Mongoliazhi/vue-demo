<template>
  <div class="hello">
    <v-header :seller="seller"></v-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import header from '../components/header/header.vue'
import data from '../common/json/data.json'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js',
      seller: {}
    }
  },
  created () {
    console.log(data.seller)
    this.seller = data.seller
  },
  components: {
    'v-header': header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
