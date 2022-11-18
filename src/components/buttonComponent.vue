<template>
  <div class="button-component">
    <button class="button-component__btn button-component__btn--blue" 
      v-if="colorBtn" 
      :style="{fontSize:fontSizeBtn}"
      type="button"
      >{{textBtn}}</button>
    <button class="button-component__btn" 
      v-else 
      :style="{fontSize:fontSizeBtn}"
      type="button"
    >{{textBtn}}</button>
  </div>
</template>

<script>
export default {
  name: 'buttonComponent',
  components: {},
  props: {
    textBtn: {
      type: String,
      default: "кнопка"
    },
    colorBtn: {
      type: String,
      default: ""
    },
    fontSizeBtn: {
      type: String,
      default: '16px'
    }
  }
}
</script>

<style scoped lang="scss">
.button-component__btn {
  width: 100%;
  max-width: 370px;
  padding: 14px 40px;
  border: 1px solid $blue-color;
  border-radius: 4px;
  font-weight: 600;
  // font-size: 18px;
  color: $blue-color;
  transition: 0.4s;

  &:hover {
    background: $blue-color;
    color: white;
  }

  &--blue {
    background-color: $blue-color;
    color: white;
    
    &:hover {
      background-color: white;
      color: $blue-color;
    }
  }
}
</style>