import { errorHandling } from '../error.js';
import { set_localStorage } from '../localStorage.js';
import { LoginSuccess, LoginFailure, LogoutSuccess, LogoutFailure } from './alert.js';
import axios from 'axios';
import router from '../../router/index.js';

import store from '../../store/store.js';

const social_login = async req_body => {
	try {
		const res = await axios.post('/users/social/login', req_body);
		LoginSuccess();
		set_localStorage(res);
		store.commit('LOGIN');
		store.commit('SET_LOADING', false);
		router.push({
			name: 'Home',
		});
	} catch (e) {
		// console.log(e);
		errorHandling(e);
		store.commit('SET_LOADING', false);
	}
};

const axios_logout = async () => {
	store.commit('SET_LOADING', true);
	const refresh_token = localStorage.getItem('refresh_token');

	axios.defaults.headers.common['Authorization'] = `Bearer ${refresh_token}`;

	try {
		await axios.post('/users/social/logout');
		localStorage.clear();
		LogoutSuccess();
		store.commit('LOGOUT');
		store.commit('SET_LOADING', false);
		location.reload();
	} catch (e) {
		errorHandling(e);
		store.commit('SET_LOADING', false);
	}
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
