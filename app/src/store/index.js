// 引入vue
import Vue from 'vue'
// 1.引入vuex
import Vuex from 'vuex';
import common from './common';
// 2.使用vuex
Vue.use(Vuex);
// 3.实例化一个store
let store = new Vuex.Store({
    state: {
        goodslist: []
    },
    mutations: {
        // 删除单个商品
        removeFromCart(state, id) {
            state.goodslist = state.goodslist.filter(item => item.id != id)
        },
        // 清空购物车
        clearCart(state) {
            state.goodslist = []
        },
        // 添加到购物车
        addtocart(state, goods) {
            state.goodslist.unshift(goods)
        },
        // 修改数量
        changeQty(state, payload) {
            state.goodslist.forEach(item => {
                if (item.id == payload.id) {
                    item.qty = payload.qty;
                }
            })
        }
    },
    modules: {
        common
    }
})
// 4.导出
export default store;
