import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store.js';
import VueAnalytics from 'vue-analytics';
import VueMoment from 'vue-moment';

import axios from 'axios';

// import 'normalize.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const DEPLOY_IP = 'https://ailo.kro.kr';
const LOCAL_IP = 'http://localhost:3000';

axios.defaults.baseURL = DEPLOY_IP;

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
	id: process.env.VUE_APP_GOOGLE_ANALYTICS,
	router,
});

Vue.use(VueMoment);

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
