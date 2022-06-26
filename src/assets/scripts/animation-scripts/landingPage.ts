import {gsap} from 'gsap'
export const fadeOut = ()=> {

	gsap.to('.myBtn', 0.5, {
		y: -100,
		opacity: 0
	})

	gsap.to('.screen', 1, {
		y: -400,
		opacity: 0,
		ease: 'Power2.easeInOut',
		delay: 0.5
	})

	gsap.to('.overlay', 1, {
		delay: 1,
		top: '-110%',
		ease: 'Expo.easeInOut'
	})

	gsap.to('.overlay-2', 1, {
		delay: 1.5,
		top: '-110%',
		ease: 'Expo.easeInOut',
		duration:0.1
	})

	gsap.from('.content', 1, {
		delay: 2,
		opacity: 0,
		ease: 'Power2.easeInOut'
	})

	gsap.to('.content', 1, {
		opacity: 1,
		delay: 2,
		ease: 'Power2.easeInOut'
	})

}