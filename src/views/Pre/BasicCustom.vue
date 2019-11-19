<template>
	<div id="basic">
		<base-modal class="base-modal"></base-modal>
	</div>
</template>

<script>
import BaseModal from '../../components/modal/BaseModal.vue';
export default {
	name: 'BasicCustom',
	components: {
		BaseModal,
	},
};
</script>

<style scoped>
#basic {
	/* width: 1440px;
	height: 1527px; */
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
}
/* .base-modal {
	margin: 0 100px;
} */
</style>
