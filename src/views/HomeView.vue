<template>
	<div id="main-parent">
		<Main @showModal="showModal" />
		<base-modal @closeModal="closeModal" v-if="baseModal"></base-modal>
		<!-- <Popup /> -->
	</div>
</template>

<script>
import Main from '../components/Main.vue';
import BaseModal from '../components/modal/BaseModal.vue';
// import Popup from '../components/PopUp.vue';
export default {
	data() {
		return {
			baseModal: false,
		};
	},
	mounted() {
		document.querySelector('body').className = 'transparent-header';
	},
	components: {
		Main,
		BaseModal,
		// Popup,
	},
	methods: {
		showModal() {
			this.baseModal = true;
		},
		closeModal() {
			this.baseModal = false;
		},
	},
};
</script>

<style scoped>
#main-parent {
	width: 100%;
	height: 100%;
}
</style>
