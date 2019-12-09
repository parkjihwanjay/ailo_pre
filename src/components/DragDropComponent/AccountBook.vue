<template>
	<div class="account" @mouseover="enterHover()" @mouseout="outHover()">
		<div class="account-header">
			<h2>Account Book</h2>
			<div class="account-delete-btn btn" @click="deleting()" v-show="hover">✕</div>
		</div>

		<div class="account__container">
			<div class="account-box">
				<table>
					<tr class="account-box__top">
						<td>Contents</td>
						<td class="table-second-td">Price</td>
						<td>Card/Cash</td>
					</tr>
					<tr class="account-box__main" v-for="index in accountNum" :key="index">
						<td>.</td>
						<td class="table-second-td">.</td>
						<td @click="reducing()" :class="{ 'account-td-delete-btn': hover }">x</td>
					</tr>
				</table>
			</div>
			<div class="account-box-add btn" v-show="hover" @click="adding()">+</div>
		</div>

		<div class="account-total">
			<div class="account-total-header">
				<h2>Total</h2>
				<div></div>
			</div>
			<table class="account-total__table">
				<tr>
					<td>Card</td>
					<td class="table-second-td">Cash</td>
					<td>Total</td>
				</tr>
				<tr>
					<td>.</td>
					<td class="table-second-td">.</td>
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
			accountNum: 5,
		};
	},
	methods: {
		adding() {
			return this.accountNum++;
		},
		reducing() {
			return this.accountNum--;
		},
	},
};
</script>

<style>
.account-total__table > tr:last-child,
.account-box__main > td {
	color: transparent;
}

.account {
	width: 225px;
	margin-bottom: 30px;
}

.account-header {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.account-td-delete-btn {
	color: black !important;
	text-align: right;
}
.account-delete-btn {
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

.account__container {
	width: 100%;
	margin-bottom: 10px;
}
.account-box {
	width: 100%;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
}
.account-box > table {
	width: 100%;
	border-collapse: collapse;
	font-size: 14px;
}
.account-box__top {
	border-bottom: 1px solid gray;
}
.account-box__top > td {
	width: 33.333%;
	padding: 7px 0;
}
.account-box__main > td {
	width: 33.333%;
	padding: 7px 0;
}
.table-second-td {
	border-left: 1px solid gray;
	border-right: 1px solid gray;
}
.account-box__main {
	border-bottom: 1px dotted gray;
}
.account-box__main:last-child {
	border-bottom: 0;
}
.account-box-add {
	background-color: #bcbcbc;
	margin-top: 5px;
}

.account-total-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.account-total__table {
	width: 100%;
	font-size: 14px;
	border-collapse: collapse;
}
.account-total__table > tr > td {
	padding: 7px 0;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
}
</style>
