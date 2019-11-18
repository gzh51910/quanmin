import Vue from 'vue';
//1.引入VueRouter
import VueRouter from 'vue-router'

//2.使用VueRouter
Vue.use(VueRouter)

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Cart from '../pages/Cart.vue';
import Sort from '../pages/Sort.vue';
import Hezuo from '../pages/Hezuo';
import Loginagument from '../pages/loginagument.vue';
import Loginsucess from '../pages/loginsucess.vue';
import Goodsdetail from '../pages/goodsdetail.vue'
import Shopfail from '../pages/shopfail.vue';
import Shopsucess from '../pages/shopsucess.vue';


// 引入Api
import {
    local
} from '../Api'


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
            name: 'login',
            path: '/login',
            component: Login
        },
     
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
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
            name: 'loginsucess',
            path: '/loginsucess',
            component: Loginsucess,
            meta: {
                requiresAuth: true
            }
        }, {
            name: 'goodsdetail',
            path: '/goodsdetail',
            component: Goodsdetail
        },
        {
            name: 'shopfail',
            path: '/shopfail',
            component: Shopfail,
        },
        {
            name: 'shopsucess',
            path: '/shopsucess',
            component: Shopsucess,
        },

    ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 获取token
        // let Authorization = localStorage.getItem('Authorization');
        let $store = router.app.$store
        let Authorization = $store.state.common.user.Authorization;
        console.log("Authorization",Authorization);

        if (Authorization) {
            // 登录则放行
            next();

            // 发送校验请求
            router.app.$axios.get('http://localhost:1910/verify', {
                headers: {
                    Authorization
                }
              
                
            }).then(({
                data
            }) => {
                console.log('校验结果：', data)
                if (data.status === 0) {
                    $store.commit('logout');
                    next({
                        path: '/login',
                        query: {
                            redirectUrl: to.fullPath
                        }
                    })
                }
            })
        } else {
            // 否则跳到登录页面
            // router.push('/login')
            next({
                path: '/login',
                query: {
                    redirectUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
    console.log('全局.beforeEach');
})
//4.导出Router实例，把router实例注入到vue实例中
export default router;