<template>
	<div class="w-screen h-screen">
		<div class="distortion"></div>
	</div>
</template>

<script setup lang="ts">
import hoverEffect from 'hover-effect'
import { onMounted } from 'vue'

const img_1 = ''
const img_2 = ''
const diss = ''

onMounted(()=>{
	new hoverEffect({
		parent: document.querySelector('.distortion'),
		intensity: 0.2,
		image1: '../../assets/images/pageSeven/01.png',
		image2: '../../assets/images/pageSeven/02.png',
		displacementImage: '../../assets/images/pageSeven/diss.png',
		imagesRatio: 380 / 300
	})
})

</script>

<style scoped>

.distortion {
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
}

</style>