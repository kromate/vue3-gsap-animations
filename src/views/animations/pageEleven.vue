<template>
	<div id="fullpage" class="pt-40">

		<div class="section" id="section1">
			<div class="contain">
				<div class="hero-text">
					<div class="hero-title">
						<span>BOOK NOW</span>
						<h1>Winter Special</h1>
					</div>
					<div>
						<span class="cat">JUST FOR YOU</span>
						<h3>SCROLL DOWN FOR SOME MAGIC</h3>
					</div>
				</div>
			</div>
		</div>

		<div class="section" id="section2">
			<div class="contain">
				<div class="description">
					<span class="cat">About Us</span>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores ducimus inventore architecto unde voluptates ipsam magni dicta illum aliquid quod necessitatibus, labore quibusdam odio. Sapiente ipsam ad dolorum odit animi officia maxime dolorem aliquid eveniet quidem a, quasi repudiandae consequuntur quod exercitationem voluptatem ducimus et tempore? Fugiat quod a magni totam esse voluptate quis optio, exercitationem nihil similique doloribus soluta tenetur. Facilis, labore doloremque explicabo culpa repudiandae neque temporibus exercitationem consectetur modi doloribus est dolorem, ullam laudantium voluptatem, dolores ducimus expedita sint accusamus voluptates consequatur in tempore optio! Alias ab officia corporis iure eveniet exercitationem delectus autem odit explicabo!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolores ducimus inventore architecto unde voluptates ipsam magni dicta illum aliquid quod necessitatibus, labore quibusdam odio. Sapiente ipsam ad dolorum odit animi officia maxime dolorem aliquid eveniet quidem a, quasi repudiandae consequuntur quod exercitationem voluptatem ducimus et tempore? Fugiat quod a magni totam esse voluptate quis optio, exercitationem nihil similique doloribus soluta tenetur. Facilis, labore doloremque explicabo culpa repudiandae neque temporibus exercitationem consectetur modi doloribus est dolorem, ullam laudantium voluptatem, dolores ducimus expedita sint accusamus voluptates consequatur in tempore optio! Alias ab officia corporis iure eveniet exercitationem delectus autem odit explicabo!
					</p>
				</div>
			</div>
		</div>

		<div class="section" id="section3">
			<div class="contain">
				<span class="cat margin-bottom">Gallery</span>
				<div class="image-one">
					<img src="../../assets/images/pageEleven/bg1.png" alt="">
				</div>
			</div>
		</div>
        
		<div id="bg">
			<img src="../../assets/images/pageEleven/bg3.png" alt="">
		</div>

	</div>
</template>

<script setup lang="ts">
import * as ScrollMagic from 'scrollmagic' // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from 'gsap' // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import { onMounted } from 'vue'
import { setTitle } from '@/composables/utils'
setTitle('Animation Eleven')

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)


onMounted(()=>{
	const controller = new ScrollMagic.Controller()

	let scene = new ScrollMagic.Scene({
		triggerElement: '#section2',
        	duration: 500
	})
		.setTween('#bg img', {
			maxWidth: '1200px',
			top: '30%',
			left: '80%',
			opacity: 0.25
		}) 
		.addTo(controller)

	 scene = new ScrollMagic.Scene({
		triggerElement: '#section3',
		duration: 300
	})

		.setTween('#bg img', {
			top: '20%'
		})
		.addTo(controller)
})
</script>

<style >
html {
  background-color: #dbad84;
  height: 100%;
  line-height: 1.5;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  color: #fff;
}

html, body {
  font-family: "Lato", sans-serif;
  font-size: 16px;
  min-height: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
}

.section{
  min-height: 100vh;
}

img {
  max-width: 100%;
}

h1, h2, h3, h4 {
  font-family: "Abril Fatface", sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
}

h1 {
  font-size: 9vw;
  line-height: 1;
  margin-top: 0;
}

.contain {
  margin: 0 10%;
}

.hero-text {
  width: 80%;
  float: left;
}

.cat{
  font-size: 18px;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  color: #FFF;
  margin-top: 30px;
}

.cat:after {
  position: absolute;
  top: 50%;
  left: 100%;
  content: "";
  width: 50px;
  height: 1px;
  background-color: #fff;
  margin-left: 5px;
}

.cat.margin-bottom{
  margin-bottom: 1rem;
}

.description {
  letter-spacing: 1px;
  width: 100%;
  float: left;
  margin-bottom: 1rem;
}

.description p {
  font-family: "Lato", sans-serif;
  font-size: 1.2rem;
}

#bg{
  z-index: -1;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

#bg img {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  max-width: 900px;
}

.image-one{
  width: 80%;
  float: left;
  margin-right: 50%;
  margin-bottom: 50px;
}

@media (min-width: 1280px) {
  .description {
    width: 50%;
  }
}

@media (min-width: 600px) {
  .hero-text {
    width: 50%;
  }
  .image-one {
     width: 100%;
     padding-bottom: 20px;
  }
}
</style>