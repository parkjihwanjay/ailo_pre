<template>
	<div class="modal">
		<div class="modal-container preview">
			<div class="preview-body">
				<img :src="previewIMG" alt="미리보기" />
			</div>
			<input type="button" value="닫기" class="big-button close" @click="closeModal()" />
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('SET_LOADING', false);
	},
	computed: {
		previewIMG() {
			return this.$store.state.previewIMG;
		},
	},
	methods: {
		closeModal() {
			this.$store.commit('CLOSE_PREVIEW_MODAL');
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
@import '@/styles/_modal.scss';

.preview {
	width: 1200px;
	height: 882px;
	margin-bottom: 30px;
}

img {
	width: 100%;
	height: 100%;
}

.preview-body {
	width: 1122.52px;
	height: 793.69px;
	margin: 0 auto;
	margin-top: 20px;
	border: 1px solid black;
}

.close {
	display: block;
	margin: 0 auto;
	margin-top: 10px;
}
</style>
