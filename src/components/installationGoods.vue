<template>
   <div class="installation-goods">
      <div class="installation-goods__wrap">
         <label class="installation-goods__label">
            <input class="installation-goods__checkbox" type="checkbox" name="installation" id="installationGoods">
            <div class="installation-goods__checkbox-custom"></div>
         </label>
         <div class="installation-goods__icon">
            <img src="../assets/tools.svg" alt="установка" class="installation-goods__img">
         </div>
         <div class="installation-goods__desc">
            <div class="installation-goods__title">Установка</div>
            <div class="installation-goods__text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'installationGoods',
   props: {}
}
</script>

<style scoped lang="scss">
.installation-goods__wrap {
   display: flex;
   align-items: center;
   background: $light-gray-color;
   border-radius: 5px;
   padding: rem(26);
}

.installation-goods__label {
   display: flex;
   align-items: center;
   cursor: pointer;
}
.installation-goods__checkbox {
   display: none;
}

.installation-goods__checkbox:checked+.installation-goods__checkbox-custom:after {
   display: block;
}

.installation-goods__checkbox-custom {
   width: 20px;
   height: 20px;
   background: #ffffff;
   border: 1px solid $gray-color;
   border-radius: 2px;
   box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.08);
   position: relative;
   margin-right: rem(20);


   &:after {
      content: '';
      display: block;
      width: 16px;
      height: 14px;
      background: url('../assets/check-mark.svg') center center no-repeat;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: none;
   }
}
.installation-goods__icon {
   width: 50px;
   height: 50px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #ffffff;
   border-radius: 4px;
   flex-shrink: 0;
   margin-right: rem(20);
}
.installation-goods__title {
   font-weight: 600;
   margin-bottom: 2px;
}
.installation-goods__text {
   font-size: 14px;
   color: $gray-color;
}
</style>