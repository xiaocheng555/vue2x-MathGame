export default {
	reset(st, newState) {
		st.leftMatched = newState.leftMatched;
		st.highestSpeed = newState.highestSpeed;
		st.status = newState.status;
		st.cards = newState.cards;
		st.elapsedMs = newState.elapsedMs;
	},
	updateStatus(st, newStatus) {
		st.status = newStatus;
	},
	decreaseMatch(st) {
		st.leftMatched--;
	},
	flip(st, card)  {
		let c = st.cards.find(cc => cc === card);
		c.flipped = !c.flipped;
	},
	flips(st, cards)  {
		setTimeout(function () {
			st.cards.filter(cc => cards.indexOf(cc) >= 0).
			forEach(c => c.flipped = !c.flipped);
		},1000);
	},
	counting(st) {
		st.elapsedMs++;
	},
	updateHightSpeed(st) {
		if (!localStorage.getItem('highestSpeed')) {
			localStorage.setItem('highestSpeed', st.elapsedMs);
			st.highestSpeed = st.elapsedMs;
		}
		if (st.elapsedMs < localStorage.getItem('highestSpeed')) {
			localStorage.setItem('highestSpeed', st.elapsedMs);
			st.highestSpeed = st.elapsedMs;
		}
		
	}
};