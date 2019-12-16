<template>
	<div id="header">
		<div class="container">
			<h1>
				<router-link to="/"><img src="/img/common/header-logo.png" alt="AILO"/></router-link>
			</h1>
			<div id="gnb">
				<h2 class="blind">대표메뉴</h2>
				<ul>
					<li><a href="#" title="내 다이어리">내 다이어리</a></li>
					<li><a href="#" title="주문하기">주문하기</a></li>
					<li><a href="javascript:popup('prepare');" title="상점">상점</a></li>
					<li><router-link to="/mypage">마이페이지</router-link></li>
					<li>
						<router-link to="/customer">고객센터</router-link>
					</li>
					<li v-if="!isLogin"><router-link to="/login">로그인</router-link></li>
					<li v-if="isLogin" @click="Logout()"><a>로그아웃</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	created() {
		if (localStorage.getItem('access_token')) {
			this.isLogin = true;
		} else {
			this.isLogin = false;
		}
	},
	data() {
		return {
			isLogin: false,
		};
	},
	methods: {
		Logout() {
			localStorage.clear();
			location.reload();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
a:hover {
	color: #663399 !important;
	cursor: pointer;
}
</style>
