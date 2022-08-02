import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import { createMetaManager } from 'vue-meta'
import { router as setupRouter } from '@/router'


const init = async () => {
	const router = await setupRouter
	const app = createApp(App)
	app.use(router).mount('#app')
}

init().then()