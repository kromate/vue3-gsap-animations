import { createApp } from 'vue'
import App from './App.vue'
import { router as setupRouter } from '@/router'
import './assets/style/tailwind.css'

const init = async () => {
	const router = await setupRouter
	console.log(router.getRoutes())
	const app = createApp(App)
	app.use(router).mount('#app')
}

init()
