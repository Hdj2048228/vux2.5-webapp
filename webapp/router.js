import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import myHome from './components/myHome.vue';
import myList from './components/myList.vue';
import myDetail from './components/myDetail.vue';
import myCenter from './components/myCenter.vue';

export default new VueRouter({
    // mode: 'history',
    routes:[
        {
            path: '/myHome',
            component: myHome
        }, 
        {
            path: '/myList',
            component: myList
        }, 
        {
            path: '/myDetail',
            component: myDetail
        }, 
        {
            path: '/myCenter',
            component: myCenter
        },
        {
            path: '*',
            redirect:'/myHome'
        }
    ]
});