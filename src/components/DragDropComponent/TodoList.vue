<template>
	<div class="todo" @mouseover="enterHover()" @mouseout="outHover()">
		<div class="todo-header">
			<h2>TodoList</h2>
			<div class="todo-delete-btn btn" v-on:click="deleting()" v-show="hover">✕</div>
		</div>

		<div :class="`todo-box-${todoV}__container`">
			<div :class="`todo-box-${todoV}`" v-for="index in todoNum" :key="index">
				<div class="todo-box__left">☐</div>
				<div v-show="hover" @click="reduce()" class="todo-box__right">x</div>
			</div>
			<div :class="`todo-box-${todoV}-add btn`" v-show="hover" v-on:click="adding()">+</div>
		</div>
	</div>
</template>

<script>
import dragdropHover from '../../mixin/DragDropComponentMixins.js';
export default {
	mixins: [dragdropHover],
	props: ['todoV'],
	data() {
		return {
			todoNum: 5,
		};
	},
	methods: {
		adding() {
			return this.todoNum++;
		},
		reduce() {
			return this.todoNum--;
		},
	},
};
</script>

<style>
.todo {
	margin-bottom: 20px;
	width: 225px;
}
.todo-header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.todo-delete-btn {
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

.todo-box-one-add,
.todo-box-two-add {
	background-color: #bcbcbc;
}
.todo-box-two-add {
	margin: 5px 0;
}
.btn:hover {
	cursor: pointer;
}

.todo-box-two__container {
	width: 100%;
}
.todo-box-one {
	width: 100%;
	background-color: #ececec;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
	padding: 5px 0;
	display: flex;
	justify-content: space-between;
}
.todo-box__left {
	text-align: center;
	width: 15%;
}
.todo-box__right {
	/* width: 85%; */
	margin-right: 10px;
}

.todo-box-two__container {
	width: 100%;
	padding: 5px 0;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
}
.todo-box-two {
	width: 100%;
	padding: 5px 0;
	display: flex;
	justify-content: space-between;
}
/* .todo-box-two__left {
	width: 15%;
}
.todo-box-two__right {
	width: 85%;
} */
</style>
