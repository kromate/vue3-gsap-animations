<template>
	<div class="container overflow-hidden h-screen bg-white cursor-crosshair">

		<div class="overlay bg-[#101010] z-10 h-screen w-screen absolute inset-0 center flex flex-col md:flex-row gap-5">
			<p class="screen text-[#323232] font-extrabold md:text-9xl text-[55px] leading-[60px] flex flex-col">
				<span class="hover:text-[#42b883]  transition-all duration-500" >Vue 3</span>
				<span class="hover:text-[#5876e3] transition-all duration-500">Gsap</span>
				<span class="hover:text-[#e36868] transition-all duration-500">Animations</span>
			</p>
			<div class="intro">
				<button class="myBtn md:py-6 py-3 md:px-12 px-6 font-bold border-2 text-xs md:text-base" @click="fadeOut">EXPLORE</button>
			</div>
		</div>

		<div class="overlay-2"></div>

		<div class="content bg-white h-screen w-full px-5 pt-10">
			<h1 class="text-5xl font-bold uppercase mb-5">Enjoy!</h1>
			<p class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eaque blanditiis culpa, voluptate reprehenderit sapiente quibusdam odio eum beatae autem quaerat tempora et vitae sint, porro assumenda distinctio eos?
				Nesciunt!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import {gsap} from 'gsap'
const fadeOut =()=> {

	gsap.to('.myBtn', 0.5, {
		y: -100,
		opacity: 0
	})

	gsap.to('.screen', 1, {
		y: -400,
		opacity: 0,
		ease: 'Power2.easeInOut',
		delay: 0.5
	})

	gsap.to('.overlay', 1, {
		delay: 1,
		top: '-110%',
		ease: 'Expo.easeInOut'
	})

	gsap.to('.overlay-2', 1, {
		delay: 1.5,
		top: '-110%',
		ease: 'Expo.easeInOut',
		duration:0.1
	})

	gsap.from('.content', 1, {
		delay: 2,
		opacity: 0,
		ease: 'Power2.easeInOut'
	})

	gsap.to('.content', 1, {
		opacity: 1,
		delay: 2,
		ease: 'Power2.easeInOut'
	})

}

</script>

<style scoped>



.overlay-2 {
     z-index: 0;
     position: absolute;
     width: 100%;
     height: 100vh;
     background: #59b0ad;

}

button {
     letter-spacing: 6px;
     color: #fff;
     text-transform: uppercase;
     outline: none;
     overflow: hidden;
     background: none;
     z-index: 1;
     cursor: crosshair;
     transition: 0.8s ease-out;
}

.myBtn:hover {
     color: #101010;
     cursor: crosshair;
     border: 2px solid #101010;
}

.myBtn:before {
     content: "";
     position: absolute;
     background: #fff;
     bottom: 0;
     left: 0;
     right: 0;
     top: 100%;
     z-index: -1;
     transition: top 0.65s ease-out;
}

.myBtn:hover:before {
     top: 0;
}

</style>