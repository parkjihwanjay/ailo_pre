import { LoginSuccess, LoginFailure, LogoutSuccess, LogoutFailure } from './alert.js';
import { social_login, social_logout } from './axios.js';

const Facebook = {
	Init() {
		window.fbAsyncInit = function() {
			window.FB.init({
				appId: process.env.VUE_APP_FACEBOOK_APP_ID,
				cookie: true,
				xfbml: true,
				version: 'v2.5',
			});
			window.FB.AppEvents.logPageView();
		};
		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	},

	GetMe() {
		window.FB.api('/me', { fields: 'id, name, email' }, function(response) {
			console.log(response);
		});
	},

	Login() {
		window.FB.getLoginStatus(res => {
			//처음 로그인
			window.FB.login(
				response => {
					if (response.status === 'connected') {
						const accessToken = response.authResponse.accessToken;
						window.FB.api('/me', { fields: 'id, name, email, picture' }, res => {
							if (!res) LoginFailure();
							const req_body = {
								facebookAccessToken: accessToken,
								id: res.id,
								email: res.email,
								name: res.name,
								profileIMG: res.picture,
								//login from facebook
								source: 'f',
							};
							social_login(req_body);
						});
						// console.log(postUserInformation);
					} else {
						LoginFailure();
					}
				},
				{ scope: 'public_profile, email' },
			);
		});
	},

	Logout() {
		window.FB.getLoginStatus(response => {
			window.FB.logout(async res => {
				if (!res) return LogoutFailure();
				social_logout();
			});
		});
	},
};

export default Facebook;
