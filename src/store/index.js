import { createStore } from 'vuex'

export default createStore({
  state: {
    goods: [],
    viewedGoods: [],
    installation: false,
  },
  getters: {
    totalCostGoods: state => {
      let cost = 0;
      state.goods.forEach(item => cost += item.amount * item.price);
      return cost;
    },
    totalAmountGoods: state => {
      let amount = 0;
      state.goods.forEach(item => amount += item.amount);
      return amount;
    },
  },
  mutations: {
    SET_GOODS(state, data) {
      let nameProp = data.fileData;

      state[nameProp] = data.response.map(item => {
        const requireImg = require(`../assets/img/${item.image}`);
        item.image = requireImg;
        return item;
      });
    },
    EDIT_GOODS(state, editedGoods) {
      state.goods = state.goods.map(item => {
        return item.id === editedGoods.id ? editedGoods : item;
      });
    },
    REMOVE_GOODS(state, goodsId) {
      state.goods = state.goods.filter(item => item.id !== goodsId);
    },
    CHANGE_INSTALLATION(state, data) {
      state.installation = data;
    },
    CLEAR_CART(state) {
      state.goods = [];
    }
  },
  actions: {
    fetchGoods({commit}, fileData) {
      const response = require(`../assets/data/${fileData}.json`);
      commit('SET_GOODS', {response, fileData});
    },
    async sendOrder(data) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json;charset=utf-8'}
        });

        const json = await response.json();
        
        alert(`
          ЗАКАЗ ОТПРАВЛЕН 
          Товаров: ${json.getters.totalAmountGoods} шт.
          На сумму: ${json.getters.totalCostGoods} руб.
        `)
      } catch (error) {
        throw new Error(`Ошибка ${error}`)
      }
    }
  }
})
