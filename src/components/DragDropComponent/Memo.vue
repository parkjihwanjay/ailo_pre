<template>
	<div class="memo">
		<div class="memo-header">Memo</div>
	</div>
</template>

<script>
import { interactDragInit, interactResizeInit } from '../../utils/interact.js';

export default {
	name: 'Memo',
	mounted() {
		// interactDragInit('.memo');
		interactResizeInit('.memo-body');
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.memo-header {
	// width: 129px;
	// height: 63px;
	padding-top: 10px;
	padding-left: 10px;
	font-family: BradleyHandITCTT;
	font-size: 1.6rem;
	font-weight: bold;
	line-height: 1.26;
	text-align: left;
	color: $off-black;
}
.memo {
	width: 200px;
	height: 100px;
	// border: solid 1px #707070;
	border-radius: 10px;
	background-color: $off-gray;
}
</style>
