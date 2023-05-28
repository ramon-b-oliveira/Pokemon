import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import "bulma/sass/utilities/_all.sass"

createApp(App).use(router).mount('#app')
