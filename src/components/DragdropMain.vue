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
				<div class="dragdrop-main__button__right" @click="changeEditing()">구성편집</div>
				<div class="dragdrop-main__button__right" @click="preview()">미리보기</div>
			</div>
		</div>
		<div class="dragdrop-main__body">
			<div id="canvas" class="dragdrop-main__page">
				<div class="dragdrop-main__canvas" ref="dragdrop">
					<div class="dragdrop-main__header">
						<Dating ref="dating" />
						<Dday ref="Dday" />
						<img id="weather-icon" src="../assets/weather.png" alt="weather" ref="weather" />
					</div>
					<div
						ref="dragdropMainCanvasBody"
						id="dragdrop-main-canvas__body"
						class="dragdrop-main-canvas__body"
						:class="{ 'border-purple': borderPurple }"
					>
						<daily-record
							id="daily-record"
							class="dragresize"
							ref="dailyRecord"
							v-if="componentShow[0].checked"
						/>
						<Memo class="dragresize" id="memo" ref="memo" v-if="componentShow[1].checked" />
						<Schedule
							class="drag"
							ref="scheduleBig"
							id="schedule-big"
							@delete="componentShowDelete(2)"
							v-if="componentShow[2].checked"
						/>
						<Schedule
							class="drag"
							ref="scheduleSmall"
							id="schedule-small"
							@delete="componentShowDelete(3)"
							v-if="componentShow[3].checked"
						/>
						<account-book
							ref="accountBook"
							@delete="componentShowDelete(4)"
							id="account-book"
							class="dragresize"
							v-if="componentShow[4].checked"
						></account-book>
						<!-- todo-list 색깔 있는 버전 -->
						<todo-list
							ref="todoListColor"
							id="todo-list-color"
							class="dragresize"
							todoV="one"
							@delete="componentShowDelete(5)"
							:editing="editing"
							v-if="componentShow[5].checked"
						></todo-list>
						<!-- todo-list 색깔 없는 버전 -->
						<todo-list
							ref="todoListNonColor"
							id="todo-list"
							class="dragresize"
							todoV="two"
							@delete="componentShowDelete(6)"
							:editing="editing"
							v-if="componentShow[6].checked"
						></todo-list>
					</div>
				</div>
			</div>
			<div>
				<span v-for="(component, index) in componentShow" :key="index">
					<input
						@click="checkOverflow(component.id)"
						type="checkbox"
						:id="index"
						v-model="component.checked"
					/>
					<label :for="index">{{ component.name }}</label>
					<br />
				</span>
				<span>
					<input type="checkbox" name="보조선" v-model="borderPurple" />
					<label for="보조선">보조선</label>
				</span>
			</div>
			<!-- <input type="button" value="저장" @click="save()" class="big-button dragdrop-save-button" /> -->
			<!-- <div class="dragdrop-main__canvas__left"></div>
			<div class="dragdrop-main__canvas__right"></div> -->
		</div>
	</div>
</template>

<script>
import jsPDF from 'jspdf';
import AWS from 'aws-sdk';
import html2canvas from 'html2canvas';
import detectElementOverflow from 'detect-element-overflow';

import { aws_config, new_s3, s3_upload } from '../utils/AWS_S3/S3.js';
import { interactDragInit, interactResizeInit, interactDropInit } from '../utils/interact.js';

import Memo from './DragDropComponent/Memo.vue';
import Dday from './DragDropComponent/Dday.vue';
import DailyRecord from './DragDropComponent/DailyRecord.vue';
import Dating from './DragDropComponent/Dating.vue';
import Schedule from './DragDropComponent/Schedule.vue';
import AccountBook from './DragDropComponent/AccountBook.vue';
import TodoList from './DragDropComponent/TodoList.vue';

