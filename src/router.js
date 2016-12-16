import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './view/Home.vue';
import Product from './view/Product.vue';
import Detail from './view/Detail.vue';
import User from './view/User.vue';

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