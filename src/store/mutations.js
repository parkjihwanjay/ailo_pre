export default {
	SET_LOADING(state, value) {
		state.isloading = value;
	},
	SET_PRE_PDF_URL(state, url) {
		state.pre_pdf_url = url;
	},
	SHOW_BASE_MODAL(state) {
		state.baseModalChecked = true;
	},
	CLOSE_BASE_MODAL(state) {
		state.baseModalChecked = false;
	},
};
