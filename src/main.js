import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '../src/assets/css/main.css'
import 'animate.css'

createApp(App).use(store).mount('#app')
