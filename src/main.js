import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueJsonp from 'vue-jsonp';
import VueScroller from 'vue-scroller';
import  {ToastPlugin} from 'vux';
import App from './App';
import routes from './routes/';
import modules  from './store/';
import actions  from './store/actions';
import mutations  from './store/mutations';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueJsonp);
Vue.use(VueScroller);
Vue.use(ToastPlugin);

// router
const router = new VueRouter({
  // mode: 'history',
  routes
});

// store
const store = new Vuex.Store({
  state: {
    rootMsg: 'hello rootMsg'
  },
  mutations,
  actions,
  modules
});

// filter
Vue.filter('currency', value => {
  return value + '￥';
});
Vue.filter('subString',(str, num) =>{
  let newStr = str.split('');
  let number = num || 20;
  let res = '';
  for (let i = 0; i < number; i++) {
    res += newStr[i];
  }
  return res + '...';
});

Vue.config.productionTip = false;

window.app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');

// 全局URL跳转
Vue.prototype.go=function (name,json) {
  json = json || {};
  app.$router.push({
    name:name,
    query:json
  });
  console.log(app.$route);
};
