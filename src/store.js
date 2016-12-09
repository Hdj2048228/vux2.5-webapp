import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import mutations from './store/mutations/testMutation';
import getters from './store/getters/testGetter';
import actions from './store/actions/testAction';

const state = {
    count:10
};

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});