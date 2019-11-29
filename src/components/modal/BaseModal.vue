<template>
	<div class="basic-modal font-Noto object-contain">
		<p class="base-title object-contain">다이어리 만들기</p>
		<div class="base-setting object-contain">기본 설정</div>
		<div class="base-setting--body">
			<template name="섹션">
				<p class="basic--title object-contain">섹션 선택</p>
				<div class="input-checkbox flex">
					<div v-for="section in basic_customizing.section" :key="section.name">
						<input
							class="basic-section--body-input"
							type="checkbox"
							:name="section.name"
							v-model="section.checked"
						/>
						<label class="basic-section--body-label object-contain" :for="section">{{
							section.name
						}}</label>
					</div>
				</div>
			</template>

			<template name="배열">
				<p class="basic--title basic-array--title">배열</p>
				<div class="basic-array--descript object-contain">월간 일정과 일간 일정의 배열 순서</div>
				<div class="basic-array--body">
					<input type="radio" name="array" v-model="basic_customizing.array" value="M-D-M-D" />
					<label class="basic-radio object-contain" for="select">M-D-M-D</label>
					<input type="radio" name="array" v-model="basic_customizing.array" value="MM-DD" />
					<label class="basic-radio object-contain" for="select">MM-DD</label>
				</div>
			</template>

			<template name="기간">
				<div class="basic--title">기간</div>
				<div class="flex">
					<div class="basic-term--body" v-for="label in term_label" :key="label">
						<input
							class="basic-term--body-input"
							:value="label"
							type="radio"
							:name="term"
							v-model="term"
						/>
						<label class="basic-radio object-contain" :for="term">{{ label }}</label>
					</div>
				</div>
			</template>
		</div>
		<template name="템플릿 선택">
			<div class="base-setting basic-template--title object-contain">템플릿 선택</div>
			<div class="base-setting--body">
				<div class="basic-template--select">
					<div class="basic-template--book object-contain"></div>
					<div class="basic--title basic-template--name">심플 다이어리</div>
					<input
						type="button"
						value="선택"
						@click="template_click('심플')"
						class="small-button"
						:class="{ button_clicked: basic_customizing.template === '심플' }"
					/>
					<!-- <div class="basic-template--button object-contain flex">
						<div class="basic-template--button-text">선택</div>
					</div> -->
				</div>
			</div>
		</template>

		<template name="Daily 설정">
			<div class="base-setting  object-contain">Daily 설정</div>
			<div class="base-setting--body">
				<div class="basic--title">1 페이지 당</div>
				<div class="basic-daily--body flex">
					<div class="basic-daily--body-section">
						<div class="basic--title basic-array--title">1일</div>
						<div class="basic-array--descript object-contain">최대 6개 구성 선택 가능</div>
						<input type="button" value="선택" class="small-button" />

						<!-- <div class="basic-template--button object-contain flex">
							<div class="basic-template--button-text">선택</div>
						</div> -->
					</div>
					<div class="basic-daily--body-section">
						<div class="basic--title basic-array--title">2일</div>
						<div class="basic-array--descript object-contain">최대 4개 구성 선택 가능</div>
						<input type="button" value="선택" class="small-button" />

						<!-- <div class="basic-template--button object-contain flex">
							<div class="basic-template--button-text">선택</div>
						</div> -->
					</div>
					<div class="basic-daily--body-section">
						<div class="basic--title basic-array--title">4/3일</div>
						<div class="basic-array--descript object-contain">최대 2개 구성 선택 가능</div>
						<input type="button" value="선택" class="small-button" />

						<!-- <div class="basic-template--button object-contain flex">
							<div class="basic-template--button-text">선택</div>
						</div> -->
					</div>
					<div class="basic-daily--body-section">
						<div class="basic--title basic-array--title">7일</div>
						<div class="basic-array--descript object-contain">최대 1개 구성 선택 가능</div>
						<input type="button" value="선택" class="small-button" />

						<!-- <div class="basic-template--button object-contain flex">
							<div class="basic-template--button-text">선택</div>
						</div> -->
					</div>
				</div>
				<div class="basic--title">기본 구성</div>
				<div class="input-checkbox flex">
					<div v-for="component in basic_customizing.basic_component" :key="component.label">
						<input
							class="basic-section--body-input"
							type="checkbox"
							:name="component.label"
							v-model="component.checked"
						/>
						<label class="basic-section--body-label object-contain" :for="component">{{
							component.label
						}}</label>
					</div>
				</div>
			</div>
		</template>

		<template name="마지막 버튼">
			<div class="basic-button-box--big flex">
				<input type="button" value="취소" class="big-button" />
				<router-link to="/pre/DragDrop">
					<input type="button" value="적용하기" class="big-button" />
				</router-link>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'BaseModal',
	methods: {
		template_click(value) {
			this.basic_customizing.template = value;
		},
	},
	data() {
		return {
			basic_customizing: {
				section: [
					{
						name: 'Prologue',
						checked: true,
					},
					{
						name: 'Epilogue',
						checked: true,
					},
					{
						name: 'Yearly',
						checked: true,
					},
					{
						name: 'Monthly',
						checked: true,
					},
					{
						name: 'Daily',
						checked: true,
					},
				],
				array: '',
				startDate: '',
				endDate: '',
				template: '',
				basic_component: [
					{
						name: 'dailyPlanner',
						label: '24시간 플래너',
						checked: true,
					},
					{
						name: 'todo',
						label: 'TodoList',
						checked: true,
					},
					{
						name: 'dailyDiary',
						label: '일기장',
						checked: true,
					},
					{
						name: 'photoAlbum',
						label: '포토앨범',
						checked: false,
					},
					{
						name: 'accountBook',
						label: '가계부',
						checked: false,
					},
					// {
					// 	name: '가계부',
					// 	checked: false,
					// },
					{
						name: 'D-day',
						label: 'D-day',
						checked: false,
					},
				],
			},
			term_label: ['1년', '6개월', '3개월', '1개월'],
			term: '',
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/styles/_variables.scss';
@import '@/styles/_button.scss';
.object-contain {
	object-fit: contain;
}
.font-Noto {
	font-family: $basic-font;
}
.flex {
	display: flex;
}
.button_clicked {
	background-color: $off-purple;
	color: $off-white;
}
.basic-modal {
	margin: auto auto;
	width: 1240px;
	height: 1397px;
	border-radius: 3px;
	box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 0.2);
	background-color: $off-white;
}
.base-title {
	width: 187px;
	height: 50px;
	font-size: 28px;
	font-weight: 300;
	line-height: 1.79;
	color: #303234;
	margin: 0 auto;
	padding-top: 20px;
}
.basic-template--select {
	width: 104px;
}
.base-setting {
	font-size: 20px;
	font-weight: bold;
	line-height: 1.4;
	color: #000000;
	margin-left: 40px;
	margin-top: 30px;
}
.base-setting--body {
	margin-top: 29px;
	margin-left: 56px;
}
.basic--title {
	font-size: 16px;
	line-height: 1.38;
	color: #000000;
	margin-top: 15px;
}
.basic-section--body-label {
	font-size: $s-size;
	line-height: 1.71;
	color: #464855;
	margin-left: 10px;
	margin-right: 10px;
}
.basic-array--title {
	margin-top: 15px;
	display: inline-block;
}
.basic-array--descript {
	font-size: $s-size;
	line-height: 1.57;
	color: #747e80;
	display: inline-block;
	margin-left: 10px;
}
.basic-radio {
	font-size: $s-size;
	line-height: 1.71;
	color: #464855;
	margin-left: 10px;
	margin-right: 10px;
}
.basic-template--book {
	width: 104px;
	height: 148px;
	background-color: rgba(102, 51, 153, 0.5);
}
.basic-template--name {
	margin: 12px 0;
	text-align: center;
	line-height: 1.5;
}
/* .basic-template--button-text {
	font-size: 14px;
	line-height: 1.14;
	color: #663399;
	margin: auto auto;
} */
.basic-daily--descript {
	font-size: 14px;
	font-weight: 500;
	line-height: 1.71;
	color: #747e80;
}
.basic-daily--body {
	margin-top: 50px;
	margin-bottom: 50px;
}
.basic-daily--body-section {
	margin-right: 30px;
}
.input-checkbox {
	margin-top: 15px;
}
.basic-button-box--big {
	margin-top: 80px;
	margin-left: 813px;
}
.basic-button-big {
	width: 180px;
	height: 49.8px;
	border-radius: 40px;
	margin-right: 20px;
	border: solid 3px $off-purple;
	font-size: 14px;
	font-weight: 500;
	line-height: 1.57;
	color: $off-purple;
	letter-spacing: 1.58px;
	text-align: center;
}
.basic-button-big:hover {
	background-color: $off-purple;
	color: $off-white;
}
</style>
