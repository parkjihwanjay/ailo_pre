import { errorHandling } from '../error.js';
import { set_localStorage } from '../localStorage.js';
import { LoginSuccess, LoginFailure, LogoutSuccess, LogoutFailure } from './alert.js';
import axios from 'axios';
import router from '../../router/index.js';

const social_login = async req_body => {
	try {
		const res = await axios.post('/users/social/login', req_body);
		LoginSuccess();
		set_localStorage(res);
		router.push({
			name: 'Home',
		});
		location.reload();
	} catch (e) {
		errorHandling(e);
	}
};

const axios_logout = async () => {
	await axios.post('/users/social/logout');
	localStorage.clear();
	LogoutSuccess();
};

const social_logout = async () => {
	try {
		axios_logout();
	} catch (e) {
		if (e.response.message === 'TokenExpiredError') {
			try {
				const res = await axios.post('/users/token');
				set_localStorage(res);
				axios_logout();
			} catch (e) {
				errorHandling(e);
			}
		} else errorHandling(e);
	}
};
export { social_login, social_logout, axios_logout };
