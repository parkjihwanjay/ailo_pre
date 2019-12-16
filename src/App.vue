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
.modal-parent {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 999999;
}
// @import '@/styles/_common.scss';
// @import '@/styles/_main.scss';
// @import '@/styles/_jquery-ui.scss';
</style>
