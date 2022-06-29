<template>
	<div class="body">
		<button class="mycart-button" @click="cartClick">
			<span class="add-to-cart">Add to cart</span>
			<span class="added">Added</span>
			<i class="las la-shopping-cart"></i>
			<i class="lab la-bitcoin"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
import { setTitle } from '@/composables/utils'
setTitle('Animation Six')


const  cartClick = (e)=> {
	// const button = this as any
	console.log(e.target.classList.contains)
	e.target.classList.add('clicked')
	// button?.classList.add('clicked')
}


</script>

<style scoped>
.body {
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #ebe8ff;
}

.mycart-button {
	font-family: "poppins", sans-serif;
	font-size: 14px;
	position: relative;
	padding: 10px;
	width: 250px;
	height: 60px;
	background-color: #4834d4;
	border: 0;
	border-radius: 50px;
	color: #fff;
	text-transform: uppercase;
	outline: none;
	overflow: hidden;
	transition: .3s ease-in-out;
}

.mycart-button:hover {
	background-color: #35269b;
}

.mycart-button:active {
	transform: scale(.9);
}

.mycart-button .la-shopping-cart {
	position: absolute;
	z-index: 2;
	top: 50%;
	left: -10%;
	font-size: 2em;
	transform: translate(-50%, -50%);
}

.mycart-button .la-bitcoin {
	position: absolute;
	z-index: 3;
	top: -20%;
	left: 52%;
	font-size: 1.2em;
	transform: translate(-50%, -50%);
}

.mycart-button span {
	position: absolute;
	z-index: 3;
	top: 50%;
	left: 50%;
	font-size: 1.2em;
	color: #fff;
	transform: translate(-50%, -50%);
}

.mycart-button span.add-to-cart {
	opacity: 1;
}

.mycart-button span.added {
	opacity: 0;
}

.mycart-button.clicked .la-shopping-cart {
	animation: cart 1.5s ease-in-out forwards;
}

.mycart-button.clicked .la-bitcoin {
	animation: box 1.5s ease-in-out forwards;
}

.mycart-button.clicked span.add-to-cart {
	animation: text1 1.5s ease-in-out forwards;
}

.mycart-button.clicked span.added {
	animation: text2 1.5s ease-in-out forwards;
}

@keyframes cart {
	0% {
		left: -10%;
	}
	40%, 60% {
		left: 50%;
	}
	100% {
		left: 110%;
	}
}

@keyframes box {
	0%, 40% {
		top: -20%;
	}
	60% {
		top: 40%;
		left: 52%;
	}
	100% {
		top: 40%;
		left: 112%;
	}
}

@keyframes text1 {
	0% {
		opacity: 1;
	}
	20%, 100% {
		opacity: 0;
	}
}

@keyframes text2 {
	0%, 80% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>