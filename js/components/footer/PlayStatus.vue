<template>
	<div class="status-footer">
		<span v-if="status === 'READY'">Ready</span>
        <span v-if="status === 'PLAYING'">Playing</span>
        <a v-if="status === 'PASS'" v-on:click.prevent.stop="reset" href>Play again</a>
        <span class="elapsed"><b>Time： </b>{{ elapsedMs }} s</span>
	</div>
</template>


<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		computed: {
			...mapGetters([
				'status',
				'elapsedMs'
			])
		},
		methods: {
			...mapActions([
				'reset'
			])
		}
	}
</script>


<style scoped>
	.status-footer{
	    position: relative;
	    margin-top: 10px;
	    width: 100%;
	    height: 20px;
	    line-height: 20px;
	    text-align: center;
	    font-size: 18px;
	    font-weight: bold;
	}
	a{
	    text-decoration: none;
	}
	.elapsed{
	    position: absolute;
	    right: 10px;
	    font-size: 15px;
	    font-weight: normal;
	}
</style>