<template>
	<my-page></my-page>
</template>

<script>
import MyPage from '../components/MyPage.vue';
export default {
	components: {
		MyPage,
	},
	mounted() {
		document.querySelector('body').classList.remove('transparent-header');
	},
};
</script>

<style></style>
