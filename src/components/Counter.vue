<template lang="">
	<div class="counter">
		<h2>{{ customTitle }}</h2>
		<p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
		<div class="counter__buttons">
			<button @click="increment">+1</button>
			<button @click="decrement">-1</button>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Counter',
	props: {
		title: String,
		start: {
			type: Number,
			default: 0,
			validator: (value: number) => value >= 0,
		},
	},
	data() {
		return {
			counter: this.start || 0,
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
		decrement() {
			this.counter--;
		},
	},
	computed: {
		squareCounter() {
			return this.counter * this.counter;
		},
		customTitle() {
			return this.title || 'Counter';
		},
	},
};
</script>

<style scoped>
.counter {
	text-align: center;
}

.counter__buttons {
	padding: 32px;
}

button {
	background: #fff;
	border-radius: 4px;
	border: 1px solid #ccc;
	cursor: pointer;
	margin: 0 4px;
	padding: 8px;
}
button:hover {
	background: #eee;
}
</style>
