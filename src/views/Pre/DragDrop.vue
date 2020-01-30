<template>
	<div class="main-box">
		<dragdrop-main :imgs="imgs" />
		<dragdrop-design @click="clickComponent" :imgs="imgs" />
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
		};
	},
	created() {
		for (let i = 0; i < 5; i++) {
			let img = {
				src: `/img/diaryComponent/그룹 ${i + 255}.svg`,
				checked: false,
			};
			this.imgs.push(img);
		}
	},
	mounted() {
		document.querySelector('body').classList.remove('transparent-header');
		// document.querySelector('body').className = 'transparent-header';
	},
	methods: {
		clickComponent(index) {
			this.imgs[index].checked = !this.imgs[index].checked;
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
