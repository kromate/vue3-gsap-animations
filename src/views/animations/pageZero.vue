<template>
	<div class="center h-screen w-screen bg">
		<div class="relative center text-white pos">
			<img
				src="../../assets/images/pageZero/border.svg"
				alt="border"
				class="logo-border absolute w-40 rotate-45"
			/>

			<span class="text-7xl p-10 font-semibold">K</span>
		</div>
	</div>
</template>

<script setup lang="ts">
for(let i= 0; i<=100; i++){
	console.log(`${i}% {background-image: linear-gradient(90deg, #000000 ${i}%, #958e69 0%);}`)
}
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


@keyframes flow {
    from{
          right: 100%;
    }
    to{
        right: 0
    }
}
@keyframes spin {
	0% {
		transform: rotate(45deg) scale(1);
	}
    50%{
        transform: rotate(135deg) scale(1.2);
    }
    100%{
        transform: rotate(225deg) scale(1);
    }
}
</style>


