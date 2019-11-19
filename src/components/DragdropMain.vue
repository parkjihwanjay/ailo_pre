<template>
	<div class="dragdrop-main">
		<div class="dragdrop-main__heading">홍길동님의 2020 다이어리</div>
		<div class="dragdrop-main__buttons">
			<div class="dragdrop-main__buttons__left">
				<input type="button" value="한 페이지 보기" class="dragdrop-main__button__left" />
				<input type="button" value="두 페이지 보기" class="dragdrop-main__button__left" />
			</div>
			<div class="dragdrop-main__buttons__right">
				<div class="dragdrop-main__button__right">설정</div>
				<div class="dragdrop-main__button__right">구성편집</div>
				<div class="dragdrop-main__button__right">미리보기</div>
			</div>
		</div>
		<div class="dragdrop-main__page">
			<div class="dragdrop-main__page__left"></div>
			<div class="dragdrop-main__page__right"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DragdropMain',
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';

.dragdrop-main {
	width: 1023px;
	height: 860px;
	object-fit: contain;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-light-white;
}
.dragdrop-main__heading {
	padding: 20px 0;
	font-size: $s-size;
}
.dragdrop-main__buttons {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__buttons__left {
	padding-left: 35px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__button__left {
	margin: 0 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 104px;
	height: 24px;
	border-radius: 16.5px;
	border: solid 1px $off-purple;
	background-color: $off-white;
	font-size: $s-size;
	color: $off-purple;
	cursor: pointer;
}
.dragdrop-main__button__left:hover {
	background-color: $off-purple;
	color: $off-white;
}
.dragdrop-main__buttons__right {
	padding-right: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__button__right {
	margin-right: 1.9rem;
	text-decoration: underline;
	font-size: $s-size;
	color: $off-purple;
	cursor: pointer;
}
.dragdrop-main__page {
	padding-right: 1rem;
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.dragdrop-main__page__left {
	width: 473px;
	height: 668px;
	object-fit: contain;
	border-radius: 3px;
	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-white;
}
.dragdrop-main__page__right {
	width: 473px;
	height: 668px;
	object-fit: contain;
	border-radius: 3px;
	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-white;
}
</style>
