<template lang="">
	<div class="counter">
		<h2>Counter</h2>
		<p>{{ counter }}<sup>2</sup> = {{ counter * counter }}</p>
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
};
</script>

<style scoped>
.counter {
	text-align: center;
}
</style>
