<template>
  <div class="container">
    <div class="header">
      <mini-cart/>
    </div>
    <page-cart/>
  </div>
</template>

<script>
import pageCart from '@/components/pageCart.vue'
import miniCart from '@/components/miniCart.vue'

export default {
  name: 'App',
  components: {
    pageCart,
    miniCart,
  }
}
</script>

<style lang="scss" src="./app.scss"></style>