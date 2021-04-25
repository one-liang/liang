import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/styles/tailwind.postcss'
import './assets/styles/variable.postcss'
import './assets/styles/main.postcss'

const app = createApp(App)

app.use(router)
app.mount('#app')
