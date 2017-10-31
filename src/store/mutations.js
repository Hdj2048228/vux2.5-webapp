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
  },
  MenusClose (state, menus) {
    //console.log('onMenusClose', state, menus);
    switch (menus) {
      case "menu1":
        state.menusFlag = false;
        app.$router.push({
          name: 'home'
        });
        break;
      case "menu2":
        state.menusFlag = false;
        app.$router.push({
          name: 'cart'
        });
        break;
      case "menu3":
        state.menusFlag = false;
        app.$router.push({
          name: 'user'
        });
        break;
      case "menu4":
        state.menusFlag = false;
        app.$router.push({
          name: 'books',
          query: {
            act: 'all'
          }
        });
        break;
      case "menu5":
        state.menusFlag = false;
        app.$router.push({
          name: 'location'
        });
        break;
    }
  }
};

export default mutations;
