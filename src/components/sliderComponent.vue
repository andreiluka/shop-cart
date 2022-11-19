<template>
  <div class="slider-component">
    <div class="slider-component__header">
      <h4 class="slider-component__title">Просмотренные товары</h4>
      <div class="slider-component__btns">
        <button @click="slide('prev')" class="slider-component__btn" type="button"></button>
        <div class="slider-component__counter">
          <div class="slider-component__counter-curent">{{currentIndex + 1}}</div>
          <div class="slider-component__counter-separator">/</div>
          <div class="slider-component__counter-total">{{viewedGoods.length}}</div>
        </div>
        <button @click="slide('next')" class="slider-component__btn slider-component__btn--right" type="button"></button>
      </div>
    </div>
    <div class="slider-component__block">
      <ul class="slider-component__list" ref="sliderList" :style="{transform:newTransform}">
        <li class="slider-component__item"
          v-for="item in viewedGoods"
          :key="item.id"
        >
          <slider-item :product="item"/>
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
    sliderItem
  },
  props: {
    viewedGoods: Array
  },
  data() {
    return {
      currentIndex: 0,
      sliderItemWidth: 0
    }
  },
  computed: {
    newTransform() {
      const step = this.currentIndex * this.sliderItemWidth;
      return `translateX(-${step}%)`;
    }
  },
  methods: {
    slide(direction) {
      switch(direction) {
        case 'next':
          this.currentIndex++;
          break;
        case 'prev':
          this.currentIndex--;
          break;
      }

      const sliderList = this.$refs['sliderList'];
      this.sliderItemWidth = parseFloat(window.getComputedStyle(sliderList).gridAutoColumns);
    }
  },
  watch: {
    currentIndex(value) {
      let limiter = Math.ceil(100/this.sliderItemWidth)

      const lastIndex = this.viewedGoods.length - limiter;
      if (value < 0) this.currentIndex = lastIndex;
      if (value > lastIndex) this.currentIndex = 0;
    }
  }
}
</script>

<style scoped lang="scss">
.slider-component__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: rem(60);
}

.slider-component__title {
  font-weight: 600;
  font-size: rem(30);
  
  @include phones {
    font-size: rem(28);
    margin: 0 rem(15) rem(15) 0;
  }
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
  transition: 0.3s;
  position: relative;

  @include phones {
    width: rem(40);
    height: rem(40);
  }
  
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
    background: url('../assets/img/arrow.svg') center center no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include phones {
      width: rem(12);
      height: rem(16);
    }
  }
}

.slider-component__counter {
  display: flex;
  align-items: baseline;
  padding: 0 rem(18);
  font-size: rem(18);
}

.slider-component__counter-curent {
  font-weight: 500;
  font-size: rem(24);
}

.slider-component__counter-separator {
  color: $gray-color;
  margin: 0 0.2em;
}

.slider-component__counter-total {
  color: $gray-color;
}

.slider-component {
  width: 100%;
}

.slider-component__block {
  overflow: hidden;
}

.slider-component__list {
  display: grid;
  grid-auto-columns: 25.3%;
  grid-auto-flow: column;
  transition: transform 0.5s ease;
  transform: translateX(0%);
  
  @include laptop {
    grid-auto-columns: 34%;
  }
  @include tablets {
    grid-auto-columns: 51.3%;
  }
  @include phones {
    grid-auto-columns: 100%;
  }
}

.slider-component__item {
  padding-right: 20px;
}
</style>