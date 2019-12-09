<template>
	<div>
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
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
		Header,
		Footer,
	},
};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';
// html {
// 	font-size: 62.5%;
// }
// * {
// 	margin: 0;
// 	padding: 0;
// }
// body {
// 	font-size: $s-size;
// }
// #app {
// 	width: 1440px;
// 	// height: 1527px;
// }
</style>
