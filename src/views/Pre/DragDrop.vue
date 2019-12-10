<template>
	<div class="main-box">
		<dragdrop-main />
		<dragdrop-design />
	</div>
</template>

<script>
import DragdropMain from '../../components/DragdropMain.vue';
import DragdropDesign from '../../components/DragdropDesign.vue';
import axios from 'axios';
export default {
	components: {
		DragdropMain,
		DragdropDesign,
	},
	mounted() {
		console.log(this.$route);
		document.querySelector('body').classList.remove('transparent-header');
		// document.querySelector('body').className = 'transparent-header';
	},
};
</script>

<style scoped>
.main-box {
	display: flex;
	flex-direction: row;
	margin-bottom: 30px;
}
</style>
