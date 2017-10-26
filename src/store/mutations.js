/**
 * 根级别的mutation
 * Created by saturn on 2017/10/25.
 */
import * as types from './type';

const mutations = {
  [types.LOGIN]: (state, data) => {
    window.localStorage.setItem('vue_token', data);
    state.vue_token = data;
  },
  [types.LOGOUT]: (state) => {
    window.localStorage.removeItem('vue_token');
    state.vue_token = null
  }
};

export default mutations;
