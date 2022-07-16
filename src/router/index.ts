import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from '~pages'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes,
		{
			path: '/:catchAll(.*)',
			component: () => import('../views/404.vue'),
		},
	],
})

// router.afterEach(() => {
// 	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
// })

export { router }
