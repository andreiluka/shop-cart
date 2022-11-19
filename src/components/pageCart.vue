<template>
   <div class="page-cart">
      <div class="page-cart__breadcrumbs">
         <breadcrumbs-nav :pathTitle="['Корзина']"/>
      </div>
      <div class="page-cart__content">
         <normal-cart :goods="goods"/>
      </div>
      <slider-component :viewedGoods="viewedGoods"/>
   </div>
</template>

<script>
import breadcrumbsNav from '@/components/breadcrumbsNav.vue'
import normalCart from '@/components/normalCart.vue'
import sliderComponent from '@/components/sliderComponent.vue'
import { mapActions, mapState } from "vuex";

export default {
   name: 'pageCart',
   components: {
      breadcrumbsNav,
      normalCart,
      sliderComponent
   },
   computed: {
      ...mapState({
         goods: state => state.goods,
         viewedGoods: state => state.viewedGoods
      }),
   },
   methods: {
      ...mapActions(['fetchGoods']),
   },
   created() {
      this.fetchGoods('goods');
      this.fetchGoods('viewedGoods');
   }
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