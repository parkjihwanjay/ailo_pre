function set_localStorage(res) {
	localStorage.setItem('access_token', res.data.accessToken);
	localStorage.setItem('refresh_token', res.data.refreshToken);
	localStorage.setItem('username', res.data.user.name);
}

export { set_localStorage };
