<template>
	<div>
		<input type="button" class="big-button" value="페이스북 로그인" @click="facebookLogin()" />
		<input type="button" class="big-button" value="페이스북 로그아웃" @click="facebookLogout()" />
		<GoogleLogin
			class="big-button"
			:params="params"
			:onSuccess="GoogleLoginSuccess"
			:onFailure="GoogleLoginFailure"
			>구글 로그인</GoogleLogin
		>
		<input class="big-button" type="button" value="구글 로그아웃" @click="GoogleSignout()" />
		<input type="button" class="big-button" @click="KakaoLogin()" value="카카오 로그인" />
		<input type="button" class="big-button" @click="KaKaoLogout()" value="카카오 로그아웃" />
		<router-link to="/pre/basic">pre</router-link>
	</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import Facebook from '../utils/socialLogin/Facebook.js';
import Google from '../utils/socialLogin/Google.js';
import Kakao from '../utils/socialLogin/Kakao.js';

export default {
	components: {
		GoogleLogin,
	},
	data() {
		return {
			//for goolge-login
			params: {
				client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
			},
		};
	},
	mounted() {},
	created() {
		//kako-init
		if (!window.Kakao.isInitialized()) Kakao.Init();
		//facebook-init
		if (!window.FB) Facebook.Init();
	},
	methods: {
		check_login() {
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
		},
		//Google
		GoogleSignout() {
			Google.Signout();
		},
		GoogleLoginSuccess(googleUser) {
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
			Google.GoogleLoginSuccess(googleUser);
		},
		GoogleLoginFailure() {
			Google.GoogleLoginFailure();
		},
		//Kakao
		KaKaoLogout() {
			Kakao.Logout();
		},
		KakaoLogin() {
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
			Kakao.Login();
		},
		//Facebook
		facebookLogin() {
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
			Facebook.Login();
		},
		facebookLogout() {
			Facebook.Logout();
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
</style>
