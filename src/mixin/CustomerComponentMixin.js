import axios from 'axios';

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
		const listTotal = await this.getList(this.url);
		this.paginationEnd = parseInt(listTotal.length / this.limit) + 1;
		this.list = await this.getList(this.url, this.skip, this.limit);
	},

	methods: {
		async getList(url, skip, limit) {
			const result = await axios.get(`${url}?skip=${skip}&limit=${limit}`);
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
