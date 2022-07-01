
<template>
	<!-- <div class="body"> -->
	<div id="bg" ref="bg"></div>
	<div id="fg" ref="fg"></div>
	<!-- </div> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {gsap} from 'gsap'

const bg = ref<HTMLDivElement>()
const fg = ref<HTMLDivElement>()

const imgs = [
		new URL('../../assets/images/pageNine/bg-1.jpg', import.meta.url) as any,
		new URL('../../assets/images/pageNine/bg-2.jpg', import.meta.url) as any,
		new URL('../../assets/images/pageNine/bg-3.jpg', import.meta.url) as any,
		new URL('../../assets/images/pageNine/bg-4.jpg', import.meta.url) as any,
		new URL('../../assets/images/pageNine/bg-5.jpg', import.meta.url) as any,
]
const imageLength:number = imgs.length
let	current = imageLength-1
let	closedWidth = Math.floor(window.innerWidth/10)
onMounted(()=>{
	for (let i=0; i<imageLength; i++){
		const bgImg = document.createElement('div')
		bg?.value?.appendChild(bgImg)
		gsap.set(bgImg, {
			attr:{id:'bgImg'+i, class:'bgImg'},
			width:'100%',
			height:'100%',
			backgroundImage:'url('+imgs[i]+')',
			backgroundSize:'cover',
			backgroundPosition:'center'
		})
  
		const containerDiv = document.createElement('div')
		fg?.value?.appendChild(containerDiv)

		gsap.fromTo(containerDiv, {
			attr:{id:'b'+i, class:'box'},
			innerHTML:`<p>${i+1}</p>`,
			width:'100%',
			height:'100%',
			borderLeft:(i>0)?'solid 1px #eee':'',
			backgroundColor:'rgba(250,250,250,0)',
			left:i*closedWidth,
			transformOrigin:'100% 100%',
			x:'100%'
		},{
			duration:i*0.15,
			x:0,
			ease:'expo.inOut'
		})  


		// Mouse Hover Event Target
		containerDiv.onmouseenter = containerDiv.onclick = (e:any)=>{    
			if (Number(e?.currentTarget?.id?.substr(1))==current) return
   
			const staggerOrder = !!(current < Number(e.currentTarget.id.substr(1)))
			current = Number(e.currentTarget.id.substr(1))
			gsap.to('.box', {
				duration:0.5,
				ease:'elastic.out(0.3)',
				left:(i)=>(i<=current)? i*closedWidth: window.innerWidth-((imageLength-i)*closedWidth),
				x:0,
				stagger: staggerOrder? 0.05:-0.05
			})
  
			bg?.value?.appendChild( document.getElementById('bgImg'+current)as any)
			gsap.fromTo('#bgImg'+current,{opacity:0}, {opacity:1, duration:0.3, ease:'power1.inOut'})
			gsap.fromTo('#bgImg'+current, {scale:1.05, rotation:0.05}, {scale:1, rotation:0, duration:1.5, ease:'sine'})
		}
	}

	//Responsive Support Window Resizing
	window.onresize = (e)=> {
		closedWidth = Math.floor(window.innerWidth/10)
		gsap.set('.box', { x:0, left:(i)=> (i<=current)? i*closedWidth: window.innerWidth-((imageLength-i)*closedWidth)})
	}
})
</script>

<style>

  #app {
    width: 100%;
    height: 100%;
  }
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #bg, #fg {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  font-family: "poppins", sans-serif;
  overflow: hidden;
}

div{
  position: absolute;
  top: 0;
}

sub{
  font-size: 12px;
  display: block;
}

p {
  padding: 12px;
}
</style>