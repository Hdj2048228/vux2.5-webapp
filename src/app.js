import Vue from 'vue';
import VueResource from 'vue-resource';
import BScroll from 'better-scroll';

// debug
Vue.config.debug = true;

// middleware
Vue.use(VueResource);
Vue.prototype.BScroll = BScroll;

import App from './App.vue';
import router from './router/';
import store from './store/';

// css
import css from './static/css/app.css';
import font from './static/css/font/i.css';

const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');