import Vue from 'vue';
import Vuex from 'vuex';
import getters from '../getters/';
import mutations from '../mutations/';
import actions from '../actions/';

Vue.use(Vuex);

const state = {
    leftMatched: 0,
    highestSpeed: 0,
    status: '',
    cards: [],
    elapsedMs: 0
};
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});