<template>
    <div class="container" v-on:click="flip">
        <div class="card" v-bind:class="{ flipped: option.flipped }">
            <img class="front" v-if="option.cardName === '8-ball'" src="../../../img/8-ball.png"/>
            <img class="front" v-if="option.cardName === 'baked-potato'" src="../../../img/baked-potato.png"/>
            <img class="front" v-if="option.cardName === 'dinosaur'" src="../../../img/dinosaur.png"/>
            <img class="front" v-if="option.cardName === 'kronos'" src="../../../img/kronos.png"/>
            <img class="front" v-if="option.cardName === 'rocket'" src="../../../img/rocket.png"/>
            <img class="front" v-if="option.cardName === 'skinny-unicorn'" src="../../../img/skinny-unicorn.png"/>
            <img class="front" v-if="option.cardName === 'that-guy'" src="../../../img/that-guy.png"/>
            <img class="front" v-if="option.cardName === 'zeppelin'" src="../../../img/zeppelin.png"/>

            <img class="back" src="../../../img/back.png"/>
        </div>
    </div>
</template>


<script>
	import { mapActions } from 'vuex';

	export default {

		props: {
			option: {
				type: Object,
				default() {
					return {
						flipped: false,
						cardName: ''
					};
				}
			}
		},
		methods: {
			...mapActions([
				'flipCard'
			]),
			flip() {
				if(this.option.flipped){
                	return;
            	}
				this.flipCard(this.option);
				this.$emit('flipped', this.option);
			}
		}
	}
</script>


<style scoped>
	.container{
	    width: 25%;
	    cursor: pointer;
	    position: relative;
	    perspective: 800px;
	}
	.card {
		padding-bottom: 121.21%;
	    width: 100%;
	    transition: transform 1s;
	    transform-style: preserve-3d;
	}

	.card.flipped {
	    transform: rotateY( 180deg );
	}

	.card img {
	    display: block;
	    height: 100%;
	    width: 100%;
	    position: absolute;
	    backface-visibility: hidden;
	}

	.card .back {
	    background: blue;
	    transform: rotateY( 0deg );
	}

	.card .front {
	    background: blue;
	    transform: rotateY( 180deg );
	}

	@media screen and (max-width: 450px) {
	    .container{
	    	padding-left: 1px;
	    	padding-right: 1px;
	    }
	}
</style>