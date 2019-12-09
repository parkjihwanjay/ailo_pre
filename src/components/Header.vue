<template>
	<div id="header">
		<div class="container">
			<h1>
				<router-link to="/"><img src="img/common/header-logo.png" alt="AILO"/></router-link>
			</h1>
			<div id="gnb">
				<h2 class="blind">대표메뉴</h2>
				<ul>
					<li><a href="#" title="내 다이어리">내 다이어리</a></li>
					<li><a href="#" title="주문하기">주문하기</a></li>
					<li><a href="javascript:popup('prepare');" title="상점">상점</a></li>
					<li><a href="#" title="마이페이지">마이페이지</a></li>
					<li><a href="#" title="고객센터">고객센터</a></li>
					<li><router-link to="/login">로그인</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
a:hover {
	color: #663399 !important;
}
</style>
