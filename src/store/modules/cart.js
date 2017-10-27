/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

const state = {
  goods_list: [{
    "title": "测试标题",
    "type": "RY119",
    "price": 50,
    "num": 1,
    "desc": "description",
    "src": "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
    "url": {
      "path": "/car",
      "replace": false
    }
  }]
};

const getters = {
  cart_goods_list: state => state.goods_list
};

const actions = {
  /**
   * 购物车清单
   * @param commit
   */
  cart_goods_list({commit}){
    axios.cartGoodsList(payload => {
      commit(types.Cart_Goods_List, payload);
    });
  }
};

const mutations = {
  [types.Cart_Goods_List](state, payload){
    state.goods_list = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
