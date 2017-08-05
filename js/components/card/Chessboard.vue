<template>
	<div class="chessboard-wp">
		<div class="chessboard">
			<Card v-for="(card, index) of cards" :key="index" :option="card" v-on:flipped="onFlipped"></Card>
	    </div>
	</div>
</template>


<script>
	import Card from './Card';
	import { mapGetters, mapActions } from 'vuex';
	import {STATUS} from '../../vuex/store/statusEnum';

	export default {
		data () {
			return {
				lastCard: null
			};
		},
		computed: {
			...mapGetters([
				'leftMatched',
				'status',
				'cards',
				'elapsedMs'
			])
		},
		methods: {
			...mapActions([
				'updateStatus',
				'decreaseMatch',
				'flipCards'
			]),
			onFlipped(card) {
				if (this.status === STATUS.READY) {
					this.updateStatus(STATUS.PLAYING);
				}
				if (!this.lastCard) {
					return this.lastCard = card;
					
				}
				if (card !== this.lastCard && card.cardName === this.lastCard.cardName) {
					this.decreaseMatch();
					if (this.leftMatched == 0) {
						var score = this.elapsedMs;
						setTimeout(function () {
							alert('恭喜你过关！你的成绩为' + 
								score + '秒');
						}, 1000);
						
						this.updateStatus(STATUS.PASS);
					}
				} else {
					this.flipCards([this.lastCard, card]);
				}
				
				this.lastCard = null;
			}
		},
		components: {
			Card
		}
	}
</script>


<style scoped>
	.chessboard-wp {
		margin-top: 20px;
		border-radius: 8px;
		background-color: #fff;
		padding: 10px 12px;
	}
	.chessboard{
	    width: 100%;
	    display: flex;
	    flex-wrap: wrap;
	    justify-content: center;
	    align-items: center;
	    align-content: space-around;
	}

	@media screen and (max-width: 450px) {
	    .chessboard-wp {
			margin-top: 14px;
			background-color: #fff;
			padding: 6px;
		}
	}
</style>
