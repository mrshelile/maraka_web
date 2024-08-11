import { createApp } from 'vue'
import './index.css'
import 'flowbite'

import App from './App.vue'
// import 'vue-router'
import Routes from './Routes/Routes'
import { store } from './store/store';
// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// })
createApp(App).use(Routes).use(store).mount('#app')
