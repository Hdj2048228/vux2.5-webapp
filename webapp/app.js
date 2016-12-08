import Vue from 'vue';
import VueResource from 'vue-resource';

import store from './store';
import router from './router';
import App from './App.vue';

// 注册插件
Vue.use(VueResource);

// debug模式
Vue.config.debug = true;

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');