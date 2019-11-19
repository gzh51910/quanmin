import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        path: '/',
        component: () => import('@/views/main'),
        children: [{
            path: "",
            component: () => import('@/views/home')
        }, {
            path: 'goodsList',
            component: () => import('@/views/goodsM/goodsList')
        }, {
            path: 'goodsSort',
            component: () => import('@/views/goodsM/goodsSort')
        }, {
            path: 'goodsAdd',
            component: () => import('@/views/goodsM/goodsAdd')
        }, {
            path: 'userList',
            component: () => import('@/views/userM/userList')
        }, {
            path: 'userAdd',
            component: () => import('@/views/userM/userAdd')
        }, {
            path: 'orderList',
            component: () => import('@/views/orderM/orderList')
        }]
    }, {
        path: '/login',
        component: () => import('@/views/account/login')
    }]
});


export default router;