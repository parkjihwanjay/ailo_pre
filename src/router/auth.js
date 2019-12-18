import store from '../store/store.js';
const checkAuth = next => {
	if (!localStorage.getItem('access_token')) {
		alert('로그인을 먼저 해주세요.');
		store.commit('SET_LOADING', false);
		next('/login');
	}
};

export default checkAuth;
