import axios from 'axios';
import { set_localStorage } from './localStorage.js';
import { errorHandling } from './error.js';
import { turquoise } from 'color-name';

async function GetAndSetNewAccessToken() {
	try {
		const refresh_token = localStorage.getItem('refresh_token');
		axios.defaults.headers.common['Authorization'] = `Bearer ${refresh_token}`;
		const res = await axios.post('/users/token');
		set_localStorage(res);
		axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
		return res.data.accessToken;
	} catch (e) {
		errorHandling(e);
	}
}

async function getDiaryById(id) {
	const result = await axios.get(`/pre/diary/${id}`);
	if (!result) {
		alert('서버 에러입니다. 죄송합니다 ㅜㅜ');
	}
	return result;
	// try {
	// 	const result = await axios.get(`/pre/diary/${id}`);
	// 	if (!result) {
	// 		alert('서버 에러입니다. 죄송합니다 ㅜㅜ');
	// 	}
	// 	return result;
	// } catch (e) {
	// 	// errorH	andling(e);
	// 	// return e;
	// }
}

export { GetAndSetNewAccessToken, getDiaryById };
