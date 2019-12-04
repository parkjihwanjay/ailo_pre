<template>
	<div id="app">
		<base-spinner margin="200px" v-show="isLoading" />
		<router-view />
	</div>
</template>

<script>
import BaseSpinner from '../src/components/BaseSpinenr.vue';

export default {
	name: 'App',
	computed: {
		isLoading() {
			return this.$store.state.isLoading;
		},
	},
	components: {
		BaseSpinner,
	},
};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';
html {
	font-size: 62.5%;
}
* {
	margin: 0;
	padding: 0;
}
body {
	font-size: $s-size;
}
#app {
	width: 1440px;
	// height: 1527px;
}
</style>
