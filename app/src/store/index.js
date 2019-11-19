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
        goodslist: [{
            id: "1",
            name: "huawei mate30 pro",
            imgurl:
                "http://pic.quanmingwang.com/shop/pic/common/Qu29kWhLnD_20180509_!!61324.jpg",
            price: 5998,
            qty: 10
        },
        // {
        //     id: "2",
        //     name: "xiaomi9",
        //     imgurl:
        //         "http://pic.quanmingwang.com/shop/pic/common/XsiEGoRG1W_20181116_!!38634.jpg",
        //     price: 2999,
        //     qty: 2
        // },
        {
            id: "3",
            name: "onePlus9 pro",
            imgurl:
                "http://pic.quanmingwang.com/shop/pic/common/71nbKuhtyI_20181115_!!18389.jpg",
            price: 3999,
            qty: 1
        }]
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
