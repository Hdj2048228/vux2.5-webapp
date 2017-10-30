import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueRouter from 'vue-router';
import VueJsonp from 'vue-jsonp';
import VueScroller from 'vue-scroller';
import  {AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux';
import App from './App';
import routes from './routes/';
import modules  from './store/';
import actions  from './store/actions';
import mutations  from './store/mutations';
import * as types from './store/type';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueJsonp);
Vue.use(VueScroller);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// router
const router = new VueRouter({
  // mode: 'history',
  routes
});

// store
const store = new Vuex.Store({
  state: {
    user: {},
    vue_token: null
  },
  mutations,
  actions,
  modules
});

// 页面刷新时，重新赋值vue_token
if (window.localStorage.getItem('vue_token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('vue_token'));
}

/**
 * 利用钩子函数beforeEach()对路由进行判断
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.vue_token) {
      next();
    } else {
      next({
        path: '/signUp',
        query: {redirect: to.name}
      });
    }
  } else {
    next();
  }
});

/**
 * http request 拦截器
 */
axios.interceptors.request.use(config => {
  if (store.state.vue_token) {
    config.headers.Authorization = `Bearer ${store.state.vue_token}`;
  }
  return config;
}, err => {
  return Promise.reject(err);
});

/**
 * http response 拦截器
 */
axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401: // 401 清除vue_token信息并跳转到登录页面
        store.commit(types.LOGOUT);
        router.replace({
          path: 'signUp',
          query: {redirect: router.currentRoute.fullPath}
        });
    }
  }
  // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
  return Promise.reject(error.response.data)
});


/**
 * 追加钱币符
 */
Vue.filter('currency', value => {
  return value + '￥';
});

/**
 * 数字转字符串
 */
Vue.filter('toString', value => {
  return value + '';
});

/**
 * 字符串截取
 */
Vue.filter('subString', (str, num) => {
  let newStr = str.split('');
  let number = num || 20;
  let res = '';
  if (newStr.length < number) {
    return newStr.join('') + '...';
  } else {
    for (let i = 0; i < number; i++) {
      res += newStr[i];
    }
    return res + '...';
  }
});


window.app = new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app');

/**
 * 全局URL跳转
 * @param name
 * @param json
 */
Vue.prototype.go = function (name, json) {
  json = json || {};
  app.$router.push({
    name: name,
    query: json
  });
  console.log(app.$route);
};
