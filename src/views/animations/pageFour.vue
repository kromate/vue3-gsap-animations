<template>
	<div class="w-screen overflow-x-hidden">
		<div class="container mx-auto px-4">
			<nav class="flex justify-between mt-4 container mx-auto items-center">
				<div class="logo text-2xl">Clean Juice</div>

				<div class="menu-links text-xs lg:text-sm hidden lg:flex">
					<ul>
						<li>locations</li>
						<li>our menu</li>
						<li>our story</li>
						<li>meet our teem</li>
						<li>own a clean juice</li>
						<li>contact us</li>
					</ul>
				</div>

				<div class="cart bg-black p-2 text-white h-8 w-8 center rounded-full"><i class="i las la-shopping-cart"></i></div>
			</nav>

			<main class="flex flex-wrap items-center mt-12 justify-center">
				<div class="tagline lg:text-3xl text-lg">Find your clean juice</div>

				<div class="pages"><span>2</span>/21</div>

				<div class="title text-center">orange</div>

				<div class="more hidden md:block"><a href="#">show all the juices</a></div>

				<div class="desc hidden md:block">
					<p>
						Your <span>healthy</span> life <br>
						starts here with us
					</p>
					<p>
						A family owned company founded with the purpose of giving your family access to clean, organic products while
						you are on the go.
					</p>
				</div>
			</main>

			<div class="juice">
				<img src="@/assets/images/pageFour/juice.png">
			</div>

			<div class="leaves !z-50">
				<ul id="scene">
					<li class="layer" data-depth="-.1">
						<img src="@/assets/images/pageFour/leaf01.png" alt="">
					</li>
					<li class="layer" data-depth="-.3">
						<img src="@/assets/images/pageFour/leaf02.png" alt="">
					</li>
					<li class="layer" data-depth="-1.5">
						<img src="@/assets/images/pageFour/leaf03.png" alt="">
					</li>
					<li class="layer" data-depth=".1">
						<img src="@/assets/images/pageFour/leaf04.png" alt="">
					</li>
					<li class="layer" data-depth=".3">
						<img src="@/assets/images/pageFour/leaf05.png" alt="">
					</li>
				
				</ul>
			</div>

			<div class="arrows w-full lg:block">
				<button class="prev md:left-24 left-4"><i class="las la-chevron-left"></i></button>
				<button class="next md:right-24 right-4"><i class="las la-chevron-right"></i></button>
			</div>


		</div>
	</div>

</template>

<script setup lang="ts">
// @ts-ignore
import Parallax from 'parallax-js'
import { onMounted } from 'vue'
import {gsap} from 'gsap'
import { setTitle } from '@/composables/utils'
setTitle('Animation Four')

onMounted(()=>{
	    const scene = document.getElementById('scene')
	const parallax = new Parallax(scene)

	    gsap.from('.logo', 1, {
		opacity: 0,
		x: -20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.menu-links ul li', {
	  opacity: 0,
	  x: -20,
	  ease: 'Power3.easeInOut',
	  stagger:0.08,
	  duration:1
	})


	gsap.from('.cart', 1, {
		delay: .7,
		opacity: 0,
		x: -20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.juice', 1, {
		delay: 2,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.leaves .layer:nth-child(1)', 2, {
		delay: 2,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.leaves .layer:nth-child(2)', 2, {
		delay: 2.1,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.leaves .layer:nth-child(3)', 2, {
		delay: 2.2,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.leaves .layer:nth-child(4)', 2, {
		delay: 2.3,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.leaves .layer:nth-child(5)', 2, {
		delay: 2.5,
		opacity: 0,
		y: -800,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.title', 1, {
		delay: 1,
		opacity: 0,
		y: 20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.tagline', 1, {
		delay: 1.3,
		opacity: 0,
		y: 20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.pages', 1, {
		delay: 1.3,
		opacity: 0,
		y: 20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.more', 1, {
		delay: 1.4,
		opacity: 0,
		y: 20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.desc', 1, {
		delay: 1.4,
		opacity: 0,
		y: 20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.arrows', 1, {
		delay: 2,
		opacity: 0,
		ease: 'Expo.easeInOut'
	})
})
</script>

<style scoped>


body {
  width: 100%;
  height: 100vh;
  font-family: 'Montserrat';
  font-size: 12px;
  overflow: hidden;
}

ul {
  list-style: none;
}


.menu-links ul li {
  display: inline-block;
  padding-right: 20px;
}





.title {
  flex: 0 0 100%;
  font-size: 17vw;
  text-transform: uppercase;
  font-weight: 700;
}

.tagline {
  flex: 1;
  color: #999;
}

.pages {
  flex: 0;
  letter-spacing: 5px;
  color: #999;
}

.pages span {
  font-size: 60px;
  color: #000;
  font-weight: 600;
}

.more {
  flex: 1;
}

.more a {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  background: #000;
  padding: 10px 30px;
  border-radius: 10px;
}

.desc {
  flex: 0 0 32%;
}

.desc p:nth-child(1) {
  font-size: 30px;
  margin-bottom: 20px;
}

.desc p:nth-child(2) {
  line-height: 2;
}

.desc span {
  color: #AECD31;
}

.juice {
  position: absolute;
  top: 50%;
  left: 50%;
  /* z-index: 1; */
}

.juice img {
  animation: float 4s ease-in-out infinite;
  max-height: 600px;
}

@keyframes float {
  0% {
    transform: translate(-50%, -46%);
  }
  50% {
    transform: translate(-50%, -54%);
  }
  100% {
    transform: translate(-50%, -46%);
  }
}

.leaves {
  position: absolute;
  top: 50%;
  left: 50%;
  /* z-index: -10; */
}

.leaves img {
  max-width: 100%;
  max-height: 100%;
}

.leaves .layer:nth-child(1) {
  top: -100px !important;
  left: -480px !important;
}

.leaves .layer:nth-child(2) {
  top: 10px !important;
  left: 160px !important;
}

.leaves .layer:nth-child(3) {
  top: -300px !important;
  left: 160px !important;
}

.leaves .layer:nth-child(4) {
  top: -10px !important;
  left: 320px !important;
}

.leaves .layer:nth-child(5) {
  top: 200px !important;
  left: -320px !important;
}

.arrows .prev {
  position: absolute;
  top: 50%;

}

.arrows .next {
  position: absolute;
  top: 50%;

}

.arrows button {
  border: 1px solid #999;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
}

.arrows button:hover {
  color: #fff;
  background: #000;
}
</style>