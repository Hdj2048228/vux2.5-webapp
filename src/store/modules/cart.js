/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

const state = {
  goods_list: []
};

const getters = {
  cart_goods_list: state => state.goods_list
};

const actions = {
  /**
   * [购物车]测试数据
   * @param commit
   */
  goods_list({commit}) {
    let data = [{
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
    }, {
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
    }];
    commit(types.Cart_Goods_List, data);
  }
};

const mutations = {
  [types.Cart_Goods_List](state,data){
    state.goods_list = data;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
