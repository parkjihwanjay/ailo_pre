<template>
	<div>
		<order-page></order-page>
	</div>
</template>

<script>
import OrderPage from '../components/OrderPage.vue';
export default {
	components: {
		OrderPage,
	},
	mounted() {
		document.querySelector('body').classList.remove('transparent-header');
		this.$store.commit('SET_LOADING', false);
	},
};
</script>

<style></style>
