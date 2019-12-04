<template>
	<div class="diary-write">
		<nav-bar />
		<div class="main-box">
			<dragdrop-main />
			<dragdrop-design />
		</div>
		<Footer />
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import DragdropMain from '@/components/DragdropMain.vue';
import DragdropDesign from '@/components/DragdropDesign.vue';
import Footer from '@/components/FooTer.vue';

export default {
	components: {
		NavBar,
		DragdropMain,
		DragdropDesign,
		Footer,
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
	margin-bottom: 30px;
}
</style>
