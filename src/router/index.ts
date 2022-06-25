import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from '~pages'


const router = createRouter({ history: createWebHistory(), routes })

// router.afterEach(() => {
// 	window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
// })

export { router }
