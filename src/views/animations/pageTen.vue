
<template>
	<div class="container">
		<div class="next-screen">
			<svg class="reverse" viewBox="0 0 492 492" @click="reverse">
				<g>
					<g>
						<path
							d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
          C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
          c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
          l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"
						/>
					</g>
				</g>
			</svg>

			<h1>
				<span>Portrait</span><br />
				Photography
			</h1>

			<div class="header"></div>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
				molestias atque distinctio similique dolore maxime praesentium itaque ea
				odio suscipit cupiditate nam nostrum! Dolorum eveniet saepe voluptates
				fugiat animi maxime vel hic dicta omnis sunt!
			</p>
		</div>

		<div class="screen-1">
			<div class="top">
				<h1>
					<span>Portrait</span><br />
					Photography
				</h1>
			</div>

			<div class="button" @click="play">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 492.004 492.004"
				>
					<g>
						<g>
							<path
								d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
            c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
            c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
            c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"
							/>
						</g>
					</g>
				</svg>
			</div>

			<div class="loading">Fetching Article...</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {gsap} from 'gsap'

const t1 = gsap.timeline({ paused: true, reversed: true })

const play = () => t1.play()

const reverse = () => t1.reverse()
	
onMounted(()=>{

	//Screen 1 Arrow Rotation
	t1.to('.button svg', {
		ease: 'power1.inOut',
		rotate:90,
	})

	//Screen 1 Arrow Rotation Hide
	t1.to('.button svg', {
		ease: 'power1.inOut',
		duration: 0.2,
		y: -10,
		opacity: 0,
	})

	//Screen 1 Arrow Rotation Y axis moving Position
	t1.to('.button', {
		ease: 'power1.inOut',
		yPercent: 114,
	})

	// Screen 1 Image Height Scale Transition
	t1.to(
		'.top',
		{
			ease: 'power1.inOut',
			height: 380,
		},
		0.6
	)


	// Screen 1 Article Fetching 
	t1.to(
		'.button',
		{
			ease: 'power1.inOut',
			yPercent: 166,
			borderRadius: 0,
			scaleX: 10,
			scaleY: 2.6,
		},
		1.1
	)

	t1.from('.loading', {
		ease: 'power1.inOut',
		opacity: 0,
		y: 50,
	})

	t1.to('.loading', {
		ease: 'power1.inOut',
		opacity: 0,
		x: 200,
		delay: 0.5,
	})

	// Next Screen BG Duration
	t1.from('.next-screen', {
		ease: 'power1.inOut',
		yPercent: 100,
		duration: .5,
	})

	// Next Screen top SVG Arrow Duration
	t1.from('.next-screen svg', {
		ease: 'power1.inOut',
		xPercent: -250,
		duration: 0.5,
	}) 
    
	// Next Screen H1 Heading Duration
	t1.from('.next-screen h1', {
		ease: 'power1.inOut',
		scale: 0,
		opacity: 0,
		duration: 0.3,
	}) 

	// Next Screen Banner Duration
	t1.from('.header', {
		ease: 'power1.inOut',
		scale: 0,
		opacity: 0,
		duration: 0.3,
	}) 

	// Next Screen Paragraph Duration
	t1.from('.next-screen p', {
		ease: 'power1.inOut',
		scale: 0,
		opacity: 0,
		duration: 0.3,
	}) 

	t1.to('.container', {
		ease: 'power1.inOut',
		backgroundColor: '#101010',
		duration: 0.1,
	})

	// Next Screen Entire section X & Y axis Duration
	t1.to('.next-screen', {
		ease: 'power1.inOut',
		yPercent: -5,
		duration: 1,
	}) 

	t1.to('.next-screen', {
		ease: 'power1.inOut',
		yPercent: 0,
		duration: 1,
	}) 

})
</script>

<style>

body {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-family: 'poppins', sans-serif;
	line-height: 1.7;
	position: relative;
	/* background-color: #cbdad6; */
	height: 100vh;
background-color: #5b6467;
background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
}

.container {
	position: absolute;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	overflow: hidden;
	background-color: #fff;
	width: 300px;
	height: 560px;
	border-radius: 30px;
	-webkit-box-shadow: 0px 56px 72px -30px rgba(81, 108, 95, 0.46);
	box-shadow: 0px 56px 72px -30px rgba(81, 108, 95, 0.46);
background-color: #b8c6db;
background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
}

.next-screen {
	position: absolute;
	background-color: #101010;
	width: 100%;
	padding: 40px 25px 0 25px;
	z-index: 100;
}

.screen-1 .top {
	position: relative;
	margin-top: 25px;
	width: 100%;
	height: 300px;
	background: url('../../assets/images/pageTen/bg-1.jpg');
	background-size: cover;
	border-radius: 20px;
	overflow: hidden;
}

.screen-1 {
	padding: 40px 25px 0 25px;
}

.screen-1 img {
	height: 16px;
}

.screen-1 .top h1 {
	text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.86);
	position: absolute;
	bottom: 0;
	color: #fff;
	padding: 40px 20px;
	line-height: 1;
	z-index: 1;
}

.screen-1 .top h1 span {
	font-size: 24px;
	font-weight: 600;
}

.screen-1 .button {
	position: absolute;
	left: 50%;
	top: 84%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	width: 42px;
	height: 42px;
	background-color: #101010;
	border-radius: 50%;
	z-index: 200;
	cursor: pointer;
}

.screen-1 .button svg {
	position: absolute;
	left: 52%;
	top: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	fill: #fff;
	height: 16px;
	width: 16px;
}

.screen-1 .loading {
	position: absolute;
	bottom: 16px;
	font-size: 14px;
	left: 40px;
	font-weight: 500;
	z-index: 210;
	color: #cacaca;
}

.next-screen svg {
	width: 18px;
	height: 18px;
	fill: #fff;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	cursor: pointer;
}

.next-screen h1 {
	color: #fff;
	margin-top: 20px;
	line-height: 1;
}

.next-screen h1 span {
	font-size: 24px;
	font-weight: 600;
}

.next-screen .header {
	width: 100%;
	height: 150px;
	background: url('../../assets/images/pageTen/bg-1.jpg');
	border: 20px;
	background-size: cover;
	background-position: center;
	margin-top: 40px;
}

.next-screen p {
	color: #fff;
	position: relative;
	margin-top: 20px;
	font-size: 14px;
	line-height: 2;
	padding-bottom: 25px;
}
</style>
