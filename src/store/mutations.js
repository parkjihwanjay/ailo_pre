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
	LOGOUT(state) {
		state.isLogin = false;
	},
	SHOW_BASE_MODAL(state) {
		state.baseModalChecked = true;
	},
	CLOSE_BASE_MODAL(state) {
		state.baseModalChecked = false;
	},
	SHOW_NOT_READY_MODAL(state) {
		state.NotReadyModalChecked = true;
	},
	CLOSE_NOT_READY_MODAL(state) {
		state.NotReadyModalChecked = false;
	},
	SHOW_PREVIEW_MODAL(state, previewIMG) {
		state.previewIMG = previewIMG;
		state.PreViewModalChecked = true;
	},
	CLOSE_PREVIEW_MODAL(state) {
		state.PreViewModalChecked = false;
	},
};
