<template>
	<div class="wrapper">
		<div class="nav">
			<div class="logo">Clean Juice</div>

			<div class="menu-links">
				<ul>
					<li>locations</li>
					<li>our menu</li>
					<li>our story</li>
					<li>meet our teem</li>
					<li>own a clean juice</li>
					<li>contact us</li>
				</ul>
			</div>

			<div class="search"><i class="fa fa-search"></i></div>

			<div class="account">my account</div>

			<div class="cart"><i class="i fa fa-shopping-cart"></i></div>
		</div>

		<div class="content">
			<div class="tagline">Find your clean juice</div>

			<div class="pages"><span>2</span>/21</div>

			<div class="title">orange</div>

			<div class="more"><a href="#">show all the juices</a></div>

			<div class="desc">
				<p>
					Your <span>healthy</span> life <br>
					starts here with us
				</p>
				<p>
					A family owned company founded with the purpose of giving your family access to clean, organic products while
					you are on the go.
				</p>
			</div>
		</div>

		<div class="juice">
			<img src="@/assets/images/pageFour/juice.png" alt="">
		</div>

		<div class="leaves">
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

		<div class="arrows">
			<button class="prev"><i class="las la-chevron-left"></i></button>
			<button class="next"><i class="las la-chevron-right"></i></button>
		</div>


	</div>
</template>

<script setup lang="ts">
// @ts-ignore
import Parallax from 'parallax-js'
import { onMounted } from 'vue'
import {gsap} from 'gsap'

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

	gsap.from('.search', 1, {
		delay: .5,
		opacity: 0,
		x: -20,
		ease: 'Expo.easeInOut'
	})

	gsap.from('.account', 1, {
		delay: .6,
		opacity: 0,
		x: -20,
		ease: 'Expo.easeInOut'
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
* {
  margin: 0;
  padding: 0;
}

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

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  text-transform: uppercase;
  font-weight: 600;
}

.logo {
  font-size: 40px;
}

.menu-links ul li {
  display: inline-block;
  padding-right: 20px;
}

.search,
.cart {
  font-size: 20px;
}

.content {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: -1;
}

.title {
  flex: 0 0 100%;
  font-size: 200px;
  text-transform: uppercase;
  font-weight: 700;
}

.tagline {
  flex: 1;
  font-size: 30px;
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
  z-index: 1;
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
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
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
  left: 100px;
}

.arrows .next {
  position: absolute;
  top: 50%;
  right: 100px;
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