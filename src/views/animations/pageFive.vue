<template>
	<div class="body h-screen w-screen linear">
		<div class="container">
			<div class="header">
				<button class="back">
					<i class="las la-chevron-left"></i>
				</button>
				<button class="back">
					<i class="lar la-bookmark"></i>
				</button>
			</div>

			<div class="body">
				<h1>Andaman Islands</h1>
				<p class="description">Nicobar Tourism</p>

				<div class="rating-container">
					<div class="users">
						<div class="img img-1"></div>
						<div class="img img-2"></div>
						<div class="img img-3"></div>
						<div class="img img-4"></div>
						<p class="rating-text">4.5</p>
					</div>
					<button class="check">Check Availability</button>
				</div>

				<p class="about">About Trip</p>
				<p class="detail">
					The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine sites.
				</p>

				<div class="booking-container">
					<div class="book-inner">
						<div class="cost">
							<p>Total Cost</p>
							<h5>$899 <span>/ Person</span> </h5>
						</div>
						<div class="book" @click="play">Book Now</div>
						<div class="cancel" @click="reverse">Cancel</div>
					</div>

					<div class="divider"></div>

					<div class="method">
						<p class="heading">Payment Method</p>
						<div class="method-1">
							<img src="@/assets/images/pageFive/visa.png" alt="Visa">

							<p class="card-number">**** **** 2233</p>
						</div>
						<p class="warning">Insufficient balance</p>
						<p class="heading disclaimer">Disclaimer</p>
						<p class="heading disclaimer-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Eligendi libero laudantium nemo quo vitae quae dignissimos exercitationem possimus ad vero, culpa,asperiores autem quisquam, odit  dolorem voluptatum fugit. Nam, perspiciatis.
						</p>
						<div class="final">Confirm Booking</div>
					</div>

				</div>
			</div>

		</div>
	</div>

</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const t1 = gsap.timeline({paused: true, reserved: true})
const play = () => {
	t1.play()
}
const reverse = () => {
	t1.reverse()
}


onMounted(()=>{


	t1.to(
		'.body', {
			ease: 'power1.inOut',
			marginTop: 0,
		}, 0
	)

	t1.to(
		'.header button', {
			ease: 'power1.inOut',
			opacity: 0,
			scale: 0,
		}, 0
	)

	t1.to(
		'.book', {
			ease: 'power1.inOut',
			opacity: 0,
		}, 0
	)

	t1.to(
		'.cancel', {
			ease: 'power1.inOut',
			right: 20,
			opacity: 1
		}, 0
	)

	t1.to(
		'.booking-container', {
			ease: 'power1.inOut',
			marginTop: -210,
			zIndex: 10,
			height:500
		}, 0
	)
})
</script>

<style scoped>

.body{
background-color: #000000;
background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
}


.container{
  width: 320px;
  height: 640px;
  background-image: linear-gradient(#00000027, #00000023),
            url("@/assets/images/pageFive/bg.jfif");
  background-position: bottom;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
  overflow: hidden;
}

.container .header {
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
}

.container .header button {
  background-color: #232631;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container .header button .ion {
  width: 316px;
  height: 16px;
  stroke: white;
}

.container .body{
  background-color: #232631;
  color: #fff;
  margin-top: 45%;
  height: 100%;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  padding: 30px 20px 0 20px;
}

.container .body h1{
  font-size: 20px;
}

.container .body .description {
  font-size: 14px;
  opacity: 0.6;
}

.container .body .rating-container {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.container .body .rating-container .users{
  display: flex;
  align-items: center;
}

.container .body .rating-container .users .img{
  width: 30px;
  height: 30px;
  background-position: center;
   background-size: cover;
   border-radius: 50%;
}


.container .body .rating-container .users .img-1{
  background-image: url("@/assets/images/pageFive/1.jfif");
}

.container .body .rating-container .users .img-2{
  background-image: url("@/assets/images/pageFive/2.jfif");
}

.container .body .rating-container .users .img-3{
  background-image: url("@/assets/images/pageFive/3.jfif");
}

.container .body .rating-container .users .img-4{
  background-image: url("@/assets/images/pageFive/4.jfif");
}

.container .body .rating-container .users .img:not(:first-child){
  margin-left: -10px;
}

.container .body .rating-container .users .rating-text {
  margin-left: 14px;
  font-size: 16px;
  opacity: 0.6;
}

.container .body .rating-container .check {
  background-color: #3c72fd;
  border: none;
  color: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 11px;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.container .body .about {
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
}

.container .body .detail {
  font-size: 12px;
  opacity: 0.6;
}

.container .body .booking-container {
  background-color: #2e3341;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  margin-top: 38px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 20px;
  height: 82px;
  position: absolute;
  width: 100%;
  /* bottom: 0; */
}

.container .body .booking-container .book-inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container .body .booking-container .book-inner .book{
  background-color: #3c72fd;
  color: #fff;
  border: none;
  padding: 10px 30px;
  font-size: 12px;
  border-radius: 20px;
  cursor: pointer;
}

.container .body .booking-container .book-inner .cost p {
  opacity: 0.6;
  font-size: 12px;
}

.container .body .booking-container .book-inner .cost h5 span {
  opacity: 0.5;
}

.container .body .booking-container .book-inner .cancel {
  background-color: #fd3c56;
  color: #fff;
  border: none;
  padding: 10px 30px;
  font-size: 12px;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  right: -120px;
  opacity: 0;
}

.container .body .booking-container .divider {
  width: 100%;
  height: 1px;
  margin-top: 20px;
  background: #3d4455;
}

.container .body .booking-container .method {
  margin-top: 20px;
}

.container .body .booking-container .method .heading{
  opacity: 0.6;
  font-size: 14px;
}

.container .body .booking-container .method .method-1 img {
  height: 20px;
}

.container .body .booking-container .method .warning {
  font-size: 11px;
  color: #fd3c56;
  margin-top: 10px;
}

.container .body .booking-container .method .method-1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  background-color: #3d4455;
  padding: 10px;
  border-radius: 5px;
}

.container .body .booking-container .method .method-1 .card-number{
  font-size: 14px;
}

.container .body .booking-container .method .disclaimer {
  margin-top: 20px;
}

.container .body .booking-container .method .disclaimer-text {
  font-size: 11px;
  opacity: 0.4;
}

.container .body .booking-container .method .final {
  background: #3d4455;
  color: #747e97;
  border: none;
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 12px;
  cursor: pointer;
  width: 100%;
  margin-top: 35px;
  text-align: center;
  cursor: not-allowed;
}
</style>