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
  switchFlag: false,
  address: [{
    id: '1234567890',
    isUsed: 1,
    name: '张三',
    phone: '13800138000',
    addrName: '北京/北京市/昌平区'
  }],
  setAddress: {
    name: '张三',
    phone: '13800138000',
    addressValue: ['浙江省', '杭州市', '西湖区'],
    addressInfo: '文一西路522号'
  },
  goods_count: 0,
  goods_money: 0,
  goods_list: [{
    "id": "123456",
    "title": "烟雾传感器",
    "type": "RY119",
    "price": 0,
    "num": 0,
    "desc": "description",
    "src": "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
    "url": {
      "path": "/car",
      "replace": false
    }
  }]
};

/**
 * getters是store的计算属性
 * getters比state方便多组件重用
 */
const getters = {
  common_menus: state => state.menus,
  common_address: state => state.address,
  common_goods_list: state => state.goods_list,
  common_goods_count: state => state.goods_count,
  common_goods_money: state => state.goods_money
};

// 异步获取数据：通过commit传值
const actions = {
  /**
   * 获取地址
   * @param commit
   */
  getAddress({commit}){
    axios.getAddress(res => {
      commit(types.User_Get_Address, res);
    });
  },

  /**
   * 修改地址
   * @param commit
   * @param state
   * @param params
   */
  setAddress({commit, state}, params){
    axios.setAddress(params, res => {
      console.log(2222, res);
    });
  },

  /**
   * 获取购物清单
   * @param commit
   */
  cartGoodsList({commit, dispatch}){
    axios.cartGoodsList(payload => {
      let money = 0;
      payload.forEach(item => {
        if (item.price >= 1 && item.num >= 1) {
          money += item.price * item.num;
        }
      });
      commit(types.Conn_Goods_Money, money);
      commit(types.Conn_Goods_List, payload);
    });
  },
  cartGoodsMoney({commit}){
    axios.cartGoodsList(payload => {
      let money = 0;
      payload.forEach(item => {
        if (item.price >= 1 && item.num >= 1) {
          money += item.price * item.num;
        }
      });
      commit(types.Conn_Goods_Money, money);
    });
  },

  /**
   * 详情页 增加商品
   * @param commit
   * @param state
   * @param dispatch
   * @param id
   */
  goodsAddCart({commit, state, dispatch}, id){
    axios.goodsAdd(id, payload => {
      commit(types.Comm_Goods_Add, payload);

      /*这就高级了：新增完成再请求总数*/
      dispatch('goodsGetNumber', id);
    })
  },

  /**
   * 购物车 增加商品
   * @param commit
   * @param state
   * @param dispatch
   * @param id
   */
  goodsAdd({commit, state, dispatch}, id){
    axios.goodsAdd(id, payload => {
      commit(types.Comm_Goods_Add, payload);

      dispatch('cartGoodsMoney');  // 计算总额
    })
  },

  /**
   * 减少商品
   * @param commit
   * @param item
   */
  goodsRemove({commit, state, dispatch}, item){
    axios.goodsRemove(item, payload => {
      commit(types.Comm_Goods_Remove, payload);

      dispatch('cartGoodsMoney');  // 计算总额

    });
  },

  /**
   * 购物车总数
   * @param commit
   * @param id
   */
  goodsGetNumber({commit}, id){
    axios.goodsGetNumber(id, payload => {
      commit(types.Comm_Goods_Count, payload);
    })
  }
};

// 同步修改数据：通过state赋值
const mutations = {
  /**
   * 设置地址
   * @param state
   * @param res
   */
    [types.User_Get_Address](state, res){
    state.address = res;
  },

  /**
   * 设置商品列表
   * @param state
   * @param payload
   */
    [types.Conn_Goods_List](state, payload){
    state.goods_list = payload;
  },

  /**
   * 设置购物车总金额
   * @param state
   * @param payload
   */
    [types.Conn_Goods_Money](state, payload){
    state.goods_money = payload;
  },

  /**
   * 设置新增商品
   * @param state
   * @param payload
   */
    [types.Comm_Goods_Add](state, payload){
  },

  /**
   * 设置减少商品
   * @param state
   * @param payload
   */
    [types.Comm_Goods_Remove](state, payload){
  },

  /**
   * 设置商品总数
   * @param state
   * @param payload
   */
    [types.Comm_Goods_Count](state, payload){
    state.goods_count = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
