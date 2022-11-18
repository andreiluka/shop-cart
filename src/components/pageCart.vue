<template>
   <div class="page-cart">
      <div class="page-cart__breadcrumbs">
         <breadcrumbs-nav :pathTitle="['Корзина']"/>
      </div>
      <div class="page-cart__content">
         <normal-cart/>
      </div>
      <slider-component/>
   </div>
</template>

<script>
import breadcrumbsNav from '@/components/breadcrumbsNav.vue'
import normalCart from '@/components/normalCart.vue'
import sliderComponent from '@/components/sliderComponent.vue'

export default {
   name: 'pageCart',
   components: {
      breadcrumbsNav,
      normalCart,
      sliderComponent
   },
   props: {}
}
</script>

<style scoped lang="scss">
.page-cart__breadcrumbs {
   margin-bottom: rem(60);
}
.page-cart__content {
   margin-bottom: rem(94);
}
</style>