<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <div class="header">
      <mini-cart/>
    </div>
    <page-cart/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import pageCart from '@/components/pageCart.vue'
import miniCart from '@/components/miniCart.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    pageCart,
    miniCart,
  }
}
</script>

<!-- <style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@500;700&display=swap');
@import "normalize.css";
</style> -->

<style lang="scss" src="./app.scss"></style>