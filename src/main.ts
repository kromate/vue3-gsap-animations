import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import { router } from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')