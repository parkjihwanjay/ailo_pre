import routes from './router.js';
import VueRouter from 'vue-router';

const router = new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
	routes,
});

export default router;
