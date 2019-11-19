<template>
	<header class="nav">
		<div class="nav__logo">logo</div>
		<div class="nav__items">
			<div class="nav__items__anchor">내 다이어리</div>
			<div class="nav__items__anchor">주문하기</div>
			<div class="nav__items__anchor">마이페이지</div>
			<div class="nav__items__anchor">고객센터</div>
			<input type="button" value="로그인" class="middle-button" />
		</div>
	</header>
</template>

<script>
export default {
	name: 'navbar',
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
.nav {
	width: 100%;
	height: 73px;
	object-fit: contain;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav__logo {
	padding: 0 5rem;
}
.nav__items {
	width: 500px;
	padding: 0 12rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.nav__items__anchor {
	cursor: pointer;
}
</style>
