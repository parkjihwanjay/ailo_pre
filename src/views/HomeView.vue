<template>
	<div>
		<MainBody />
	</div>
</template>

<script>
import MainBody from '../components/MainBody.vue';
export default {
	mounted() {
		document.querySelector('body').className = 'transparent-header';
	},
	components: {
		MainBody,
	},
};
</script>

<style></style>
