import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const DEPLOY_IP = 'http://52.79.136.152';
const LOCAL_IP = 'http://localhost:3000';

axios.defaults.baseURL = LOCAL_IP;
