<template>
	<div id="header">
		<div class="container">
			<h1>
				<router-link to="/"><img src="/img/common/header-logo.png" alt="AILO"/></router-link>
			</h1>
			<div id="gnb">
				<h2 class="blind">대표메뉴</h2>
				<ul>
					<li @click="showNotReadyModal()"><a>내 다이어리</a></li>
					<li @click="showNotReadyModal()"><a>주문하기</a></li>
					<li @click="showNotReadyModal()"><a>상점</a></li>
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
import { axios_logout } from '../utils/socialLogin/axios.js';
export default {
	// created() {
	// 	if (localStorage.getItem('access_token')) {
	// 		this.isLogin = true;
	// 	} else {
	// 		this.isLogin = false;
	// 	}
	// },
	created() {
		localStorage.getItem('access_token')
			? this.$store.commit('LOGIN')
			: this.$store.commit('LOGOUT');
	},
	computed: {
		isLogin() {
			return this.$store.state.isLogin;
		},
	},
	methods: {
		Logout() {
			axios_logout();
			// localStorage.clear();
			// location.reload();
		},
		Login() {
			this.$router.push({
				name: 'Login',
			});
		},
		showNotReadyModal() {
			this.$store.commit('SHOW_NOT_READY_MODAL');
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
.header-login-button {
	width: 100px;
	height: 37px;
	text-align: center;
	border-radius: 18.5px;
	border: 1px solid $off-white;
	background-color: transparent;
	font-size: 15px;
	color: white;
	cursor: pointer;
}
.header-login-button:hover {
	background-color: $off-purple;
	border: 3px solid $off-purple;
	transition: 0.1s;
}
</style>
