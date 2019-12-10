<template>
	<div>
		<Main @showModal="ModalTrue()" />
		<base-modal @closeModal="ModalFalse()" v-show="showModal"></base-modal>
	</div>
</template>

<script>
import Main from '../components/Main.vue';
import BaseModal from '../components/modal/BaseModal.vue';
export default {
	data() {
		return {
			showModal: false,
		};
	},
	mounted() {
		document.querySelector('body').className = 'transparent-header';
	},
	components: {
		Main,
		BaseModal,
	},
	methods: {
		ModalTrue() {
			this.showModal = true;
		},
		ModalFalse() {
			this.showModal = false;
		},
	},
};
</script>

<style></style>
