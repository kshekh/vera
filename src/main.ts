import './assets/main.css'
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';
// Supports weights 100-900
import '@fontsource-variable/urbanist';
import 'remixicon/fonts/remixicon.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
