<template>
	<div class="h-[200vh]">
		<div class="center h-screen w-full bg shadow-md">
			<!-- <div class="line bg-[#ffffff7b] absolute h-0.5 w-full z-10 top-12"/> -->
			<!-- <div class="line bg-[#ffffff7b] absolute h-0.5 w-full z-10 bottom-12"/> -->
			<div class="line bg-[#ffffff7b] fixed h-0 w-0.5 z-10 md:left-16 left-5"/>
			<div class="line bg-[#ffffff7b] fixed h-0 w-0.5 z-10 md:right-16 right-5"/>
			<div class="relative center text-white pos text-7xl">
		
				<img
					src="../../assets/images/pageZero/border.svg"
					alt="border"
					class="logo-border absolute w-40 rotate-45"
				/>

				<span class=" p-10 font-semibold">K</span>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">

</script>

<style >
body{
    background: #212143;
}
.line{
    animation: grow 1.5s 1.5s 1 forwards;
}
.bg {
	   background: #958e69;
     transition: 0.8s ease-out;
}
.bg:before {
     content: "";
     position: absolute;
     background: #212143;
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

@keyframes grow {
    from{opacity:0; height: 0;}
    to{ opacity:1; height: 100%;}
}
@keyframes fade {
    from{opacity:1;}
    to{ opacity:0; display: none; transform: scale(0.2);}
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


