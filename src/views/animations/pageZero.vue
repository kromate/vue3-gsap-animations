<template>
	<div class="center h-screen w-screen bg">
		<div class="line bg-white absolute h-0.5 w-96 z-10"/>
		<div class="relative center text-white pos text-7xl">
		
			<img
				src="../../assets/images/pageZero/border.svg"
				alt="border"
				class="logo-border absolute w-40 rotate-45"
			/>

			<span class=" p-10 font-semibold">K</span>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.bg {
	   background: #958e69;
     transition: 0.8s ease-out;
}
.bg:before {
     content: "";
     position: absolute;
     background: #000;
     bottom: 0;
     left: 0;
     right: 100%;
     top: 0;
     transition: top 0.65s ease-out;
      animation: flow 1.5s 1 forwards;
}

.logo-border {
	animation: spin 1.5s 1;

}
.pos{
    animation: fade 0.5s 1.5s 1 forwards;
}

@keyframes fade {
    from{opacity:1;}
    to{ opacity:0; display: none;}
}

@keyframes flow {
    from{right: 100%;}
    to{right: 0;}
}

@keyframes spin {
	0% {transform: rotate(45deg) scale(1);}
    50%{transform: rotate(135deg) scale(1.5);}
    100%{transform: rotate(225deg) scale(1); }
}
</style>


