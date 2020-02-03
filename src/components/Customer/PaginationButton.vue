<template>
	<div class="pagination-numbering">
		<a class="prev" title="이전" @click="clickPrev()"></a>
		<ul>
			<li v-for="(num, index) in paginationLimit" @click="setSkip(index)" ref="li" :key="index">
				<a :class="{ notClicked: 'font-normal' }">{{ paginationStart + index }}</a>
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
	methods: {
		setSkip(index) {
			this.notClicked = true;
			console.log(this.$refs.li[index].style.fontWeight);
			// this.$refs.li[index].style.fontWeight = 'bold';
			this.$emit('setSkip', index);
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
</style>
