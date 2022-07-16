<template>
	<div class="center h-screen w-screen">
		<svg xmlns="http://www.w3.org/2000/svg" xml:lang="en" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
			<title>Circular Text Path</title>
			<defs>
				<path id="textcircle" d="M250,400
                       a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
			</defs>
			<g class="textcircle">
				<text textLength="940">
					<textPath 
						xlink:href="#textcircle" 
						aria-label="CSS & SVG are awesome" 
						textLength="940">
						CSS &amp; SVG are awesome | CSS &amp; SVG are awesome | &amp; so is Anthony |&#160;
					</textPath>
				</text>
			</g>
		</svg>
	</div>

</template>

<script setup lang="ts">
import { setTitle } from '@/composables/utils'
setTitle('Animation Twelve')

</script>

<style>
body {
  background-color: #003;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
}

text {
  fill: white;
  font-family: "Lato", sans-serif;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
  font-variant-ligatures: none;
  letter-spacing: 6px;
  animation: rotate 25s linear infinite;
  transform-origin: 250px 250px;
}

svg{
  max-width: 80vmin;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.textcircle {
  transition: transform 1s cubic-bezier(0.65, 0, 0.35, 1);
  transform-origin: 250px 250px;
}

svg:hover .textcircle {
  transform: scale(1.2) rotate(90deg);
}
</style>