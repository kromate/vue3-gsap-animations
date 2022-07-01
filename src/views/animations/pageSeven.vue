<template>
	<div class="w-screen h-screen center">
		<div class="distortion w-[580px] min-h-[720px] max-w-[96%] border-2 border-black shadow-lg"></div>
	</div>
</template>

<script setup lang="ts">
import hoverEffect from 'hover-effect'
import { onMounted } from 'vue'

import { setTitle } from '@/composables/utils'
setTitle('Animation Seven')

const img_1 = new URL('../../assets/images/pageSeven/01.png', import.meta.url) as any
const img_2 = new URL('../../assets/images/pageSeven/02.png', import.meta.url) as any
const diss = new URL('../../assets/images/pageSeven/diss.png', import.meta.url) as any
onMounted(()=>{
	new hoverEffect({
		parent: document.querySelector('.distortion'),
		intensity: .25,
		image1: img_1.href,
		image2: img_2.href,
		displacementImage: diss.href,
		imagesRatio: 380 / 300
	})
})

</script>
