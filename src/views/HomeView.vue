<template>
	<div>
		<Main />
	</div>
</template>

<script>
import Main from '../components/Main.vue';

// import Popup from '../components/PopUp.vue';
export default {
	data() {
		return {
			baseModal: false,
		};
	},
	mounted() {
		document.querySelector('body').className = 'transparent-header';
		this.$store.commit('SET_LOADING', false);
	},
	components: {
		Main,
		// Popup,
	},
	methods: {
		// showModal() {
		// 	this.baseModal = true;
		// },
		// closeModal() {
		// 	this.baseModal = false;
		// },
	},
};
</script>

<style scoped>
/* #main-parent {
	width: 100%;
	height: 100%;
} */
</style>
