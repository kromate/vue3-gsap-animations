<template>
	<div class="container overflow-hidden">

		<div class="overlay bg-[#101010] z-10 h-screen w-screen absolute inset-0 center">
			<p class="screen text-[#323232] font-extrabold md:text-9xl text-6xl flex flex-col ">
				<span >Vue 3</span>
				<span>Gsap</span>
				<span>Animations</span>
			</p>
			<div class="intro">
				<button class="myBtn" @click="fadeOut">EXPLORE</button>
			</div>
		</div>

		<div class="overlay-2"></div>

		<div class="content">
			<h1>Landing Page</h1>
			<p class="data">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eaque blanditiis culpa, voluptate reprehenderit sapiente quibusdam odio eum beatae autem quaerat tempora et vitae sint, porro assumenda distinctio eos?
				Nesciunt!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import {gsap} from 'gsap'
const fadeOut =()=> {

	gsap.to('.myBtn', 1, {
		y: -100,
		opacity: 0
	})

	gsap.to('.screen', 2, {
		y: -400,
		opacity: 0,
		ease: 'Power2.easeInOut',
		delay: 1.5
	})

	gsap.from('.overlay', 2, {
		ease: 'Power2.easeInOut'
	})

	gsap.to('.overlay', 2, {
		delay: 2,
		top: '-100%',
		ease: 'Expo.easeInOut'
	})

	gsap.to('.overlay-2', 2, {
		delay: 3,
		top: '-110%',
		ease: 'Expo.easeInOut'
	})

	gsap.from('.content', 2, {
		delay: 3.2,
		opacity: 0,
		ease: 'Power2.easeInOut'
	})

	gsap.to('.content', 2, {
		opacity: 1,
		y: -300,
		delay: 3.2,
		ease: 'Power2.easeInOut'
	})

}

</script>

<style scoped>


.content {
     width: 60%;
     margin: 0 auto;
     z-index: -1;
     position: absolute;
     top: 60%;
     left: 10%;
     transform: translate(0, -50%);
}

.content h1 {
     font-family: Poppins;
     font-size: 54px;
     color: #101010;
     font-weight: 700;
     text-transform: uppercase;
     margin-bottom: 10px;
}

.content p {
     margin-top: 0;
     text-align: left;
     color: #101010;
     font-weight: 400;
}

.overlay-2 {
     z-index: 0;
     position: absolute;
     width: 100%;
     height: 100vh;
     background: #50a9a6;
}








button {
     display: block;
     padding: 24px 48px;
     font-family: Poppins;
     font-weight: 700;
     font-size: 12px;
     letter-spacing: 6px;
     color: #fff;
     border: 2px solid #fff;
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
     transition: top 0.8s ease-out;
}

.myBtn:hover:before {
     top: 0;
}

</style>