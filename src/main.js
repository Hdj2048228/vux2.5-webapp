import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueJsonp from 'vue-jsonp';
import VueScroller from 'vue-scroller';
import  {AlertPlugin, ToastPlugin, LoadingPlugin} from 'vux';
import App from './App';
import router from './router/';
import store from './store';
import { sync } from 'vuex-router-sync'

Vue.use(Vuex);
Vue.use(VueJsonp);
Vue.use(VueScroller);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

// const FastClick = require('fastclick')
// FastClick.attach(document.body)
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
  if (str) {
    let newStr = str.split('');
    let number = num || 20;
    if (newStr.length < number) {
      return newStr.join('') + '...';
    } else {
      let res = '';
      for (let i = 0; i < number; i++) {
        res += newStr[i];
      }
      return res + '...';
    }
  }
});

sync(store, router)

window.app = new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app');

// android && ios 同步嵌入登录
window.setToken = function (token) {
  window.localStorage.setItem('vue_token',token);
};

/**
 * 全局URL跳转
 * @param name
 * @param json
 */
Vue.prototype.go = function (name, json) {
  if(name === '-1'){
    app.$router.go(-1);
  }else{
    json = json || {};
    app.$router.push({
      name: name,
      query: json
    });
  }
  console.log(app.$route);
};
