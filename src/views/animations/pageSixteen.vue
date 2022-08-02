<template>
	<div class="body">
		<div class="contain"/>
	</div>
</template>



<style lang="scss">
body {
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: #1D202C;
}

.contain {
  position: relative;
  width: 250px;
  height: 250px;
  background-color: rgba(21, 24, 35, 0.7);
  box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 0.3);
 
	&:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    filter: blur(40px);
		transform: scale(1.3);
    background: linear-gradient(90deg, #0fffc1, #7e0fff);
    background-size: 200% 200%;
    animation: animateGlow 10s ease infinite;
    
    @keyframes animateGlow {
      0%  {
				background-position: 0% 50%
			}
      
			50% {
				background-position: 100% 50%
			}
			
      100% {
				background-position: 0% 50%
			}
    }
  }
}
</style>