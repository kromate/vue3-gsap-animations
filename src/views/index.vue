
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
				<router-link to="/animations/pageOne" class="card cardx" v-for="n in 5" :key="n">
					<span class="absolute text-3xl font-bold num -top-5 -right-5 uppercase transition-all duration-500">Animation - 0{{n}}</span>
					<span class="sub text-sm card_text block ">This is the same as the website intro, Just with a reverse button added</span>
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

</script>

<style scoped lang="scss">
@import url('../assets/style/animation-styles/landingPage')

</style>