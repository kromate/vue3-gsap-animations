
<template>
	<div class=" w-screen overflow-x-hidden h-screen bg-white cursor-crosshair ">

		<div class="overlay bg-[#101010] z-10 h-screen w-screen absolute inset-0 center  flex-col md:flex-row gap-5 ">
			<p class="screen text-[#323232] font-extrabold md:text-9xl text-[55px] leading-[60px] flex flex-col opacity-100">
				<span class="hover:text-[#42b883]  transition-all duration-500" >Vue 3</span>
				<span class="hover:text-[#5876e3] transition-all duration-500">Gsap</span>
				<span class="hover:text-[#e36868] transition-all duration-500">Animations</span>
			</p>
			<div class="intro">
				<button class="myBtn md:py-6 py-3 md:px-12 px-6 font-bold border-2 text-xs md:text-base" @click="fadeOut">EXPLORE</button>
			</div>
		</div>

		<div class="overlay-2 "></div>

		<div class="content bg-white  w-full px-5 text-center">
			<h1 class="text-5xl font-bold uppercase mt-10 mb-4">Enjoy!</h1>
			<p class="mb-16 w-[40rem] max-w-[100%] mx-auto">This is a collection of various GSAP animations found on the internet (GitHub/Codepen/Youtube) rewritten in vue3 and made responsive</p>
			<div class="flex flex-wrap px-10 justify-center w-full mx-auto gap-8 gap-y-12 pb-12">
				<router-link :to="n.link" class="card cardx" v-for="n in animationPageList" :key="n" target="_blank">
					<span class="absolute text-3xl font-bold num -top-5 -right-5 uppercase transition-all duration-500">Animation - 0{{n.index}}</span>
					<span class="sub text-sm card_text block ">{{n.desc}}</span>
					<div class="explore text-white center font-bold text-3xl " >
						<span>View </span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { fadeOut } from '@/assets/scripts/animation-scripts/landingPage'
import { animationPageList } from '@/composables/utils'
</script>

<style scoped lang="scss">
@import url('../assets/style/animation-styles/landingPage')

</style>

// Passion Project Nine - Vue3 Animations 

// So I decided I need a solid open-source project on Vue 3 animations and so I searched the web for various web animation (mostly GSAP) and recreated them in Vue with responsiveness

// Github:- https://github.com/kromate/vue3-gsap-animations
// website:- https://vue3-animations.netlify.app/