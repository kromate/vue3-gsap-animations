import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import { router } from './router/index'
import { createMetaManager } from 'vue-meta'

const app = createApp(App)
app.use(router).use(createMetaManager())
app.mount('#app')