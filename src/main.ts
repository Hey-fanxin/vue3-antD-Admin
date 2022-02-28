import { createApp } from 'vue'
import App from './App.vue'
import { useRouter } from './routers'

const app = createApp(App)
useRouter(app)
app.mount('#app')
