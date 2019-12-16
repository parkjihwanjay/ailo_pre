const LoginSuccess = () => {
	alert('로그인 성공');
};

const LoginFailure = e => {
	console.log(e);
	alert('로그인 오류');
};

const LogoutSuccess = () => {
	alert('로그아웃 성공');
};

const LogoutFailure = () => {
	alert('로그아웃 오류');
};

export { LoginSuccess, LoginFailure, LogoutSuccess, LogoutFailure };
