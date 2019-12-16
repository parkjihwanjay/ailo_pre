<template>
	<div>
		<Register />
	</div>
</template>

<script>
import Register from '../components/Register.vue';
export default {
	components: {
		Register,
	},
	mounted() {
		document.querySelector('body').classList.remove('transparent-header');
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style></style>
