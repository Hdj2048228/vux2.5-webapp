/**
 vuex -> actions -> fnName return state.xx
 vue -> created -> this.$store.dispatch('fnName')

 vuex -> mutations{[Name](state,res){state.xx=res.xx}}
 vue -> this.$store.commit('Name',{xx:xx})

 vuex -> getters{ xx : state=state.xx }
 vue -> this.$store.getters.xx
 **/

import * as axios from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  menus: {
    menu1: '购物车',
    menu2: '订单详情'
  },
  address: [{
    name: '张三',
    phone: '13800138000',
    id: '1234567890',
    addrName: '北京/北京市/昌平区'
  }],
  setAddress: {
    name: '张三',
    phone: '13800138000',
    addressValue: ['浙江省', '杭州市', '西湖区'],
    addressInfo: '文一西路522号1幢2单元501'
  }
};

// 异步获取数据：通过commit传值
const actions = {
  getAddress({commit}){
    axios.getAddress(res => {
      commit(types.User_Get_Address, res);
    });
  },
  setAddress({commit,state},aaa){

    console.log(1111,aaa);

    state.setAddress.addressValue = state.setAddress.addressValue.join('/');
    axios.setAddress(state.setAddress,res => {
      console.log(2222,res);
    });
  }
};

// 同步修改数据：通过state赋值
const mutations = {
  [types.User_Get_Address](state, res){
    state.address = res;
  }
};

/**
 * getters是store的计算属性
 * getters比state方便多组件重用
 */
const getters = {
  common_menus: state => state.menus,
  common_address: state => state.address
};

export default {
  state,
  actions,
  mutations,
  getters
}
