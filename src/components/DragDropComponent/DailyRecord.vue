<template>
	<div class="daily-record">
		<div class="header">
			<div class="header-text">오늘의 기분은 어떤가요?</div>
			<img class="header-img" src="@/assets/face-imoticon.png" alt="표정" />
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.daily-record {
	width: 267px;
	height: 180px;
	border-radius: 10px;
	// border: solid 1px $off-brown;
	background-color: $off-gray;
}
.header {
	padding-top: 4px;
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 10px;
	margin-right: 10px;
}
.header-text {
	// width: 303px;
	// height: 34px;
	font-family: $font-nanum;
	font-size: 16px;
	line-height: 1.17;
	color: $off-black;
}
.header-img {
	width: 80px;
	height: 26px;
}
</style>
