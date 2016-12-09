import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './view/home/Home.vue';
import Product from './view/product/Product.vue';
import Detail from './view/detail/Detail.vue';
import User from './view/user/User.vue';

export default new VueRouter({
    // mode: 'history',
    routes:[
        {
            path: '/home',
            component: Home
        }, 
        {
            path: '/product',
            component: Product
        }, 
        {
            path: '/detail',
            component: Detail
        }, 
        {
            path: '/user',
            component: User
        },
        {
            path: '*',
            redirect:'/home'
        }
    ]
});