<template>
	<div id="dday">
		<div class="dday-body">D-</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
#dday {
	display: flex;
	align-items: center;
	width: 78px;
	height: 37px;
	border-radius: 20px;
	background-color: $off-gray;
}
.dday-body {
	// width: 45px;
	// height: 44px;
	margin-left: 12px;
	font-family: $font-nanum;
	font-size: 14px;
	line-height: 1.13;
	color: $off-black;
}
</style>
