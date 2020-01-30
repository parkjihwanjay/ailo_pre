<template>
	<div class="dragdrop-design-tool">
		<div class="dragdrop-design-tool__buttons">
			<div
				:class="{ button_click: design }"
				class="dragdrop-design-tool__button"
				@click="clickDesignBtn('design')"
			>
				구성
			</div>
			<div
				:class="{ button_click: sticker }"
				class="dragdrop-design-tool__button"
				@click="clickDesignBtn('sticker')"
			>
				스티커
			</div>
		</div>
		<div class="dragdrop-design-tool__design" v-show="design">
			<div class="dragdrop-design-tool__design__theme " v-for="(img, index) in imgs" :key="index">
				<img :src="img.src" alt="속지 요소" :ref="`img${index}`" @click="clickImg(index)" />
			</div>
		</div>
		<div class="dragdrop-design-tool__sticker" v-show="sticker">
			<div class="sticker-list">
				<img
					:src="sticker.src"
					alt="스티커"
					v-for="(sticker, index) in stickers"
					:key="index"
					:ref="`sticker${index}`"
					@click="clickSticker(index)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DragdropDesign',
	data() {
		return {
			design: true,
			sticker: false,
		};
	},
	props: ['imgs', 'stickers'],
	// computed: {
	// 	imgList() {
	// 		return this.imgs.slice();
	// 	},
	// },
	methods: {
		clickDesignBtn(value) {
			if (value === 'design') {
				this.design = true;
				this.sticker = false;
			} else {
				this.design = false;
				this.sticker = true;
			}
		},
		clickImg(index) {
			// this.imgList[index].checked = !this.imgList[index].checked;
			this.$refs[`img${index}`][0].classList.toggle('click-activate');
			this.$emit('clickImg', index);
			// const classList = this.$refs[`img${index}`][0].classList;
		},
		clickSticker(index) {
			this.$refs[`sticker${index}`][0].classList.toggle('click-activate');
			this.$emit('clickSticker', index);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
h2 {
	font-size: $l-size;
	text-align: center;
}
.dragdrop-design-tool {
	width: 280px;
	height: 920px;
	object-fit: contain;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-white;
	overflow: scroll;
}
.dragdrop-design-tool__buttons {
	display: flex;
	justify-content: center;
}
.dragdrop-design-tool__button {
	padding: 1.6rem 0;
	width: 50%;
	color: $off-black;
	border-bottom: 1px solid #ececec;
	text-align: center;
	cursor: pointer;
}
.button_click {
	border-bottom: 1px solid $off-purple;
	color: $off-purple;
}
.dragdrop-design-tool__design {
	margin-top: 2rem;
	display: grid;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	grid-template-columns: 100%;
}

.dragdrop-design-tool__design__theme {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.dragdrop-design-tool__design__theme__templates {
	width: 120px;
	height: 192px;
	object-fit: contain;
	background-color: #ececec;
}
.click-activate {
	border: 1px solid greenyellow;
}
.sticker-list {
	width: 200px;
	margin: 0 auto;
}
img {
	margin-bottom: 50px;
}
</style>
