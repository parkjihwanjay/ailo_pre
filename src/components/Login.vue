<template>
	<div id="main" class="login-bg d-flex justify-content-center align-items-center">
		<div class="login-form">
			<h2>로그인</h2>
			<p>아일로와 함께 나만의 다이어리를 만들어보세요!</p>
			<div class="btn-wrap">
				<a class="btn btnKakaotalk w-100" title="카카오톡으로 로그인" @click="KakaoLogin()">
					<img src="img/sub/login-kakao.png" alt="카카오톡" />
					카카오톡으로 로그인
				</a>
				<a class="btn btnFacebook w-100" title="페이스북으로 로그인" @click="facebookLogin()">
					<img src="img/sub/login-facebook.png" alt="페이스북" />
					페이스북으로 로그인
				</a>
				<GoogleLogin
					class="btn btnGoogle w-100 button"
					:params="params"
					:onSuccess="GoogleLoginSuccess"
					:onFailure="GoogleLoginFailure"
					><img src="img/sub/login-google.png" alt="구글" /> 구글 로그인</GoogleLogin
				>
			</div>
			<p class="text-right" v-show="false">
				<router-link to="/signup">
					아직 아일로 회원이 아니신가요? <strong>회원가입하기</strong>
				</router-link>
			</p>
			<a class="link-underline" v-show="false" href="javascript:popup('admin');">관리자 모드</a>
		</div>
	</div>
</template>

<script>
import GoogleLogin from 'vue-google-login';
import Facebook from '../utils/socialLogin/Facebook.js';
import Google from '../utils/socialLogin/Google.js';
import Kakao from '../utils/socialLogin/Kakao.js';

import { mapMutations } from 'vuex';
export default {
	created() {
		//kako-init
		if (!window.Kakao.isInitialized()) Kakao.Init();
		//facebook-init
		if (!window.FB) Facebook.Init();
	},
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
	methods: {
		check_login() {
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
		},
		//Google
		GoogleSignout() {
			this.SET_LOADING(true);
			Google.Signout();
		},
		GoogleLoginSuccess(googleUser) {
			this.SET_LOADING(true);
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
			this.SET_LOADING(true);
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
			Kakao.Login();
		},
		//Facebook
		facebookLogin() {
			this.SET_LOADING(true);
			if (localStorage.getItem('access_token')) return alert('이미 로그인 되어 있습니다.');
			Facebook.Login();
		},
		facebookLogout() {
			Facebook.Logout();
		},
		...mapMutations(['SET_LOADING']),
	},
};
</script>

<style scoped>
.popup-window {
	margin-top: -79.5px;
}
a {
	cursor: pointer !important;
	user-select: none;
}
.button {
	cursor: pointer;
	user-select: none;
}
</style>
