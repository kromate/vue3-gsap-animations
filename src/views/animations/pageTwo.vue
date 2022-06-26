<template>
	<div class="body px-5">
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

		<p class="mt-3">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
			possimus pariatur omnis voluptatibus aspernatur, minus labore adipisci,
			consequatur excepturi aliquam voluptatem eligendi nisi fugiat. Corporis
			vero necessitatibus dignissimos illum ducimus! Lorem ipsum dolor sit amet
			consectetur adipisicing elit.
		</p>

		<p @click="replay" class="bg-black px-9 py-2 !text-white mt-5 cursor-pointer">
			Replay
		</p>

		<div class="welcome">
			<h1 class="heading">Anthony Akpan</h1>
			<h3 class="sub-heading">Frontend Developer</h3>
			<div class="loader-wrapper">
				<div class="loader"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const timeline = gsap.timeline({ ease: 'Expo.easeOutIn', duration: 1.8, delay:0 })
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
			duration: 0.8,
		}
	)

	timeline.fromTo('.heading', { y: '-30px' }, { y: 0, opacity: 1 })
	timeline.fromTo('.sub-heading', { y: '-30px' }, { y: 0, opacity: 1 })
	timeline.to('.loader-wrapper', { opacity: 1 })
	timeline.fromTo('.loader', { width: '0%' }, { width: '100%', duration: 2.3 })
	timeline.to('.welcome', { x: '100vw', display: 'none' })
	timeline.fromTo('p', { y: '-30px' }, { y: 0, opacity: 1, stagger: 0.35 })
})

const replay = () => timeline.seek(0)
</script>

<style scoped>
.body {
	height: 100vh;
	width: 100vw;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	overflow-x: hidden;
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
