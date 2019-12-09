<template>
	<div>
		<Main />
	</div>
</template>

<script>
import Main from '../components/Main.vue';
export default {
	mounted() {
		document.querySelector('body').className = 'transparent-header';
	},
	components: {
		Main,
	},
};
</script>

<style></style>
