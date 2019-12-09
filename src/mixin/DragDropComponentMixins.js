export default {
	data() {
		return {
			hover: false,
		};
	},
	methods: {
		enterHover() {
			this.hover = true;
		},
		outHover() {
			this.hover = false;
		},
		deleting() {
			this.$emit('delete');
		},
	},
};
