<template>
   <div class="normal-cart">
      <div class="normal-cart__content">
         <div class="normal-cart__header">
            <div class="normal-cart__title-block">
               <h2 class="normal-cart__title">Ваша корзина</h2>
               <div class="normal-cart__amount">3 товара</div>
            </div>
            <div class="normal-cart__clear">Очистить корзину</div>
         </div>
         <ul class="normal-cart__list">
            <li class="normal-cart__item">
               <carts-item/>
            </li>
            <li class="normal-cart__item">
               <carts-item/>
            </li>
            <li class="normal-cart__item">
               <carts-item/>
            </li>
         </ul>
         <div class="normal-cart__installation">
            <installation-goods/>
         </div>
      </div>
      <div class="normal-cart__total">
         <carts-total/>
      </div>
   </div>
</template>

<script>
import cartsItem from '@/components/cartsItem.vue'
import installationGoods from '@/components/installationGoods.vue'
import cartsTotal from '@/components/cartsTotal.vue'

export default {
   name: 'normalCart',
   components: {
      cartsItem,
      installationGoods,
      cartsTotal
   },
   props: {}
}
</script>

<style scoped lang="scss">
.normal-cart {
   display: flex;
}
.normal-cart__content {
   margin-right: 4.3%;
   width: 62.5%;
}
.normal-cart__header {
   display: flex;
   justify-content: space-between;
   align-items: baseline;
   margin-bottom: rem(31);
}
.normal-cart__title-block {
   display: flex;
   align-items: baseline;
}
.normal-cart__title {
   font-weight: 700;
   font-size: 44px;
   margin-right: rem(22);
}
.normal-cart__amount {
   font-size: 18px;
   color: $gray-color;
}
.normal-cart__clear {
   color: $gray-color;
   // text-align: right;
   padding-bottom: 1px;
   border-bottom: 1px solid $gray-color;
   transition: 0.1s;
   cursor: pointer;
   
   &:hover {
      border-bottom: 0px solid $gray-color;
   }
}
.normal-cart__list {
   margin-bottom: 6px;
}
.normal-cart__item {
   border-bottom: 1px solid #C4C4C4;

   &:last-child {
      border-bottom: none;
   }
}
.normal-cart__total {
   // min-width: rem(425);
   width: 33.2%;
}
</style>