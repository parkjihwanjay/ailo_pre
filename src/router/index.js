import routes from './router.js';
import VueRouter from 'vue-router';
import axios from 'axios';

const router = new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
	routes,
});

router.beforeEach(async (to, from, next) => {
	const JWT_token = localStorage.getItem('access_token');
	if (JWT_token) {
		axios.defaults.headers.common['Authorization'] = `Bearer ${JWT_token}`;
		axios.defaults.headers.common['Content-Type'] = 'application/json';
	}
	next();
});

export default router;
