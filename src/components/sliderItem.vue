<template>
  <div class="slider-item"> 
    <div class="slider-item__wrap">
      <div class="slider-item__pic">
        <img src="../assets/img/TDA.png" alt="товар" class="slider-item__img">
      </div>
      <div class="slider-item__desc">
        <div class="slider-item__name">G2H</div>
        <div class="slider-item__text">Многофункциональное вытяжное устройство для естественной и гибридной вентиляции</div>
      </div>
      <div class="slider-item__price">
        <div class="slider-item__cost">6 848&nbsp;&#8381; – 56 584&nbsp;&#8381;</div>
        <div class="slider-item__currency">77.60&nbsp;&euro; – 643.86&nbsp;&euro;</div>
      </div>
      <div class="slider-item__btn">
        <button-component :colorBtn="'blue'" :textBtn="'Подробнее'"/>
      </div>
    </div>
  </div>
</template>

<script>
import buttonComponent from "@/components/buttonComponent.vue";

export default {
  name: 'sliderItem',
  components: {
    buttonComponent,
  }
}
</script>

<style scoped lang="scss">
.slider-item {
  height: 100%;
}
.slider-item__wrap {
  background: $light-gray-color;
  border-radius: 5px;
  padding: rem(25);


  display: grid;
  grid-template-rows: minmax(auto, 245px) 1fr 0.1fr 0.1fr;
  grid-auto-columns: 1fr;
  height: 100%;
}
.slider-item__pic {
  // max-width: rem(245);
  margin-bottom: 5px;
}
.slider-item__desc {
  margin-bottom: rem(39);
}
.slider-item__name {
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 10px;
}
.slider-item__text {
  font-size: 14px;
  line-height: 1.45;
}
.slider-item__price {
  margin-bottom: rem(20);
}
.slider-item__cost {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 22px;
  letter-spacing: 0.005em;
  margin-bottom: 5px;
}
.slider-item__currency {
  color: $gray-color;
}
</style>