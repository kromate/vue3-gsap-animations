import {gsap} from 'gsap'
export const fadeOut = ()=> {

	gsap.to('.myBtn', {
		y: -100,
		opacity: 0,
		duration: 0.5,
	})

	gsap.to('.screen', {
		y: -400,
		opacity: 0,
		ease: 'Power2.easeInOut',
		delay: 0.5,
		duration: 1,
	})

	gsap.to('.overlay', {
		delay: 1,
		top: '-110%',
		ease: 'Expo.easeInOut',
		duration: 1,
	})

	gsap.to('.overlay-2', {
		delay: 1.5,
		top: '-110%',
		ease: 'Expo.easeInOut',
		duration:0.1
	})

	// gsap.from('.content', {
	// 	delay: 2,
	// 	opacity: 0,
	// 	ease: 'Power2.easeInOut',
	// 	duration: 1,
	// })

	// gsap.to('.content', {
	// 	opacity: 1,
	// 	delay: 2,
	// 	ease: 'Power2.easeInOut',
	// 	duration: 1,
	// })
	gsap.fromTo('.card',
		{
			opacity: 0,
			y: 100,
		},
		{
			opacity: 1,
			y: 0,
			stagger: 0.35,
			duration: 0.5,
			delay:0.1
			// ease: 'easeInOut'
		})

}