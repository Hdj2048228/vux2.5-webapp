/**
 vuex -> actions -> fnName return state.xx
 vue -> created -> this.$store.dispatch('fnName')

 vuex -> mutations{[Name](state,res){state.xx=res.xx}}
 vue -> this.$store.commit('Name',{xx:xx})

 vuex -> getters{ xx : state=state.xx }
 vue -> this.$store.getters.xx
 **/

import * as api from '../axios/';
import * as types from '../type/';

// 数据源
const state = {
  switchFlag: false,
  address: [{
    id: '1234567890',
    isUsed: false,
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
  updateAddress: {},
  detailAddress: {
    id: 0,
    isUsed: false,
    name: '',
    phone: '',
    addrName: ['浙江省', '杭州市', '西湖区'],
  },
  goods_count: 0,
  goods_money: 0,
  goods_list: [{
    "id": 0,
    "title": "",
    "type": "",
    "price": 0,
    "num": 0,
    "desc": "",
    "src": "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
    "url": {
      "path": "/car",
      "replace": false
    }
  }],
  orderFormList: [],
  orderFormInfo: [],
  orderFormNumber: 0,
  orderFormConfirm: 0,
  payment: 0,
  paymentData: 0,
};

/**
 * getters是store的计算属性
 * getters比state方便多组件重用
 */
const getters = {
  common_address: state => state.address,
  common_detail_address: state => state.detailAddress,
  common_goods_list: state => state.goods_list,
  common_goods_count: state => state.goods_count,
  common_goods_money: state => state.goods_money,
  common_order_FormList: state => state.orderFormList,
  common_order_FormInfo: state => state.orderFormInfo,
  common_order_FormNumber: state => state.orderFormNumber,
  common_order_FormData: state => state.paymentData
};

// 异步获取数据：通过commit传值
const actions = {
  /**
   * 获取地址列表
   * @param commit
   */
  getAddress({commit}){
    api.getAddress(res => {
      commit(types.User_Get_Address, res);
    });
  },

  /**
   * 修改地址
   * @param commit
   * @param params
   */
  setAddress({commit}, params){
    api.setAddress(params, result => {
      console.log('setAddress', result);
    });
  },

  /**
   * 选择地址
   * @param commit
   * @param id
   */
  selectAddress({commit}, id){
    api.selectAddress(id, result => {
      console.log('selectAddress', result);
    });
  },

  /**
   * 更新地址
   * @param commit
   * @param data
   */
  updateAddress({commit}, data){
    api.updateAddress(data, result => {
      commit(types.User_Update_Address, result);
      console.log('updateAddress', result);
    });
  },

  /**
   * 获取详细地址
   * @param commit
   * @param id
   */
  detailAddress({commit}, id){
    api.detailAddress(id, result => {
      commit(types.User_Detail_Address, result);
      console.log('detailAddress', result);
    });
  },

  /**
   * 删除收货地址
   * @param commit
   * @param id
   */
  deleteAddress({commit}, id){
    api.deleteAddress(id, result => {
      console.log('deleteAddress', result);
    });
  },

  /**
   * 获取购物清单
   * @param commit
   */
  cartGoodsList({commit}){
    api.cartGoodsList(payload => {
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

  /**
   * 购物车总额
   * @param commit
   */
  cartGoodsMoney({commit}){
    api.cartGoodsList(payload => {
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
   * @param dispatch
   * @param id
   */
  goodsAddCart({commit, dispatch}, id){
    api.goodsAdd(id, payload => {
      commit(types.Comm_Goods_Add, payload);

      /*这就高级了：新增完成再请求总数*/
      dispatch('goodsGetNumber', id);
    })
  },

  /**
   * 购物车 增加商品
   * @param commit
   * @param dispatch
   * @param id
   */
  goodsAdd({commit, dispatch}, id){
    api.goodsAdd(id, payload => {
      commit(types.Comm_Goods_Add, payload);

      dispatch('cartGoodsMoney');  // 计算总额
    })
  },

  /**
   * 减少商品
   * @param commit
   * @param dispatch
   * @param item
   */
  goodsRemove({commit, dispatch}, item){
    api.goodsRemove(item, payload => {
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
    api.goodsGetNumber(id, payload => {
      commit(types.Comm_Goods_Count, payload);
    });
  },

  /**
   * 保存订单&&返回结果
   * @param commit
   * @param data
   */
  orderFormSave({commit}, data){
    api.orderFormSave(data, payload => {
      commit(types.Order_Form_Number, payload.orderNum);
    });
  },

  /**
   * 获取订单列表
   * @param commit
   * @param data
   */
  orderFormList({commit}, data){
    api.orderFormList(data, payload => {
      commit(types.Books_Get_List, payload);
    });
  },

  /**
   * 获取订单详情
   * @param commit
   * @param data
   */
  orderFormInfo({commit}, data){
    api.orderFormInfo(data, payload => {
      commit(types.Book_Get_Info, payload);
    });
  },

  /**
   * 删除订单
   * @param commit
   * @param data
   */
  orderFormDelete({commit}, data){
    api.orderFormDelete(data, payload => {
      console.log('orderFormDelete', payload);
    });
  },

  /**
   * 再次购买
   * @param commit
   * @param data
   */
  orderFormReBuy({commit}, data){
    api.orderFormReBuy(data, payload => {
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

  /**
   * 支付
   */
  onPayment({commit}, data){
    return new Promise((resolve, reject) => {
      api.onPayment(data, payload => {
        commit(types.Conn_Payment, payload);//?支付回调数据
        resolve(payload);
      });
    });
  },

  /**
   * 确认收货
   */
  orderFormConfirm({commit}, data){
    api.orderFormConfirm(data, payload => {
      commit(types.Order_Form_Confirm,payload);
    });
  }
};

// 同步修改数据：通过state赋值
const mutations = {
  /**
   * 设置获取地址
   * @param state
   * @param payload
   */
    [types.User_Get_Address](state, payload){
    state.address = payload;
  },
  /**
   * 设置更新地址
   * @param state
   * @param payload
   */
    [types.User_Update_Address](state, payload){
    state.updateAddress = payload;
  },
  /**
   * 设置详细地址
   * @param state
   * @param payload
   */
    [types.User_Detail_Address](state, payload){
    state.detailAddress = payload;
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
  },

  /**
   * 保存订单&&回调数据
   * @param state
   * @param payload
   */
    [types.Order_Form_Number](state, payload){
    state.orderFormNumber = payload;
  },

  /**
   * 获取订单列表
   */
    [types.Books_Get_List](state, payload){
    state.orderFormList = payload;
  },

  /**
   * 获取订单详情
   * @param state
   * @param payload
   */
    [types.Book_Get_Info](state, payload){
    state.orderFormInfo = payload;
    console.log('获取订单详情', 'Book_Get_Info', payload);
  },

  /**
   * 支付
   * @param state
   * @param payload
   */
    [types.Conn_Payment](state, payload){
    state.paymentData = payload;
  },

  /**
   * 确认收货
   * @param state
   * @param payload
   */
  [types.Order_Form_Confirm](state, payload){
    state.orderFormConfirm = payload;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
}
