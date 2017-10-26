/**
 * Created by saturn on 2017/8/8.
 */

import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  focus_list: [{
    title: '测试标题',
    url: 'javascript:;',
    img: 'https://static.vux.li/demo/1.jpg'
  }],
  marquee_list: [
    'hello marquee11',
    'hello marquee22'
  ],
  goods_list: [{
    title: '测试标题',
    desc: 'description',
    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
    params:[],
    url: {
      path: '/car',
      replace: false
    }
  }]
};

const getters = {
  focus_list: state => state.focus_list,
  marquee_list: state => state.marquee_list,
  goods_list: state => state.goods_list
};

const actions = {
  home_focus({commit}) {
    axios.getHomeFocus(res => {
      commit(types.Home_Focus_List, res);
    })
  },
  home_marquee({commit}){
    axios.getHomeMarquee().then(res => {
      commit(types.Home_Marquee_List, res);
    });
  },
  home_goods({commit}){
    axios.getHomeGoods(res => {
      commit(types.Home_Goods_List, res);
    });
  }
};

const mutations = {
  [types.Home_Focus_List](state, res){
    state.focus_list = res;
  },
  [types.Home_Marquee_List](state, res){
    state.marquee_list = res;
  },
  [types.Home_Goods_List](state, res){
    state.goods_list = res;
    state.goods_list['params'] = [{
      label: '',
      value: ''
    }];
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
