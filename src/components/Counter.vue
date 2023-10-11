<template lang="">
	<div class="counter">
		<h2>Counter</h2>
		<p>{{ counter }}<sup>2</sup> = {{ squareCounter }}</p>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Counter',
	data() {
		return {
			counter: 10,
		};
	},
	methods: {
		getSquare() {
			return this.counter * this.counter;
		},
	},
	computed: {
		squareCounter() {
			return this.counter * this.counter;
		},
	},
};
</script>

<style scoped>
.counter {
	text-align: center;
}
</style>
