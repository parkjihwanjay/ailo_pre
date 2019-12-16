const checkAuth = next => {
	if (!localStorage.getItem('access_token')) {
		alert('로그인을 먼저 해주세요.');
	}
};

export default checkAuth;
