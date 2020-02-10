import axios from 'axios';
import store from '../store/store.js';
import { errorHandling } from '../utils/error.js';
import { GetAndSetNewAccessToken } from '../utils/axios.js';
import PaginationButton from '../components/Customer/PaginationButton.vue';

export default {
	data() {
		return {
			limit: 12,
			skip: 0,
			list: [],
			paginationStart: 1,
			paginationEnd: 1,
		};
	},
	components: {
		PaginationButton,
	},
	async created() {
		try {
			const listTotal = await axios.get(this.url);
			this.paginationEnd = parseInt(listTotal.data.length / this.limit) + 1;
			this.list = await this.getList(this.url, this.skip, this.limit);
		} catch (e) {
			if (e.response.data.error === 'AccessTokenExpiredError') {
				const token = await GetAndSetNewAccessToken();
				const listTotal = await axios.get(this.url);
				this.paginationEnd = parseInt(listTotal.data.length / this.limit) + 1;
				this.list = await this.getList(this.url, this.skip, this.limit);
				if (!result) {
					alert('로그인을 해주세요');
					this.$router.push({
						path: '/login',
					});
				}
			}
		}
	},

	methods: {
		async getList(url, skip, limit) {
			let result;
			// result = await axios.get(`${url}?skip=${skip}&limit=${limit}`);
			try {
				if (this.category)
					result = await axios.get(`${url}?skip=${skip}&limit=${limit}&category=${this.category}`);
				else result = await axios.get(`${url}?skip=${skip}&limit=${limit}`);
			} catch (e) {
				if (e.response.data.error === 'AccessTokenExpiredError') {
					const token = await GetAndSetNewAccessToken();
					if (!token) return store.commit('SET_LOADING', false);

					if (this.category)
						result = await axios.get(
							`${url}?skip=${skip}&limit=${limit}&category=${this.category}`,
						);
					else result = await axios.get(`${url}?skip=${skip}&limit=${limit}`);

					if (!result) {
						errorHandling(e);
						store.commit('SET_LOADING', false);
						this.$router.push({
							path: '/login',
						});
					}
				}
			}

			if (!result.data.length) {
				throw new Error('마지막 페이지입니다.');
			}
			return result.data;
		},
		async setList() {
			try {
				this.list = await this.getList(this.url, this.skip, this.limit);
			} catch (e) {
				this.skip -= 12;
				return alert('마지막 페이지입니다');
			}
		},
		async setSkip(index) {
			this.skip = (this.paginationStart + index - 1) * 12;
			await this.setList();
		},
		async next() {
			if (this.paginationStart + 4 >= this.paginationEnd) return;
			this.paginationStart += 5;
			this.setSkip(0);
			try {
				await this.setList();
			} catch (e) {
				this.paginationStart -= 5;
				this.setSkip(0);
			}
		},
		previous() {
			if (this.paginationStart <= 1) return;
			this.paginationStart -= 5;
			this.setSkip(0);
		},
	},
};
