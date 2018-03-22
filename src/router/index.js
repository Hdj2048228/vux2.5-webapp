import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from '../store';
import routes from './routes';

Vue.use(VueRouter);

/**
 * 实例化路由
 */
const router = new VueRouter({
  // mode: 'history',
  routes
});

/**
 * 页面刷新时，重新赋值vue_token
 */
if (window.localStorage.getItem('vue_token')) {
  store.commit('LOGIN', window.localStorage.getItem('vue_token'));
}
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

/**
 * 利用钩子函数beforeEach()对路由进行判断
 */
router.beforeEach((to, from, next) => {

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('updateDirection', {direction: 'forward'})
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('updateDirection', {direction: ''})
      } else {
        store.commit('updateDirection', { direction: 'reverse' })
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('updateDirection', {direction: 'forward'})
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    // if (store.state.vue_token) {
      next();
    // } else {
    //   next({
    //     path: '/signUp',
    //     query: {redirect: to.name}
    //   });
    // }
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
        store.commit('LOGOUT');
        router.replace({
          path: 'signUp',
          query: {redirect: router.currentRoute.fullPath}
        });
    }
  }
  return Promise.reject(error.response.data)
});

export default router;
