import '../css/main.css';
import Vue from 'vue';
import store from './vuex/store';
import Game from './components/Game';

new Vue({
	el: '#application',
	components: {
		Game
	},
	store
});