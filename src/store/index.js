import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import mutations from './test/mutation';
// import getters from './test/getter';
// import actions from './test/action';

const state = {
    count:1
};
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
};

export default new Vuex.Store({
    state,
    mutations
});
// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions
// });