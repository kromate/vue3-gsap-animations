import { useTitle } from '@vueuse/core'

export const animationPageList = [
	{
		index: 1,
		title: 'Animation One',
		desc: 'This is the same as the website intro, Just with a reverse button added',
		link: '/animations/pageOne',
	},
	{
		index: 2,
		title: 'Animation Two',
		desc: 'A simple welcome screen with a loader',
		link: '/animations/pageTwo',
	},
	{
		index: 3,
		title: 'Animation Three',
		desc: 'A credit card Animation',
		link: '/animations/pageThree',
	},
	{
		index: 4,
		title: 'Animation Four',
		desc: 'A Juice Website landing page with animations',
		link: '/animations/pageFour',
	},
	{
		index: 5,
		title: 'Animation Five',
		desc: 'An Animated Travel App screen',
		link: '/animations/pageFive',
	},
	{
		index: 6,
		title: 'Animation Six',
		desc: 'An add to cart button animation',
		link: '/animations/pageSix',
	},
	{
		index: 7,
		title: 'Animation Seven',
		desc: 'A Simple Image hover effect',
		link: '/animations/pageSeven',
	},
	{
		index: 8,
		title: 'Animation Eight',
		desc: 'A GSAP fullscreen Slider',
		link: '/animations/pageEight',
	},
	{
		index: 9,
		title: 'Animation Nine',
		desc: '',
		link: '/animations/pageNine',
	},
	{
		index: 10,
		title: 'Animation Ten',
		desc: '',
		link: '/animations/pageTen',
	},
]


export const setTitle = (data:any) => {
	const title = useTitle()
	title.value = data
}