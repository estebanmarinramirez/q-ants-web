import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import './style.css'
import App from './App.vue'

// Import layouts for routing
import MainLayout from './layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: MainLayout,
      children: [
        { path: '', name: 'home', component: () => import('./views/Home.vue') },
        { path: 'chat', name: 'chat', component: () => import('./views/Chat.vue') },
        { path: 'analysis', name: 'analysis', component: () => import('./views/Analysis.vue') },
        { path: 'portfolio', name: 'portfolio', component: () => import('./views/Portfolio.vue') },
        { path: 'tasks', name: 'tasks', component: () => import('./views/Tasks.vue') },
        { path: 'recipes', name: 'recipes', component: () => import('./views/Recipes.vue') },
        { path: 'config', name: 'config', component: () => import('./views/Config.vue') }
      ]
    }
  ]
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.dark',
      cssLayer: false
    }
  }
})

app.mount('#app')
