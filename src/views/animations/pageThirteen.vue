<template>
	<div class="w-screen h-screen bg-black center flex-col">
		<div class="flex">
			<div class="font-bold md:text-6xl text-3xl text-white mr-3">Build</div>	
			<div class="animtaion-content md:text-6xl text-3xl md:h-[80px] h-[40px]">
				<div class="h1 text-secondary ta-1">banking</div>
				<div class="h1 text-secondary ta-2">cards</div>
				<div class="h1 text-secondary ta-3">payments</div>
				<div class="h1 text-secondary ta-4">lending</div>
				<div class="h1 text-secondary ta-4">banking</div>
			</div>
		</div>

		<div class="font-bold md:text-6xl text-3xl text-white mr-1 block">
			into your product
		</div>
	
	</div>
</template>

<script setup lang="ts">
import { setTitle } from '@/composables/utils'
setTitle('Animation Thirteen')
</script>

<style>
.animtaion-content {
	display: block;
	overflow: hidden;
	/* height: 80px; */
}
.h1.text-secondary.ta-1 {
	height: 80px;
	margin-bottom: 0rem;
	padding-top: 0px;
	padding-right: 0px;

}
.text-secondary {
	color: #dbfd51;
}
.h1 {
	margin-top: 0px;
	margin-bottom: 1rem;
	padding-top: 20px;
	padding-right: 40px;
	padding-bottom: 0px;
	line-height: 1.03;
	font-weight: 600;
	transform: translate3d(0px, 0%, 0px);
	transform-style: preserve-3d;
        animation: change 7s infinite backwards;
	
}

@keyframes change {
	0% {
		transform:  translate3d(0px, 0%, 0px);
	}
	25% {
		transform: translate3d(0px, -120%, 0px);
	}
	50% {
		transform: translate3d(0px, -250%, 0px);
	}
	75% {
		transform: translate3d(0px, -360%, 0px);
	}
	100% {
		transform: translate3d(0px, -470%, 0px);
	}
}

@media screen and (max-width: 680px) {
@keyframes change {
	0% {
		transform:  translate3d(0px, 0%, 0px);
	}
	25% {
		transform: translate3d(0px, -95%, 0px);
	}
	50% {
		transform: translate3d(0px, -240%, 0px);
	}
	75% {
		transform: translate3d(0px, -360%, 0px);
	}
	100% {
		transform: translate3d(0px, -490%, 0px);
	}
}
.h1.text-secondary.ta-1 {
	height: auto;
	margin: 0rem;
	padding-top: 0px;
	padding-right: 0px;

}
}
</style>
