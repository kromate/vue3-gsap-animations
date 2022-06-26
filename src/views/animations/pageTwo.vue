<template>
	<div class="body">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
			possimus pariatur omnis voluptatibus aspernatur, minus labore adipisci,
			consequatur excepturi aliquam voluptatem eligendi nisi fugiat. Corporis
			vero necessitatibus dignissimos illum ducimus! Lorem ipsum dolor sit amet
			consectetur adipisicing elit. Architecto possimus pariatur omnis
			voluptatibus aspernatur, minus labore adipisci, consequatur excepturi
			aliquam voluptatem eligendi nisi fugiat. Corporis vero necessitatibus
			dignissimos illum ducimus!
		</p>

		<p id="second-p">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
			possimus pariatur omnis voluptatibus aspernatur, minus labore adipisci,
			consequatur excepturi aliquam voluptatem eligendi nisi fugiat. Corporis
			vero necessitatibus dignissimos illum ducimus! Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
		</p>

		<div class="welcome">
			<h1 class="heading">Max Mustermann</h1>
			<h3 class="sub-heading">UI-Designer & Web Developer</h3>
			<div class="loader-wrapper">
				<div class="loader"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import { gsap } from 'gsap'

const timeline = gsap.timeline()
onMounted(() => {
	timeline.fromTo(
		'.welcome',
		{
			width: '0vw',
			opacity: 0,
		},
		{
			width: '100vw',
			opacity: 1,
			duration: 1.2,
		}
	)

	timeline.fromTo('.heading', {},{})
	timeline.fromTo('.sub-heading', {},{})
	timeline.fromTo('.loader', {},{})
	timeline.fromTo('.loader-wrapper', {},{})
	timeline.fromTo('p', {},{})
})
</script>

<style scoped>
.body {
	height: 100vh;
	width: 100vw;
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.welcome {
	height: 100vh;
	width: 100vw;
	position: absolute;
	background: #4a4a4a;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	letter-spacing: 2px;
	color: #fff;
}

.heading {
	font-family: 'Snell Roundhand';
	font-size: 50px;
	margin-bottom: 0px;
	opacity: 0;
}

.sub-heading {
	font-size: 16px;
	font-weight: 100;
	letter-spacing: 2px;
	font-family: 'Avenir Next';
	margin-bottom: 40px;
	opacity: 0;
}

.loader-wrapper {
	height: 2px;
	width: 150px;
	background: #ededed;
	border-radius: 100px;
	opacity: 0;
}

.loader {
	height: 2px;
	width: 150px;
	background: #fff;
	border-radius: 100px;
	background: #585858;
}

p {
	max-width: 500px;
	font-family: 'Avenir';
	line-height: 25px;
	text-align: justify;
	opacity: 0;
	color: #585858;
}
</style>
