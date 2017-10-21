/**
 * Created by saturn on 2017/8/8.
 */
import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  detail_swiper: {
    title:'goods-name',
    desc:'goods-desc',
    info:'product-info',
    pics:[{
      url: 'https://static.vux.li/demo/1.jpg'
    }]
  },
  detail_params: [{
    label: '宽度：',
    value: '20cm'
  }, {
    label: '高度：',
    value: '20cm'
  }, {
    label: '颜色：',
    value: '白色'
  }, {
    label: '型号：',
    value: 'RY119'
  }]
};

// 异步获取数据：通过commit传值
const actions = {
  getGoodsDetail({commit},id) {
    axios.getGoodsDetail(id,res => {
      commit(types.Get_Goods_Detail, res);
    })
  }
};

// 同步修改数据：通过state赋值
const mutations = {
  [types.Get_Goods_Detail](state, res){
    state.detail_swiper = res;
  }
};

/**
 * getters是store的计算属性
 * getters比state方便多组件重用
 */
const getters = {
  detail_swiper: state => state.detail_swiper,
  detail_params: state => state.detail_params
};

export default {
  state,
  actions,
  mutations,
  getters
}
