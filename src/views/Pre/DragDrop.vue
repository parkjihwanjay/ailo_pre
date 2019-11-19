<template>
	<div class="diary-write">
		<nav-bar />
		<div class="main-box">
			<dragdrop-main />
			<dragdrop-design />
		</div>
		<foo-ter></foo-ter>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DragdropMain from '@/components/DragdropMain.vue';
import DragdropDesign from '@/components/DragdropDesign.vue';
import FooTer from '@/components/FooTer.vue';

export default {
	components: {
		NavBar,
		DragdropMain,
		DragdropDesign,
		FooTer,
	},
};
</script>

<style scoped>
* {
	margin: 0;
}
.main-box {
	display: flex;
	flex-direction: row;
}
</style>
