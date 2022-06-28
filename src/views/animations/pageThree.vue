<template>
	<div class="container" @click="onClick">
		<p class="card-name">Platinum Card</p>
		<h1 class="card-balance">$332,176.66</h1>
		<img class="logo" src="@/assets/images/pageThree/ring.png" alt="" />
		<img class="sim" src="@/assets/images/pageThree/sim.png" alt="" />

		<p class="card-number">**** **** 3322</p>
		<p class="due-date">07/25</p>

		<img src="@/assets/images/pageThree/pattern.png" class="card-logo" alt="" />
	</div>
</template>

<script setup lang="ts">
import {gsap} from 'gsap'
import { onMounted } from 'vue'

const t1 = gsap.timeline({ paused: true, reversed: true })
let watch = false


const onClick = () => {
	if (!watch) {
		t1.play()
		watch = true
	} else {
		t1.reverse()
		watch = false
	}
}
onMounted(()=>{
	t1.to('.container', {ease: 'power1.inOut',height: 280,},0)
	t1.to('.sim', {	ease: 'power1.inOut', bottom: 40, opacity: 0.5,}, 0.5)
	t1.to('.card-logo',	{ease: 'power1.inOut',right: -150,},0.6)
	t1.to('.logo', { ease: 'power1.inOut',left: 30,	top: 45,},0.5)
	t1.to('.card-balance',{ease: 'power1.inOut',y: 80,x: 20,scale: 1.1,},0.5)
	t1.to('.card-name', { ease: 'power1.inOut',	y: 80,},0.5)
	t1.to('.card-number',{ease: 'power1.inOut',	right: 40,opacity: 0.5,},0.5)
	t1.to( '.due-date', { ease: 'power1.inOut', right: 40, opacity: 0.5, }, 0.5 )
})



</script>

<style scoped>
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	-webkit-box-sizing: inherit;
	box-sizing: inherit;
}

body {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-family: 'poppins', sans-serif;
	line-height: 1.7;
	position: relative;
	background: linear-gradient(to top, #56e2d7 0%, #58cff1 100%);
	height: 100vh;
}

.container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: linear-gradient(to right bottom, #323941, #061018);
	width: 520px;
	height: 120px;
	border-radius: 20px;
	box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
	padding: 30px;
	cursor: pointer;
	overflow: hidden;
}

.container .logo {
	width: 50px;
	position: absolute;
	right: 30px;
	top: 45px;
}

.container .card-name {
	font-size: 14px;
	color: rgba(255, 255, 255, 0.473);
}

.container .card-balance {
	color: #fff;
	font-size: 22px;
}

.container .sim {
	width: 40px;
	position: absolute;
	bottom: -40px;
	opacity: 0;
}

.container .card-logo {
	position: absolute;
	top: -40px;
	right: -550px;
	height: 200px;
	transform: rotate(-12deg);
}

.container .card-number {
	right: -200px;
	position: absolute;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.473);
	bottom: 56px;
}

.container .due-date {
	right: -100px;
	position: absolute;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.473);
	bottom: 30px;
}
</style>
