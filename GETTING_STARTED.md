# Getting Started with Q-Ants PrimeVue Migration

**Last Updated:** Sun May 25 07:52:24 CEST 2025

## 🚀 Quick Start Guide

This guide will help you immediately begin implementing the [PrimeVue integration workflow](./WORKFLOW.md) for the Q-Ants application.

## Step 1: Install PrimeVue Dependencies

First, let's install all the required PrimeVue packages:

```bash
# Core PrimeVue packages
npm install primevue @primevue/themes @primevue/icons

# Auto-import resolver for better developer experience
npm install -D @primevue/auto-import-resolver unplugin-vue-components

# Additional development tools
npm install -D eslint @eslint/js @vitejs/plugin-vue
npm install -D vue-tsc typescript vitest @vitest/ui @vitest/coverage-v8
npm install -D @lhci/cli vite-bundle-analyzer
```

## Step 2: Configure Vite for PrimeVue

Update your `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()]
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'primevue': ['primevue'],
          'vendor': ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

## Step 3: Initialize PrimeVue in Your App

Update `src/main.js`:

```javascript
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import './style.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/chat', component: () => import('./views/Chat.vue') },
    { path: '/analysis', component: () => import('./views/Analysis.vue') },
    // Add more routes as needed
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
```

## Step 4: Update Tailwind Configuration

Modify `tailwind.config.js` to work alongside PrimeVue:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Q-Ants brand colors (matching your logo)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe', 
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main brand color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af', // Dark brand color
          900: '#1e3a8a',
        },
        surface: {
          0: '#ffffff',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
```

## Step 5: Create Your First PrimeVue Component

Let's migrate the Sidebar to use PrimeVue Menu. Create `src/components/layout/PrimeSidebar.vue`:

```vue
<script setup>
import { ref } from 'vue'
import Menu from 'primevue/menu'
import { 
  Home,
  MessageSquare,
  LineChart,
  Briefcase,
  Timer,
  BookOpen,
  Settings,
  LogOut
} from 'lucide-vue-next'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const menuItems = ref([
  {
    label: 'Main',
    items: [
      { label: 'Home', icon: Home, route: '/' },
      { label: 'Q-ANTS', icon: MessageSquare, route: '/chat' },
      { label: 'Analysis/Tools', icon: LineChart, route: '/analysis' },
      { label: 'Portfolio', icon: Briefcase, route: '/portfolio' },
      { label: 'Jobs/Tasks', icon: Timer, route: '/tasks' }
    ]
  },
  {
    separator: true
  },
  {
    label: 'Settings',
    items: [
      { label: 'Recipes', icon: BookOpen, route: '/recipes' },
      { label: 'Config', icon: Settings, route: '/config' },
      { label: 'Logout', icon: LogOut, route: '/logout' }
    ]
  }
])
</script>

<template>
  <div 
    class="h-full bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 transition-all duration-300 flex flex-col"
    :class="{ 'w-[280px]': !collapsed, 'w-[60px]': collapsed }"
  >
    <!-- Header with logo and toggle -->
    <div class="p-4 flex items-center justify-between border-b border-surface-200 dark:border-surface-700">
      <img v-if="!collapsed" src="/logo.svg" alt="Q-Ants" class="h-8" />
      <Button 
        @click="emit('toggle')"
        icon="pi pi-bars"
        severity="secondary"
        text
        size="small"
      />
    </div>

    <!-- Navigation Menu -->
    <div class="flex-1 overflow-y-auto p-2">
      <Menu 
        :model="menuItems" 
        class="w-full border-none bg-transparent"
      >
        <template #item="{ item }">
          <router-link 
            v-if="item.route" 
            :to="item.route" 
            class="flex items-center p-3 rounded-lg text-surface-700 dark:text-surface-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span v-if="!collapsed" class="ml-3">{{ item.label }}</span>
          </router-link>
        </template>
      </Menu>
    </div>

    <!-- Version info -->
    <div class="p-4 text-xs text-surface-500 flex items-center border-t border-surface-200 dark:border-surface-700">
      <i class="pi pi-info-circle"></i>
      <span v-if="!collapsed" class="ml-2">v1.0.0</span>
    </div>
  </div>
</template>
```

## Step 6: Set Up GitHub Repository

Initialize Git and push to GitHub:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: initial Q-Ants application with PrimeVue workflow setup

- Add comprehensive workflow documentation
- Configure GitHub Actions CI/CD pipeline
- Set up issue templates for bug reports, features, and PrimeVue migrations
- Add Lighthouse performance monitoring
- Create getting started guide
- Prepare for PrimeVue integration"

# Create GitHub repository (if needed)
# gh repo create q-ants-web --public --description "🐜 Q-Ants Financial Analysis Interface"

# Push to GitHub
git branch -M main
git remote add origin https://github.com/estebanmarinramirez/q-ants-web.git
git push -u origin main
```

## Step 7: Create Your First Migration Issue

Go to your GitHub repository and create a new issue using the "🔄 PrimeVue Component Migration" template:

1. **Current Component:** Sidebar.vue
2. **Target PrimeVue Component:** Menu
3. **Migration Phase:** Phase 1: Navigation & Layout (Week 1)
4. **Priority:** High (Blocking other work)

## Step 8: Start Development

```bash
# Install the new dependencies
npm install

# Start development server
npm run dev

# Open in another terminal for testing
npm run test

# Run linting
npm run lint
```

## 🎯 Immediate Tasks (Next 2 Hours)

- [ ] Install PrimeVue dependencies
- [ ] Update Vite configuration
- [ ] Configure main.js with PrimeVue
- [ ] Update Tailwind config
- [ ] Create first PrimeVue component (Sidebar)
- [ ] Push to GitHub repository
- [ ] Create first migration issue

## 📚 Reference Links

- [PrimeVue Documentation](https://github.com/primefaces/primevue) (12.7k ⭐)
- [Sakai Vue Template](https://github.com/primefaces/sakai-vue) (947 ⭐)
- [PrimeVue Examples Repository](https://github.com/primefaces/primevue-examples)
- [Live Sakai Demo](https://sakai.primevue.org/)

## 🚨 Important Notes

1. **Keep existing functionality working** - migrate components one by one
2. **Test on multiple browsers** - ensure compatibility
3. **Maintain Q-Ants branding** - use the blue gradient colors from your logo
4. **Document everything** - update the workflow document as you learn
5. **Use GitHub issues** - track all migration tasks

## Need Help?

- Check the [full workflow document](./WORKFLOW.md)
- Review [PrimeVue discussions](https://github.com/primefaces/primevue/discussions)
- Join [PrimeVue Discord](https://discord.gg/gzKFYnpmCY)

---

**Ready to start?** Run the commands in Step 1 and follow the guide! 🚀 