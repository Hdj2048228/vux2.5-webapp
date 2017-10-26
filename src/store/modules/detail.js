/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  cart_number: 0,
  cart_goods: [],
  swiper_data: {
    title: 'swiper_title11',
    desc: 'swiper_desc22',
    info: 'swiper_info33',
    params: [{
      label: '宽度：',
      value: '20cm'
    }],
    pics: [{
      url: 'https://static.vux.li/demo/1.jpg'
    }]
  }
};

const getters = {
  detail_swiper: state => state.swiper_data,
  detail_cart_number: state => state.cart_number
};

const actions = {
  detail_goods({commit}, id) {
    axios.getDetailGoods(id, res => {
      commit(types.Get_Detail_Goods, res);
    })
  },
  goods_add({commit,dispatch}, id){
    axios.goodsAdd(id, res => {
      commit(types.Get_Detail_Goods_Add, res);

      /*这就高级了：新增完成在请求总数*/
      dispatch('goods_get_number', id);
    })
  },
  goods_get_number({commit}, id){
    axios.goodsGetNumber(id, res => {
      commit(types.Get_Detail_Goods_Number, res);
    })
  }
};

const mutations = {
  [types.Get_Detail_Goods](state, res){
    state.swiper_data = res;
    state.swiper_data['params'] = [{
      label: '',
      value: ''
    }];
  },
  [types.Get_Detail_Goods_Add](state, res){
    console.log('Get_Detail_Goods_Add', res);
    state.cart_goods = res;
  },
  [types.Get_Detail_Goods_Number](state, res){
    console.log('Get_Detail_Goods_Number', res);
    state.cart_number = res;
  }
};


export default {
  state,
  actions,
  mutations,
  getters
}
