<template>
	<div class="main-box">
		<dragdrop-main :imgs="imgs" :stickers="stickers" />
		<dragdrop-design
			@clickImg="clickImg"
			@clickSticker="clickSticker"
			:imgs="imgs"
			:stickers="stickers"
		/>
	</div>
</template>

<script>
import DragdropMain from '../../components/DragdropMain.vue';
import DragdropDesign from '../../components/DragdropDesign.vue';
import axios from 'axios';
export default {
	components: {
		DragdropMain,
		DragdropDesign,
	},
	data() {
		return {
			imgs: [],
			stickers: [],
		};
	},
	created() {
		this.initImgs();
		this.initStickers();
	},
	mounted() {
		document.querySelector('body').classList.remove('transparent-header');
		// document.querySelector('body').className = 'transparent-header';
	},
	methods: {
		clickImg(index) {
			this.imgs[index].checked = !this.imgs[index].checked;
		},
		clickSticker(index) {
			this.stickers[index].checked = !this.stickers[index].checked;
		},
		initImgs() {
			for (let i = 0; i < 5; i++) {
				let img = {
					src: `/img/diaryComponent/그룹 ${i + 255}.svg`,
					checked: false,
				};
				this.imgs.push(img);
			}
		},
		initStickers() {
			for (let i = 1; i <= 85; i++) {
				let sticker = {
					src: `/img/sticker/자산 ${i}.svg`,
					checked: false,
				};
				this.stickers.push(sticker);
			}
		},
	},
};
</script>

<style scoped>
.main-box {
	display: flex;
	flex-direction: row;
	margin-bottom: 30px;
}
</style>
