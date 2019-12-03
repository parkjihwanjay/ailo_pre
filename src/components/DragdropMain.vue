<template>
	<div class="dragdrop-main">
		<div class="dragdrop-main__heading">홍길동님의 2020 다이어리</div>
		<div class="dragdrop-main__buttons">
			<div class="dragdrop-main__buttons__left">
				<input type="button" value="한 페이지 보기" class="dragdrop-main__button__left" />
				<input type="button" value="두 페이지 보기" class="dragdrop-main__button__left" />
			</div>
			<div class="dragdrop-main__buttons__right">
				<div class="dragdrop-main__button__right" @click="save()">설정</div>
				<div class="dragdrop-main__button__right">구성편집</div>
				<div class="dragdrop-main__button__right">미리보기</div>
			</div>
		</div>
		<div>
			<div id="canvas" class="dragdrop-main__page" ref="dragdrop">
				<img
					id="weather-icon"
					class="drag"
					src="../assets/weather.png"
					alt="weather"
					ref="weather"
				/>
				<Memo class="dragresize" ref="memo" />
				<Dday class="drag" ref="Dday" />
				<daily-record class="dragresize" ref="dailyrecord" />
				<Dating class="drag" ref="dating" />
				<!-- <img class="dragdrop" src="../assets/daily.png" alt="" /> -->
				<!-- <img class="dragdrop" src="../assets/dailySvg.svg" width="177px" height="143px" alt="" /> -->
			</div>

			<input type="button" value="저장" @click="save()" class="big-button dragdrop-save-button" />
			<!-- <div class="dragdrop-main__page__left"></div>
			<div class="dragdrop-main__page__right"></div> -->
		</div>
	</div>
</template>

<script>
import jsPDF from 'jspdf';
import AWS from 'aws-sdk';
import html2canvas from 'html2canvas';

import { aws_config, new_s3, s3_upload } from '../utils/AWS_S3/S3.js';
import { interactDragInit, interactResizeInit } from '../utils/interact.js';

import Memo from './DragDropComponent/Memo.vue';
import Dday from './DragDropComponent/Dday.vue';
import DailyRecord from './DragDropComponent/DailyRecord.vue';
import Dating from './DragDropComponent/Dating.vue';

export default {
	name: 'DragdropMain',
	components: {
		Memo,
		Dday,
		DailyRecord,
		Dating,
	},
	created() {
		//only for drag
		interactDragInit('.drag', this.$ga);
		//both for drag and resize
		interactDragInit('.dragresize', this.$ga);
		interactResizeInit('.dragresize', this.$ga);
	},
	mounted() {
		//처음 위치 조정
		const weather = this.$refs.weather;
		const memo = this.$refs.memo.$el;
		const Dday = this.$refs.Dday.$el;
		const dailyRecord = this.$refs.dailyrecord.$el;
		const dating = this.$refs.dating.$el;

		this.setPosition(weather, 382, 12);
		this.setPosition(memo, 341, 136);
		this.setPosition(Dday, 227, -111);
		this.setPosition(dailyRecord, 17, -1);
		this.setPosition(dating, 30, -342);

		// let canvas = document.getElementById('canvas');
		// console.log(canvas);
		// // console.log(this.$refs.dragdrop);
		// let ctx = canvas.getContext('2d');

		// canvas.style.width = '148mm';
		// canvas.style.height = '210mm';

		// const scale = window.devicePixelRatio;
		// canvas.width = 559.36 * scale;
		// canvas.height = 793.69 * scale;

		// ctx.scale(scale, scale);
		// console.log(window.devicePixelRatio);
		this.$ga.page('/pre/DragDrop');
		aws_config();
	},
	methods: {
		setPosition(target, x, y) {
			target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
		},
		save() {
			this.$store.commit('SET_LOADING', true);
			const s3 = new_s3();
			const canvas = document.getElementById('canvas');
			window.scrollTo(0, 0);
			html2canvas(canvas, {
				width: 559.36,
				height: 793.69,
			}).then(canvas => {
				document.body.appendChild(canvas);
				console.log(canvas);
				const doc = new jsPDF('p', 'mm', 'a5');
				doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 148, 210);
				// , 148, 210);
				doc.save('sample-file.pdf');
				// const b = document.createElement('b');
				// b.download = 'asdf';
				// b.href = doc;
				// b.click();

				// canvas.width = '559.36px';
				// canvas.height = '793.69px';

				// const a = document.createElement('a');
				// a.download = 'asdf';
				// a.href = canvas.toDataURL('image/png');
				// a.click();
				//
				// const file = doc.output('arraybuffer');
				// const photoKey = `pre-pdf/test/${this.$route.params.id}`;

				// const result = s3_upload(s3, file, photoKey);
				// console.log(result);
			});
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
#weather-icon {
	width: 42mm;
	height: 5.669mm;
}
.dragdrop-main {
	width: 1023px;
	height: 860px;
	object-fit: contain;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-light-white;
}
.dragdrop-main__heading {
	padding: 20px 0;
	font-size: $s-size;
}
.dragdrop-main__buttons {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__buttons__left {
	padding-left: 35px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__button__left {
	margin: 0 0.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 104px;
	height: 24px;
	border-radius: 16.5px;
	border: solid 1px $off-purple;
	background-color: $off-white;
	font-size: $s-size;
	color: $off-purple;
	cursor: pointer;
}
.dragdrop-main__button__left:hover {
	background-color: $off-purple;
	color: $off-white;
}
.dragdrop-main__buttons__right {
	padding-right: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main__button__right {
	margin-right: 1.9rem;
	text-decoration: underline;
	font-size: $s-size;
	color: $off-purple;
	cursor: pointer;
}
.dragdrop-main__page {
	width: 148mm;
	height: 210mm;
	margin-left: 20px;
	object-fit: contain;
	// border-radius: 3px;
	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
	background-color: $off-purple;
}
.dragdrop-save-button {
	margin: 19.6px 65.5px 19.6px 802px;
}
// .dragdrop-main__page {
// 	padding-right: 1rem;
// 	margin-top: 1rem;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }
// .dragdrop-main__page__left {
// 	width: 473px;
// 	height: 668px;
// 	object-fit: contain;
// 	border-radius: 3px;
// 	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
// 	background-color: $off-white;
// }
// .dragdrop-main__page__right {
// 	width: 473px;
// 	height: 668px;
// 	object-fit: contain;
// 	border-radius: 3px;
// 	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
// 	background-color: $off-white;
// }
</style>
