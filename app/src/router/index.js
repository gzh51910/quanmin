import Vue from 'vue';
//1.引入VueRouter
import VueRouter from 'vue-router'

//2.使用VueRouter
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import Mine from '../pages/Mine.vue';
import Cart from '../pages/Cart.vue';
import List from '../pages/List.vue';
import Goods from '../pages/Goods.vue';
import Sort from '../pages/Sort.vue';
import Hezuo from '../pages/Hezuo';
import Loginagument from '../pages/loginagument.vue';
import Menu from '../pages/Menu.vue';

//3.实例化VueRouter并配置参数
const router = new VueRouter({
    // mode:'history',//hash(默认)
    routes: [
        //当浏览器地址为/home时，显示Home组件的内容，显示在，<router-view/>组件中
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        },
        {
            name: 'mine',
            path: '/mine',
            component: Mine
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            name: 'goods',
            path: '/goods',
            component: Goods
        },
        {
            name: 'sort',
            path: '/sort',
            component: Sort
        },
        {
            name: 'hezuo',
            path: '/hezuo',
            component: Hezuo
        },
        {
            path: '/',
            redirect: '/home',
            // component:Home
        },
        {
            name: 'loginagument',
            path: '/loginagument',
            component: Loginagument,
        },
        {
            name:'menu',
            path:'/menu/:id',
            component:Menu
        },
    ]
});

//4.导出Router实例，把router实例注入到vue实例中
export default router;