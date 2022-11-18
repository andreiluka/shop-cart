<template>
   <div class="mini-cart">
      <div class="mini-cart__wrap">
         <div class="mini-cart__icon"></div>
         <div class="mini-cart__desc">
            <div class="mini-cart__title">Ваша корзина</div>
            <div class="mini-cart__amount">3 товара</div>
            <div class="mini-cart__cost">50 576 &#8381;</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'miniCart',
   props: {
      // msg: String
   }
}
</script>

<style scoped lang="scss">
.mini-cart__wrap {
   display: flex;
   justify-content: flex-end;
   align-items: center;
   font-size: 12px;
}
.mini-cart__icon {
   width: 28px;
   height: 25px;
   margin-right: 12px;
   background: url('../assets/cart.svg') center center / contain no-repeat;
} 
.mini-cart__title {
   font-size: 13px;
   font-weight: 600;
}
.mini-cart__amount {
   color: $gray-color;
   margin-bottom: 3px;
}
.mini-cart__cost {
   font-weight: 600;
}
</style>