<template>
	<div>
		<Login />
	</div>
</template>

<script>
import Login from '../components/Login.vue';
export default {
	mounted() {
		document.querySelector('body').className = 'transparent-header';
		this.$store.commit('SET_LOADING', false);
	},
	components: {
		Login,
	},
};
</script>

<style scoped>
.popup-window {
	margin-top: -79.5px;
}
</style>
