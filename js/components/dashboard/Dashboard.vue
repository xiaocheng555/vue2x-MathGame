<template>	
	<div class="status-bar">
		<Logo class="logo"></Logo>
		<MatchInfo class="match-info"></MatchInfo>
		<Score class="score"></Score>
	</div>
</template>


<script>
	import Logo from './Logo';
	import MatchInfo from './MatchInfo';
	import Score from './Score.vue';

	export default {
		components: {
			Logo,
			MatchInfo,
			Score
		}
	}

</script>


<style scoped>
	.status-bar{
		//margin: 0 -0.7%;
	    width: 100%;
	    height: 100px;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	}
	.logo, .match-info, .score {
		margin: 0 1%;
	}
</style>