<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <div class="header">

    </div>
    <page-cart msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import pageCart from './components/pageCart.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    pageCart
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@500;700&display=swap');
@import "normalize.css";

#app {
  // font-family: 'Roboto', sans-serif;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.header {
  // height: 95px;
  padding: 23px 0;
}
</style>
