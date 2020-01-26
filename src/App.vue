<template>
	<div id="app">
		<Header />
		<router-view></router-view>
		<Footer />
		<base-spinner></base-spinner>
		<div class="modal-parent">
			<transition name="fade">
				<base-modal v-if="baseModalChecked"></base-modal>
				<not-ready v-if="NotReadyModalChecked"></not-ready>
				<pre-view v-if="PreViewModalChecked"></pre-view>
			</transition>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/FooTer.vue';
import BaseSpinner from '../src/components/BaseSpinenr.vue';

import BaseModal from './components/modal/BaseModal.vue';
import NotReady from './components/modal/NotReady.vue';
import PreView from './components/modal/PreView.vue';

export default {
	name: 'App',

	components: {
		BaseSpinner,
		Header,
		Footer,
		BaseModal,
		NotReady,
		PreView,
	},
	computed: {
		baseModalChecked() {
			return this.$store.state.baseModalChecked;
		},
		NotReadyModalChecked() {
			return this.$store.state.NotReadyModalChecked;
		},
		PreViewModalChecked() {
			return this.$store.state.PreViewModalChecked;
		},
	},
};
</script>
<style scoped>
/* // @import '@/styles/_common.scss';
// @import '@/styles/_main.scss';
// @import '@/styles/_jquery-ui.scss'; */
#app {
	width: 100%;
	height: 100%;
}
.modal-parent {
	width: 100%;
	height: 100%;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
