<template>
  <div class="slider-item"> 
    <div class="slider-item__wrap">
      <div class="slider-item__pic">
        <img :src="product.image" alt="товар" class="slider-item__img">
      </div>
      <div class="slider-item__desc">
        <div class="slider-item__name">{{product.name}}</div>
        <div class="slider-item__text">{{product.desc}}</div>
      </div>
      <div class="slider-item__price">
        <div class="slider-item__cost">
          {{product.minPrice.toLocaleString()}}&nbsp;&#8381; – {{product.maxPrice.toLocaleString()}}&nbsp;&#8381;
        </div>
        <div class="slider-item__currency">
          {{costInCurrency(product.minPrice)}}&nbsp;&euro; – {{costInCurrency(product.maxPrice)}}&nbsp;&euro;
        </div>
      </div>
      <div class="slider-item__btn">
        <button-component :colorBtn="'blue'" :textBtn="'Подробнее'"/>
      </div>
    </div>
  </div>
</template>

<script>
import buttonComponent from "@/components/buttonComponent.vue";
import axios from 'axios';

export default {
  name: 'sliderItem',
  components: {
    buttonComponent,
  },
  props: {
    product: Object
  },
  data() {
    return {
      euroRate: 0
    }
  },
  methods: {
    costInCurrency(value) {
      const result = +(value/this.euroRate).toFixed(2);
      return result.toLocaleString();
    }
  },
  created() {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => this.euroRate = res.data.Valute.EUR.Value)
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
  margin-bottom: 5px;
}

.slider-item__img {
  margin: 0 auto;
}

.slider-item__desc {
  margin-bottom: rem(39);
}

.slider-item__name {
  font-weight: 700;
  font-size: rem(22);
  margin-bottom: 10px;
}

.slider-item__text {
  font-size: rem(14);
  line-height: 1.45;
}

.slider-item__price {
  margin-bottom: rem(20);
}

.slider-item__cost {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: rem(22);
  letter-spacing: 0.005em;
  margin-bottom: 5px;
}

.slider-item__currency {
  color: $gray-color;
}
</style>