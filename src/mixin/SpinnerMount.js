import store from '../store/store.js';
export default {
	mounted() {
		store.commit('SET_LOADING', false);
	},
};
