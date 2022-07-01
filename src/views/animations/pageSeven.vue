<template>
	<div>
		<div class="wrapper">

			<div class="overlay first"></div>
			<div class="overlay second"></div>
			<div class="overlay third"></div>

			<nav class="navbar">
				<div class="menu">
					<ion-icon name="ios-menu"></ion-icon>
				</div>
				<div class="lang">eng</div>
				<div class="search">
					<ion-icon name="ios-search"></ion-icon>
				</div>
			</nav>

			<div class="media">
				<ul>
					<li>facebook</li>
					<li>instagram</li>
					<li>twitter</li>
				</ul>
			</div>

			<div class="text">
				<h1>
					<span class="hidetext">toni&guy</span>
				</h1>
				<h2>duality</h2>
				<h3>
					<span class="hidetext">collection 2017 <br> duality</span>
				</h3>
				<p>
					<span class="hidetext">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis, delectus facere
						neque sunt commodi quae
						culpa dolores doloribus magnam?
					</span>
				</p>
			</div>

			<div class="sponsor">
				<img src="../../assets/images/pageSeven/sponsor-logo.png" alt="">
				<p>official sponsor</p>
			</div>


		
			<div class="distortion"></div>

		</div>
	</div>
</template>

<script setup lang="ts">


  new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: './images/01.png',
      image2: './images/02.png',
      displacementImage: './images/diss.png',
      imagesRatio: 380 / 300
    })
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins';
  background: #D8DBE2;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

ul {
  list-style: none;
}

/* NAVBAR
=========================== */
.navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
}

.navbar > div {
  padding: 0 30px;
  font-size: 20px;
}

.navbar .menu {
  margin-right: auto;
}

.navbar .lang {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}


/* SOCIAL MEDIA
=========================== */
.media ul {
  position: absolute;
  bottom: 250px;
  left: -140px;
  transform: rotate(-90deg);
}

.media ul li {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  display: inline-block;
  padding: 0 30px;
}


/* TEXT
=========================== */
.text {
  position: absolute;
  top: 200px;
  left: 100px;
  transform: rotate(-90deg);
}

.text h1 {
  font-size: 120px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: -10px;
  margin-bottom: 20px;

  position: relative;
  overflow: hidden;
  height: 150px;
  width: 600px;
}
.text h1 .hidetext {
  position: absolute;
}

.text h2 {
  position: absolute;
  top: 40px;
  left: -80px;
  color: #EFDE74;
  z-index: -1;
  font-size: 150px;
  font-weight: 600;
  letter-spacing: 8px;
  text-transform: uppercase;
}

.text h3 {
  font-size: 40px;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;

  position: relative;
  overflow: hidden;
  height: 80px;
}
.text h3 .hidetext {
  position: absolute;
}

.text p {
  width: 200px;
  font-size: 12px;
  margin-top: 30px;
  font-weight: 500;

  position: relative;
  overflow: hidden;
  height: 110px;
}
.text p .hidetext {
  position: absolute;
}


/* SPONSOR
=========================== */
.sponsor {
  position: absolute;
  right: 100px;
  bottom: 100px;
  text-align: center;
}

.sponsor img {
  width: 200px;
  transform: rotate(-90deg);
}

.sponsor p {
  margin-top: 20px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 900;
  transform: rotate(180deg);
}

/* DISTORTION
=========================== */
.distortion {
  width: 580px;
  height: 720px;
  position: absolute;
  right: 300px;
  bottom: 0;
}

/* OVERLAY
=========================== */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  z-index: 99;
}

.first {
  background: #efde74;
}

.second {
  background: #efde74;
  left: 33.3%;
}

.third {
  background: #efde74;
  left: 66.6%;
}

</style>