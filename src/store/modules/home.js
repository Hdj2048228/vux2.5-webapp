/**
 * Created by saturn on 2017/8/8.
 */
import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  swiper_list: [{
    title: '测试标题',
    url: 'javascript:;',
    img: 'https://static.vux.li/demo/1.jpg'
  }],
  swiper_index: 0,
  marquee_list: ['hello marquee'],
  panel_type: '1',
  panel_list: [{
    title: '测试标题',
    desc: 'description',
    src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
    url: {
      path: '/car',
      replace: false
    }
  }]
};

// 异步获取数据：通过commit传值
const actions = {
  getHomeFocus({commit}) {
    axios.getHomeFocus(res => {
      commit(types.Home_Get_Focus, res);
    })
  },
  getHomeMarquee({commit}){
    axios.getHomeMarquee().then(res => {
      commit(types.Home_Get_Marquee, res);
    });
  },
  getHomeList({commit}){
    axios.getHomeList(res => {
      commit(types.Home_Get_List, res);
    });
  }
};

// 同步修改数据：通过state赋值
const mutations = {
  [types.Home_Get_Focus](state, res){
    state.swiper_list = res;
  },
  [types.Home_Get_Marquee](state, res){
    state.marquee_list = res;
  },
  [types.Home_Get_List](state, res){
    state.panel_list = res;
  }
};

/**
 * getters是store的计算属性
 * getters比state方便多组件重用
 */
const getters = {
  swiper_list: state => state.swiper_list,
  marquee_list: state => state.marquee_list,
  panel_list: state => state.panel_list,
  panel_type: state => state.panel_type
};

export default {
  state,
  actions,
  mutations,
  getters
}