export default {
	name: 'DragdropMain',
	components: {
		Memo,
		Dday,
		DailyRecord,
		Dating,
		Schedule,
		AccountBook,
		TodoList,
	},
	created() {
		//only for drag
		interactDragInit('.drag', this.$ga);
		// interactDropInit('.dragdrop-main__canvas');
		//both for drag and resize
		interactDragInit('.dragresize', this.$ga);
		interactResizeInit('.dragresize', this.$ga);
	},
	data() {
		return {
			componentShow: [
				{
					name: 'Daily Record',
					id: 'daily-record',
					checked: false,
				},
				{
					name: 'Memo',
					id: 'memo',
					checked: false,
				},
				{
					name: 'Schedule(큰 버전)',
					id: 'schedule-big',
					checked: false,
				},
				{
					name: 'Schedule(작은 버전)',
					id: 'schedule-small',
					checked: false,
				},
				{
					name: '가계부',
					id: 'account-book',
					checked: false,
				},
				{
					name: 'Todo-List(색깔 있음)',
					id: 'todo-list-color',
					checked: false,
				},
				{
					name: 'Todo-List(색깔 없음)',
					id: 'todo-list',
					checked: false,
				},
			],
			editing: false,
			borderPurple: true,
		};
	},
	mounted() {
		console.log(this.$route.params);
		//처음 위치 조정
		// const weather = this.$refs.weather;
		// const memo = this.$refs.memo.$el;
		// const Dday = this.$refs.Dday.$el;
		// const dailyRecord = this.$refs.dailyrecord.$el;
		// const dating = this.$refs.dating.$el;

		// this.setPosition(weather, 382, 12);
		// this.setPosition(memo, 341, 136);
		// this.setPosition(Dday, 227, -111);
		// this.setPosition(dailyRecord, 17, -1);
		// this.setPosition(dating, 30, -342);

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
		this.$ga.page('/pre/dragdrop');
		aws_config();
		this.$store.commit('SET_LOADING', false);
	},
	methods: {
		async preview() {
			this.$store.commit('SET_LOADING', true);

			const result = await this.html2canvas();
			const previewIMG = result.toDataURL('image/png');
			this.$store.commit('SHOW_PREVIEW_MODAL', previewIMG);
		},
		checkOverflow(id) {
			// console.log(this.$refs);
			// const canvas = this.$refs.overflow;
			// if (canvas.clientHeight >= 721) alert('넘칩니다 ㅜㅜ');
			// console.log(canvas.scrollHeight, canvas.clientHeight);
			// console.log(id);
			// const canvas = document.getElementById('dragdrop-main-canvas__body');
			// const child = document.getElementById(id);
			// const isOverflow = detectElementOverflow(child, canvas);
			// // if () alert('넘치면 안됩니다');
			// console.log(isOverflow);
			// console.log(isOverflow.collidedBottom);
		},
		changeEditing() {
			this.editing = !this.editing;
		},
		setPosition(target, x, y) {
			target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px,' + y + 'px)';

			target.setAttribute('data-x', x);
			target.setAttribute('data-y', y);
		},
		componentShowDelete(index) {
			this.componentShow[index].checked = false;
		},
		async html2canvas() {
			this.borderPurple = false;

			const canvas = document.getElementById('canvas');

			window.scrollTo(0, 0);

			const result = await html2canvas(canvas, {
				width: 559.36,
				height: 793.69,
			});

			this.borderPurple = true;

			return result;
		},
		async save() {
			this.$store.commit('SET_LOADING', true);
			const s3 = new_s3();
			const id = this.$route.params.id;
			// const canvas = this.$refs.canvas;
			// const canvas = document.getElementById('canvas');
			const result = await this.html2canvas();

			const resultIMG = result.toDataURL('image/png');
			let img = new FormData();
			img.append('image', resultIMG);

			const doc = new jsPDF('p', 'mm', 'a5');
			doc.addImage(resultIMG, 'PNG', 0, 0, 148, 210);
			// doc.save('sample-file.pdf');

			const file = doc.output('arraybuffer');
			// const photoKey = `pre-pdf/test/${id}.pdf`;
			const photoKey = `pre-pdf/test.pdf`;

			const S3_IMG_PDF = {
				s3,
				file,
				photoKey,
				id,
				img,
			};
			const upload = s3_upload(S3_IMG_PDF);
			console.log(upload);

			this.$store.commit('SET_LOADING', false);

			// html2canvas(canvas, {
			// 	width: 559.36,
			// 	height: 793.69,
			// }).then(canvas => {
			// 	// document.body.appendChild(canvas);
			// 	console.log(canvas);
			// 	const doc = new jsPDF('p', 'mm', 'a5');
			// 	doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 148, 210);
			// 	// , 148, 210);
			// 	doc.save('sample-file.pdf');
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
			// });
		},
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';

.visible-hidden {
	visibility: hidden;
	position: absolute;
	top: 534px;
	left: 600px;
}

.visibile-shown {
	position: relative;
}

.dragdrop-page__header {
	padding-top: 10px;
	margin: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.drag {
	margin-top: 10px;
	touch-action: none;
	user-select: none;
	display: inline-block;
}

#daily-record {
	position: absolute;
	top: 235px;
	left: 68px;
}

#memo {
	position: absolute;
	top: 235px;
	left: 342px;
}

#schedule-big {
	width: 343px;
	position: absolute;
	top: 234px;
	left: 55px;
	// height: 445px;
}
#schedule-small {
	width: 264px;
	position: absolute;
	top: 234px;
	left: 262px;
}

#account-book {
	position: absolute;
	top: 400px;
	left: 95px;
}
#todo-list-color {
	position: absolute;
	top: 713px;
	left: 60px;
}
#todo-list {
	position: absolute;
	top: 713px;
	left: 305px;
}
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
.dragdrop-main__body {
	display: flex;
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
	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 20px;
	background-color: $off-white;
}
.dragdrop-main__canvas {
	width: 133mm;
	height: 195mm;
	// border-radius: 3px;
}
.dragdrop-main__header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.dragdrop-main-canvas__body {
	overflow: hidden;
	height: 687px;
	// display: inline-block;
	// display: flex;
}
.border-purple {
	border: 0.5px dotted $off-purple;
}
.dragdrop-save-button {
	margin: 19.6px 65.5px 19.6px 802px;
}
// .dragdrop-main__canvas {
// 	padding-right: 1rem;
// 	margin-top: 1rem;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// }
// .dragdrop-main__canvas__left {
// 	width: 473px;
// 	height: 668px;
// 	object-fit: contain;
// 	border-radius: 3px;
// 	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
// 	background-color: $off-white;
// }
// .dragdrop-main__canvas__right {
// 	width: 473px;
// 	height: 668px;
// 	object-fit: contain;
// 	border-radius: 3px;
// 	box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.1);
// 	background-color: $off-white;
// }
</style>
