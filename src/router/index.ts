import { routes } from '@/router/routes'
import { createRouter, createWebHistory } from 'vue-router'

export const setupRouter = async () => {
	const routesArr = await Promise.all(routes)
	const router = createRouter({
		history: createWebHistory(),
		routes: [
			...routesArr,
			{
				path: '/:catchAll(.*)',
				component: () => import('../views/404.vue'),
			},
		],
	})

	router.afterEach(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	})

	return router
}

export const router = setupRouter()
