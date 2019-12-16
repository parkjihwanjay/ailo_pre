<template>
	<div>
		<Header />
		<router-view></router-view>
		<Footer />
		<base-spinner></base-spinner>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/FooTer.vue';
import BaseSpinner from '../src/components/BaseSpinenr.vue';

export default {
	name: 'App',

	components: {
		BaseSpinner,
		Header,
		Footer,
	},
};
</script>
<style lang="scss">
// @import '@/styles/_common.scss';
// @import '@/styles/_main.scss';
// @import '@/styles/_jquery-ui.scss';
</style>
