import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';

// import mixin from './mixin'

// import store from './store'
import router from './router'
Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.prototype.$axios = axios;

new Vue({
  router,
  // store,
  render: h => h(App),
  // template: '<App/>',
  // components: { App }
}).$mount('#app')