<template>
	<div class="schedule">
		<h2>schedule</h2>
		<div class="schedule-top">
			<p style="color: white">00</p>
			<p>10</p>
			<p>20</p>
			<p>30</p>
			<p>40</p>
			<p>50</p>
			<p style="color: white">60</p>
		</div>
		<div class="schedule-box" v-for="(time, index) in times" :key="index">
			<p class="schedule-box__times">{{ time }}</p>
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
export default {
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
p {
	font-size: 1.1rem;
}
* {
	margin: 0;
}
/* .schedule {
	width: 450px;
} */
.schedule-top {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.schedule-box {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.schedule-box__times {
	font-size: 1.1rem;
	/* width: 5%; */
}
.schedule-box__time-table {
	width: 95%;
	border-top: 1px solid gray;
	border-collapse: collapse;
}
.schedule-box:last-child > .schedule-box__time-table {
	border-bottom: 1px solid gray;
}
.schedule-box__time-table__tr > td {
	border-left: 0.5px dotted gray;
}
.schedule-box__time-table__tr > td:nth-child(1) {
	border: none;
}
</style>
