<template>
	<div>
		<customer-home></customer-home>
	</div>
</template>

<script>
import CustomerHome from '../components/Customer/CustomerHome.vue';
export default {
	components: {
		CustomerHome,
	},
	mounted() {
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style></style>
