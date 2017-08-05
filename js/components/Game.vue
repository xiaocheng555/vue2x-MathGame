<template>
    <div class="game-panel">
       <!-- 组装上、中、下三个部分组件 -->
        <Dashboard></Dashboard>
        <Chessboard></Chessboard>
        <PlayStatus></PlayStatus>
    </div>
</template>


<script>

    import Dashboard from './dashboard/Dashboard';
    import Chessboard from './card/Chessboard';
    import PlayStatus from './footer/PlayStatus';
    import { mapActions } from 'vuex';

	export default {
	    components: {
            Dashboard,
            Chessboard,
            PlayStatus
        },
        methods: {
            ...mapActions([
                'reset'
            ])
        },
        created() {
            this.reset();
            alert('翻动卡片，使两两卡片匹配成功！')
        }
	}
</script>


<style scoped>
.game-panel{
    width: 450px;
    height: 670px;
    border: 4px solid #BDBDBD;
    border-radius: 2px;
    background-color: #faf8ef;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 450px) {
    .game-panel{
        width: 100%;
        height: auto;
        justify-content: space-around;
    }
}
</style>