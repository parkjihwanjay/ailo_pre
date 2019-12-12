const IsLogin = () => {
	localStorage.getItem('access_token') ? true : false;
};

export default IsLogin;
