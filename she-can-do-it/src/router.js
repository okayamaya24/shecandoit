import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import About from './views/About.vue'
import Join from './views/Join.vue' 

const routes = [
  { path: '/', component: Home },
  { path: '/events', component: Events },
  { path: '/about', component: About },
  { path: '/join', name: 'Join', component: Join },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router