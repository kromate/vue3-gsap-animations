<template>
	<div class="cursor-preview">
		<div class="cursor-preview__container">
			<h5 class="cursor-preview__title">On link</h5>
			<a href="https://github.com/kromate/vue3-gsap-animations" target="blank" class="cursor-preview__link">Github</a>

			<br> <br> <br>
			<h5 class="cursor-preview__title">On hoverable element</h5>
			<button class="cursor-preview__button cursor-hover">Hover me</button>
		</div>
    
		<div class="custom-cursor">
			<div id="cursor-big" class="custom-cursor__ball custom-cursor__ball--big"></div>
			<div id="cursor-small" class="custom-cursor__ball custom-cursor__ball--small"></div>
		</div>
	</div>
</template>

<script setup>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { setTitle } from '@/composables/utils'
setTitle('Animation Fourteen')

onMounted(()=>{
	const cursorBig = document.getElementById('cursor-big'),
		cursorSmall = document.getElementById('cursor-small'),
		links = document.getElementsByTagName('a'),
		withClassHover = document.getElementsByClassName('cursor-hover'),
		withHover = [...links, ...withClassHover]

	// Event Listeners
	document.addEventListener('mousemove', onMouseMove)
	document.addEventListener('mousedown', onMouseHover)
	document.addEventListener('mouseup', onMouseHoverOut)
	document.addEventListener('mouseenter', () => {
		cursorBig.style.opacity = 1
		cursorSmall.style.opacity = 1
	})
	document.addEventListener('mouseleave', () => {
		cursorBig.style.opacity = 0
		cursorSmall.style.opacity = 0
	})
	withHover.forEach((element) => {
		element.addEventListener('mouseover', onMouseHover)
		element.addEventListener('mouseout', onMouseHoverOut)
	})

	// Event Handlers
	function onMouseMove(e) {
		cursorSmall.style.opacity = 1
		gsap.to(cursorBig, 0.4, {
			x: e.clientX - 18,
			y: e.clientY - 18
		})
		gsap.to(cursorSmall, 0.1, {
			x: e.clientX - 4,
			y: e.clientY - 4
		})
	}
	function onMouseHover() {
		gsap.to(cursorBig, 0.3, {
			scale: 3
		})
	}
	function onMouseHoverOut() {
		gsap.to(cursorBig, 0.3, {
			scale: 1
		})
	}
})


	

</script>

<style lang="scss">
  
  body {
    margin: 0;
    background: #392b99;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .cursor-preview__title {
    font-size: 20px;
    line-height: 24px;
    color: #8696ea;
    margin-bottom: 5px;
  }
  
  .cursor-preview__link {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
  }
  
  .cursor-preview__button {
    background: #78fff1;
    border-radius: 5px;
    padding: 16px 50px;
    color: rgb(48, 37, 37);
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    outline: none;
    border:none;
  }
  


   .custom-cursor__ball {
      position: fixed;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      z-index: 99999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.5s ease;
    }

    .custom-cursor__ball--big {
      content: "";
      width: 35px;
      height: 35px;
      background: #29217a;
      border-radius: 50%;
    }

    .custom-cursor__ball--small {
      content: "";
      width: 6px;
      height: 6px;
      background: #78fff1;
      border-radius: 50%;
    }
</style>