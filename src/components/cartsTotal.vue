<template>
  <div class="carts-total">
    <div class="carts-total__block">
      <h4 class="carts-total__title">Итого</h4>
      <div class="carts-total__desc">
        <div class="carts-total__cost carts-total__row">
          <div class="carts-total__text">Сумма заказа</div>
          <div class="carts-total__val">{{totalCost.toLocaleString()}}&nbsp;&#8381;</div>
        </div>
        <div class="carts-total__amount carts-total__row">
          <div class="carts-total__text">Количество</div>
          <div class="carts-total__val">{{totalAmount}}&nbsp;шт</div>
        </div>
        <div class="carts-total__installation carts-total__row">
          <div class="carts-total__text">Установка</div>
          <div class="carts-total__val">{{installationState}}</div>
        </div>
      </div>
      <div class="carts-total__result carts-total__row">
        <div class="carts-total__result-text">Стоимость товаров</div>
        <div class="carts-total__result-val">{{totalCost.toLocaleString()}}&nbsp;&#8381;</div>
      </div>
      <div class="carts-total__btns">
        <div class="carts-total__btn">
          <button-component @click="onApprove" :fontSizeBtn="'18px'" :colorBtn="'blue'" :textBtn="'Оформить заказ'"/>
        </div>
        <div class="carts-total__btn">
          <button-component :fontSizeBtn="'18px'" :textBtn="'Купить в 1 клик'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import buttonComponent from "@/components/buttonComponent.vue";
import { mapGetters, mapState, mapActions } from 'vuex';

export default {
  title: 'cartsTotal',
  components: {buttonComponent},
  computed: {
    ...mapState({
      goods: state => state.goods,
      installation: state => state.installation
    }),
    ...mapGetters(['totalCostGoods', 'totalAmountGoods']),
    totalCost() {
      return this.totalCostGoods
    },
    totalAmount() {
      return this.totalAmountGoods
    },
    installationState() {
      return this.installation ? 'Да' : 'Нет'
    }
  },
  methods: {
    ...mapActions(['sendOrder']),
    async onApprove() {
      if (!this.goods.length) {
        alert('КОРЗИНА ПУСТА');
        return
      }
      
      const data = [...this.goods, {installation:this.installation}];

      try {
        await this.sendOrder(data);
      } catch(error) {
        throw new Error(`Ошибка: ${error}`)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.carts-total__block {
  padding: rem(35) rem(30);
  background: $light-gray-color;
  border-radius: 5px;
}

.carts-total__title {
  font-weight: 600;
  font-size: 24px;
  margin-bottom: rem(31);
}

.carts-total__desc {
  margin-bottom: rem(16);
  padding-bottom: rem(11);
  border-bottom: 1px solid $gray-color;
}

.carts-total__row {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(18);
}

.carts-total__text {
  font-weight: 500;
}

.carts-total__val {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-weight: 400;
}

.carts-total__result-text {
  font-size: rem(18);
  font-weight: 600;
  margin-right: rem(10);
}

.carts-total__result-val {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 26px;
  font-weight: 700;
}

.carts-total__btn {
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>