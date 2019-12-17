import axios from 'axios';
import { set_localStorage } from './localStorage.js';
import { errorHandling } from './error.js';

async function getNewAccessToken() {
	try {
		const refresh_token = localStorage.getItem('refresh_token');
		axios.defaults.headers.common['Authorization'] = `Bearer ${refresh_token}`;
		const res = await axios.post('/users/token');
		set_localStorage(res);
		console.log(res);
		return res.data.accessToken;
	} catch (e) {
		errorHandling(e);
	}
}

async function ReApplyBasic(basic_customizing) {
	try {
		const access_token = await getNewAccessToken();
		if (access_token) {
			axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

			const result = await axios.post('/pre/diary/basics', basic_customizing);
			return result;
		}
	} catch (e) {
		errorHandling(e);
	}
}
export { ReApplyBasic };
