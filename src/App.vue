<template>
	<div>
		<Header />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/FooTer.vue';
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
// @import '@/styles/_main.scss';
// @import '@/styles/_common.scss';
</style>
