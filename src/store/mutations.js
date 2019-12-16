export default {
	SET_LOADING(state, value) {
		state.isLoading = value;
	},
	SET_PRE_PDF_URL(state, url) {
		state.pre_pdf_url = url;
	},
	LOGIN(state) {
		state.isLogin = true;
	},
	// SHOW_BASE_MODAL(state) {
	// 	state.baseModalChecked = true;
	// },
	// CLOSE_BASE_MODAL(state) {
	// 	state.baseModalChecked = false;
	// },
};
