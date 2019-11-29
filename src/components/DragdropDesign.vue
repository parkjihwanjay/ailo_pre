<template>
	<div class="dragdrop-design-tool">
		<div class="dragdrop-design-tool__buttons">
			<div
				:class="{ button_click: design }"
				class="dragdrop-design-tool__button"
				@click="clickDesignBtn('design')"
			>
				디자인
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
			<h2>테마</h2>
			<div class="dragdrop-design-tool__design__theme" v-for="(num, index) in 5" :key="index">
				<div class="dragdrop-design-tool__design__theme__templates"></div>
				<p>테마 {{ num }}</p>
			</div>
		</div>
		<div class="dragdrop-design-tool__sticker" v-show="sticker">
			<h2>스티커</h2>
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
	width: 393px;
	height: 860px;
	object-fit: contain;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-white;
}
.dragdrop-design-tool__buttons {
	display: flex;
	justify-content: center;
}
.dragdrop-design-tool__button {
	padding: 1.6rem 0;
	width: 50%;
	color: $off-gray;
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
	grid-template-columns: 50% 50%;
}

.dragdrop-design-tool__design__theme {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.dragdrop-design-tool__design__theme__templates {
	width: 146px;
	height: 192px;
	object-fit: contain;
	background-color: #ececec;
}
</style>
