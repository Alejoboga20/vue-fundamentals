<template>
	<img :src="image" alt="bg" v-if="image" />
	<div class="bg-dark"></div>
	<div class="indecision-container">
		<input type="text" placeholder="ask me a question" v-model="question" />
		<p>End your question with a question (?) mark</p>

		<div v-show="isValidQuestion">
			<h2>{{ question }}</h2>
			<h1>{{ answer }}</h1>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Indecision',
	data() {
		return {
			question: '',
			answer: '',
			image: '',
			isValidQuestion: false,
		};
	},
	methods: {
		async getAnswer() {
			this.answer = 'Thinking...';

			try {
				const response = await fetch('https://yesno.wtf/api');
				const { answer, image } = (await response.json()) as {
					answer: 'Yes' | 'No' | 'Maybe';
					image: string;
				};

				this.answer = answer;
				this.image = image;
			} catch (error) {
				this.answer = 'Something went wrong';
				this.image = '';
			}
		},
	},
	watch: {
		question(value) {
			console.log({ value });
			this.isValidQuestion = false;
			if (!value.endsWith('?')) return;

			this.isValidQuestion = true;
			this.getAnswer();
		},
	},
};
</script>

<style scoped>
img,
.bg-dark {
	height: 100vh;
	left: 0px;
	max-height: 100%;
	max-width: 100%;
	position: fixed;
	top: 0px;
	width: 100vw;
}

.bg-dark {
	background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
	position: relative;
	z-index: 99;
}

input {
	width: 250px;
	padding: 10px 15px;
	border-radius: 5px;
	border: none;
}
input:focus {
	outline: none;
}

p {
	color: white;
	font-size: 20px;
	margin-top: 0px;
}

h1,
h2 {
	color: white;
}

h2 {
	margin-top: 150px;
}
</style>
