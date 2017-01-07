import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Product from '../pages/Product.vue';
import Detail from '../pages/Detail.vue';
import User from '../pages/User.vue';

export default new VueRouter({
    // mode: 'history',
    routes:[
        {
            name: 'home',
            path: '/home',
            component: Home
        },
        {
            name: 'product',
            path: '/product',
            component: Product
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail
        },
        {
            name: 'user',
            path: '/user',
            component: User
        },
        {
            path: '*',
            redirect:'/home'
        }
    ]
});