import {shuffle} from '../../lib/shuffle';
import { STATUS } from '../store/statusEnum';

const cardNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];

let timerId;
const statusHandler = {
	PLAYING(commit) {
		timerId = setInterval(function () {
			commit('counting');
		}, 1000) ;
	},
	PASS(commit) {
		clearInterval(timerId);
		commit('updateHightSpeed');
	}
};

export default {
	reset({commit}) {
		commit('reset', {
			leftMatched: 8,
            highestSpeed: localStorage.getItem('highestSpeed') || 9999,
            status: STATUS.READY,
            cards: shuffle(cardNames.concat(cardNames)).
				map(name => ({flipped: false, cardName: name})),
            elapsedMs: 0
		});
	},
	updateStatus({commit}, newStatus) {
		commit('updateStatus', newStatus);
		statusHandler[newStatus](commit);
	},
	decreaseMatch({commit}) {
		commit('decreaseMatch');
	},
	flipCard({commit}, card) {
		commit('flip', card);
	},
	flipCards({commit}, cards) {
		commit('flips', cards);
	},
	counting({commit}) {
		commit('counting');
	}
};