<template>
	<div class="modal">
		<!-- <div class="popup-close"></div> -->
		<div class="modal-container not-ready-modal">
			<div class="modal-inner">
				<img src="/img/common/popup-warning.png" alt="Warning" />
				<h2>준비중입니다!</h2>
				<p>빠른 시일 내에 찾아뵙겠습니다.</p>
				<input type="button" value="닫기" class="big-button mt-50" @click="closeModal()" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$store.commit('CLOSE_NOT_READY_MODAL');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
@import '@/styles/_modal.scss';
.not-ready-modal {
	min-width: 470px;
	max-width: 1240px;
	max-height: 90%;
	overflow-y: auto;
}
.modal-inner {
	text-align: center;
	padding: 64.5px 50px;
}
.mt-50 {
	margin-top: 50px;
}
</style>
