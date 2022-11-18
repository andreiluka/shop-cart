<template>
  <div class="slider-component">
    <div class="slider-component__header">
      <h4 class="slider-component__title">Просмотренные товары</h4>
      <div class="slider-component__btns">
        <div class="slider-component__btn"></div>
        <div class="slider-component__counter">
          <div class="slider-component__counter-curent">1</div>
          <div class="slider-component__counter-separator">/</div>
          <div class="slider-component__counter-total">6</div>
        </div>
        <div class="slider-component__btn slider-component__btn--right"></div>
      </div>
    </div>
    <div class="slider-component__block">
      <ul class="slider-component__list">
        <li class="slider-component__item">
          <slider-item/>
        </li>
        <li class="slider-component__item">
          <slider-item/>
        </li>
        <li class="slider-component__item">
          <slider-item/>
        </li>
        <li class="slider-component__item">
          <slider-item/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sliderItem from "@/components/sliderItem.vue";

export default {
  name: 'sliderComponent',
  components: {
    sliderItem,
  }
}
</script>

<style scoped lang="scss">
.slider-component__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem(60);
}
.slider-component__title {
  font-weight: 600;
  font-size: 30px;
}
.slider-component__btns {
  display: flex;
  align-items: center;
}
.slider-component__btn {
  width: rem(50);
  height: rem(50);
  background: $dark-gray-color;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  
  &:hover {
    background: $gray-color;
  }

  &--right {
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    display: block;
    width: rem(12);
    height: rem(21);
    background: url('../assets/arrow.svg') center center no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.slider-component__counter {
  display: flex;
  align-items: baseline;
  padding: 0 rem(18);
  font-size: 18px;
}
.slider-component__counter-curent {
  font-weight: 500;
  font-size: 24px;
}
.slider-component__counter-separator {
  color: $gray-color;
  margin: 0 0.2em;
}
.slider-component__counter-total {
  color: $gray-color;
}
.slider-component__list {
  // display: flex;

  display: grid;
  grid-auto-columns: 25.3%;
  grid-auto-flow: column;
}
.slider-component__item {
  // width: 23.8%;
  // margin-right: 1.56%;

  // &:last-child {
  //   margin-right: 0;
  // }

  padding-right: 20px;
}
</style>