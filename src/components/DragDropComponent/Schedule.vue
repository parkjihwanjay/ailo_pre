<template>
	<div class="schedule" @mouseover="enterHover()" @mouseout="outHover()">
		<div class="schedule-header">
			<h2>schedule</h2>
			<div class="schedule-delete-btn btn" v-show="hover" @click="deleting()">✕</div>
		</div>
		<div class="schedule-top">
			<div style="color:transparent">00</div>
			<div class="header-time">
				<p>10</p>
				<p>20</p>
				<p>30</p>
				<p>40</p>
				<p>50</p>
			</div>
			<div style="color:transparent">60</div>
		</div>
		<div class="schedule-box" v-for="(time, index) in times" :key="index">
			<div class="schedule-box__times">{{ time }}</div>
			<table class="schedule-box__time-table">
				<tr class="schedule-box__time-table__tr">
					<td>.</td>
					<td>.</td>
					<td>.</td>
					<td>.</td>
					<td>.</td>
					<td>.</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import dragdropHover from '../../mixin/DragDropComponentMixins.js';
export default {
	mixins: [dragdropHover],
	data() {
		return {
			times: [
				'06',
				'07',
				'08',
				'09',
				'10',
				'11',
				'12',
				'13',
				'14',
				'15',
				'16',
				'17',
				'18',
				'19',
				'20',
				'21',
				'22',
				'23',
				'24',
			],
		};
	},
};
</script>

<style>
.schedule-box__time-table__tr > td {
	color: transparent;
}

* {
	margin: 0;
}

.schedule-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.schedule-delete-btn {
	background-color: #727272;
	border-radius: 50%;
	width: 20px;
	height: 20px;
	color: white;
	font-size: 12px;

	display: flex;
	justify-content: center;
	align-items: center;
}

.header-time {
	width: 64.41%;
	padding-left: 10.4%;

	display: flex;
	justify-content: space-between;
}
/* .schedule {
	width: 264px;
} */
.schedule-top {
	display: flex;
	justify-content: space-between;
	/* flex-direction: row; */
	/* justify-content: space-between; */
	/* align-items: center; */
}
.schedule-box {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.schedule-box__times {
	/* text-align: right; */
	font-family: 'Avenir', Arial, Helvetica, sans-serif;
	/* width: 10%; */
}
.schedule-box__time-table {
	width: 90%;
	border-top: 1px solid gray;
	border-collapse: collapse;
}
.schedule-box:last-child > .schedule-box__time-table {
	border-bottom: 1px solid gray;
}
.schedule-box__time-table__tr > td {
	border-left: 0.5px dotted gray;
	width: 16.666%;
}
.schedule-box__time-table__tr > td:nth-child(1) {
	border: none;
}
</style>
