<template>
	<div class=" w-screen overflow-x-hidden h-screen bg-white cursor-crosshair ">

		<div class="overlay bg-[#101010] z-10 h-screen w-screen absolute inset-0 center  flex-col md:flex-row gap-5 ">
			<p class="screen text-[#323232] font-extrabold md:text-9xl text-[55px] leading-[60px] flex flex-col">
				<span class="hover:text-[#42b883]  transition-all duration-500" >Vue 3</span>
				<span class="hover:text-[#5876e3] transition-all duration-500">Gsap</span>
				<span class="hover:text-[#e36868] transition-all duration-500">Animations</span>
			</p>
			<div class="intro">
				<button class="myBtn md:py-6 py-3 md:px-12 px-6 font-bold border-2 text-xs md:text-base" @click="fadeOut">EXPLORE</button>
			</div>
		</div>

		<div class="overlay-2 "></div>

		<div class="content bg-white  w-full px-5">
			<h1 class="text-5xl font-bold uppercase my-10">Enjoy!</h1>
			<div class="flex flex-wrap px-10 justify-center w-full mx-auto gap-8 gap-y-12 pb-12">
				<router-link to="/animations/pageOne" class="card relative border border-black rounded w-72 h-36 p-3 shadow text-xl card text-center " v-for="n in 5" :key="n">
					<span class="absolute text-6xl font-bold num -top-8 -right-5 uppercase">0{{n}}</span>
					<span class="title text-3xl font-bold mb-2 block ">Animation {{n}}</span> 
					<span class="sub text-sm card_text block">This is the same as the website intro, Just with a reverse button added</span>
				</router-link>
			</div>
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
.card::before, .card::after {
  position: absolute;
  background: #eee;
  z-index: -1;
  transition: 1s;
  content: '';
}

.card::before {
  height: 50px;
  width: 130px;
}

.card::after {
  width: 150px;
  height: 30px;
}

.num{
	 color: #333; /* this is the fallback */
  -webkit-text-stroke: 1px #333;
  -webkit-text-fill-color: transparent;
}



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
     cursor: pointer;
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