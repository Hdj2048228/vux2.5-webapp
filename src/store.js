import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// import mutations from './store/testMutation';
// import getters from './store/testGetter';
// import actions from './store/testAction';

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