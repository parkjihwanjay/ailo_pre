<template>
	<div class="pagination-numbering">
		<a class="prev" title="이전" @click="clickPrev()"></a>
		<ul>
			<li v-for="(num, index) in paginationLimit" @click="setSkip(index)" :key="index">
				<a ref="paginationNum" class="pagination-num">{{ paginationStart + index }}</a>
			</li>
		</ul>
		<a class="next" title="다음" @click="clickNext()"></a>
	</div>
</template>

<script>
export default {
	name: 'PaginationButton',
	props: ['paginationStart', 'paginationEnd'],
	data() {
		return {
			notClicked: true,
		};
	},
	computed: {
		paginationLimit() {
			if (this.paginationStart + 4 < this.paginationEnd) {
				return 5;
			} else {
				return this.paginationEnd;
			}
		},
	},
	mounted() {
		this.$refs.paginationNum[0].classList.add('font-bold');
	},
	methods: {
		setSkip(index) {
			this.fontInit();
			this.$refs.paginationNum[index].classList.add('font-bold');
			this.$emit('setSkip', index);
		},
		fontInit() {
			for (let i = 0; i < this.paginationLimit; i++) {
				this.$refs.paginationNum[i].classList.remove('font-bold');
			}
		},
		clickPrev() {
			this.$emit('previous');
		},
		clickNext() {
			this.$emit('next');
		},
	},
};
</script>

<style scoped>
a {
	cursor: pointer;
}
.font-noraml {
	font-weight: normal;
}
.font-bold {
	font-weight: bold;
}
</style>
