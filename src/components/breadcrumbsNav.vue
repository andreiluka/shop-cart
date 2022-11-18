<template>
   <div class="breadcrumbs">
      <ul class="breadcrumbs__list">
         <li class="breadcrumbs__item">Главная</li>
         <li class="breadcrumbs__item"
            v-for="item in pathTitle"
            :key="item"
         >{{item}}</li>
      </ul>
      <!-- <ul v-if="Array.isArray(pathTitle)" class="breadcrumbs__list">
         <li class="breadcrumbs__item">Главная</li>
         <li class="breadcrumbs__item"
            v-for="item in pathTitle"
            :key="item"
         >{{item}}</li>
      </ul>
      <ul v-else class="breadcrumbs__list">
         <li class="breadcrumbs__item">Главная</li>
         <li class="breadcrumbs__item">{{pathTitle}}</li>
      </ul> -->
   </div>
</template>

<script>
export default {
   name: 'breadcrumbsNav',
   props: {
      pathTitle: []
   }
}
</script>

<style scoped lang="scss">
.breadcrumbs__list {
   font-size: 14px;
   display: flex;
}

.breadcrumbs__item {
   margin-right: rem(25);
   position: relative;

   &::after {
      content: '';
      display: block;
      border: 4px solid transparent;
      border-left: 5px solid rgba($color: #33374E, $alpha: 0.8);
      border-right-width: 0;
      position: absolute;
      top: 50%;
      right: -15px;
      transform: translateY(-50%);
   }
   
   &:last-child {
      margin-right: 0;
      color: $gray-color;
      &::after {
         display: none;
      }
   }
}
</style>