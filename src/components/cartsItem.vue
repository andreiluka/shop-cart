<template>
   <div class="carts-item">
      <div class="carts-item__wrap">
         <div class="carts-item__pic">
            <img :src="editProduct.image" alt="товар" class="carts-item__img">
         </div>
         <div class="carts-item__desc">
            <div class="carts-item__name">{{editProduct.name}}</div>
            <div class="carts-item__text">{{editProduct.desc}}</div>
            <div class="carts-item__code">Артикул: {{editProduct.code}}</div>
         </div>
         <div class="carts-item__count">
            <div class="carts-item__counter">
               <div class="carts-item__btns">
                  <div @click="changeAmountGoods(false)" class="carts-item__btn">
                     <div class="carts-item__btn-icon"></div>
                  </div>
                  <div class="carts-item__btn carts-item__amount">{{editProduct.amount}}</div>
                  <div @click="changeAmountGoods(true)" class="carts-item__btn">
                     <div class="carts-item__btn-icon carts-item__btn-icon--plus"></div>
                  </div>
               </div>
               <div class="carts-item__price" :class="{'carts-item__price--hiden': editProduct.amount < 2}">{{editProduct.price.toLocaleString()}}&nbsp;&#8381;/шт.</div>
            </div>
            <div class="carts-item__cost">{{itemCost}}&nbsp;&#8381;</div>

         </div>
         <div @click="removeExistedGoods" class="carts-item__remove"></div>
      </div>
   </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
   name: 'cartsItem',
   props: {
      product: Object
   },
   data() {
      return {
         editProduct: {...this.product}
      }
   },
   computed: {
      itemCost() {
         return (this.editProduct.price * this.editProduct.amount).toLocaleString()
      }
   },
   methods: {
      ...mapMutations(['EDIT_GOODS', 'REMOVE_GOODS']),
      changeAmountGoods(action) {
         action ? this.editProduct.amount += 1 : this.editProduct.amount -= 1;
         if (this.editProduct.amount < 0) this.editProduct.amount = 0;
         this.EDIT_GOODS(this.editProduct);
      },
      removeExistedGoods() {
         this.REMOVE_GOODS(this.editProduct.id);
      }
   }
}
</script>

<style scoped lang="scss">
.carts-item__wrap {
   display: flex;
   align-items: center;
   padding: 3.6% 6.6% 3.1% 1.9%;
   position: relative;
   
   @include tablets {
      padding-right: 5%;
   }

   @include phones {
      flex-direction: column;
   }
}

.carts-item__pic {
   width: rem(100);
   height: rem(100);
   margin-right: 2.5%;
   
   @include phones {
      width: 120px;
      height: 120px;
      margin: 0 0 15px 0;
   }
}

.carts-item__img {
   margin: 0 auto;
}

.carts-item__desc {
   flex: 1;
   margin-right: 4%;

   @include phones {
      text-align: center;
      margin: 0 0 15px 0;
   }
}

.carts-item__name {
   font-weight: 600;
   margin-bottom: 10px;
}

.carts-item__text {
   font-size: 12px;
   margin-bottom: 10px;
}

.carts-item__code {
   font-size: 14px;
   color: $gray-color;
}

.carts-item__count {
   display: flex;
   align-items: center;
}

.carts-item__counter {
   margin-right: 5.9vw;
   
   @include tablets {
      margin-right: 4vw;
   }
}

.carts-item__btns {
   display: flex;
}

.carts-item__btn {
   display: flex;
   align-items: center;
   justify-content: center;
   width: rem(34);
   height: rem(34);
   border-radius: 4px;
   margin-right: 2px;
   background-color: $light-gray-color;
   transition: 0.3s;
   cursor: pointer;

   &:hover {
      background-color: #e0e0e0;
   }
}

.carts-item__btn-icon {
   width: 10px;
   height: 2px;
   background-color: $gray-color;
   position: relative;
   
   &--plus {
      &::after {
         content: '';
         display: block;
         width: 10px;
         height: 2px;
         background-color: $gray-color;
         transform: rotate(90deg);
         position: absolute;
      }
   }
}

.carts-item__amount {
   font-size: 14px;
   cursor: auto;

   &:hover {
      background-color: $light-gray-color;
   }
}

.carts-item__price {
   font-family: 'Roboto', Helvetica, Arial, sans-serif;
   font-style: normal;
   font-weight: 600;
   font-size: 12px;
   text-align: center;
   margin-top: 8px;

   &--hiden {
      display: none;
   }
}

.carts-item__cost {
   font-family: 'Roboto', Helvetica, Arial, sans-serif;
   font-weight: 600;
   font-size: rem(18);
}

.carts-item__remove {
   width: 15px;
   height: 2px;
   transform: rotate(45deg);
   border-radius: 2px;
   background-color: #1F2432;
   cursor: pointer;
   position: absolute;
   top: rem(27);
   right: rem(6);
   transition: 0.3s;

   &:hover {
      opacity: 0.4;
      transform: rotate(45deg) scale(1.3);
   }

   &::after {
      content: '';
      width: 15px;
      height: 2px;
      transform: rotate(90deg);
      border-radius: 2px;
      background-color: #1F2432;
      position: absolute;
      top: 0;
      left: 0%;
   }
}
</style>