import { LoginSuccess, LoginFailure, LogoutSuccess, LogoutFailure } from './alert.js';
import { social_login, social_logout } from './axios.js';

import axios from 'axios';

const Kakao = {
	Init() {
		window.Kakao.init(process.env.VUE_APP_KAKAO_APP_KEY);
	},

	GetMe(authObj) {
		console.log(authObj);
		window.Kakao.API.request({
			url: '/v2/user/me',
			success: async res => {
				console.log(res);
				const kakao_account = res.kakao_account;
				const req_body = {
					id: res.id,
					name: kakao_account.profile.nickname,
					email: kakao_account.email,
					birthday: kakao_account.birthday,
					kakaoAccessToken: authObj.access_token,
					profileIMG: kakao_account.profile.profile_image_url,
					source: 'k',
				};
				social_login(req_body);
			},
			fail: error => {
				LoginFailure();
				console.log(error);
			},
		});
	},

	Login() {
		console.log(window.Kakao);
		window.Kakao.Auth.login({
			scope: 'account_email, gender',
			success: this.GetMe,
			fail: LoginFailure(e),
			// 팝업 화면에서 확인 받는 영역
		});
	},

	Logout() {
		window.Kakao.Auth.logout(res => {
			if (!res) return LogoutFailure();
			social_logout();
		});
	},
};

export default Kakao;
