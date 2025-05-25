<script setup>
import { ref } from 'vue'
import { 
  Home,
  MessageSquare,
  LineChart,
  Briefcase,
  Timer,
  BookOpen,
  Settings,
  LogOut,
  Info
} from 'lucide-vue-next'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const mainMenuItems = [
  { icon: Home, label: 'Home', route: '/' },
  { icon: MessageSquare, label: 'Q-ANTS', route: '/chat' },
  { icon: LineChart, label: 'Analysis/Tools', route: '/analysis' },
  { icon: Briefcase, label: 'Portfolio', route: '/portfolio' },
  { icon: Timer, label: 'Jobs/Tasks', route: '/tasks' }
]

const bottomMenuItems = [
  { icon: BookOpen, label: 'Recipes', route: '/recipes' },
  { icon: Settings, label: 'Config', route: '/config' },
  { icon: LogOut, label: 'Logout', route: '/logout' }
]

const version = 'v1.0.0'
</script>

<template>
  <aside
    class="h-full bg-white dark:bg-dark border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col"
    :class="{ 'w-[200px]': !collapsed, 'w-[60px]': collapsed }"
  >
    <div class="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
      <img v-if="!collapsed" src="/logo.svg" alt="Q-Ants" class="h-8" />
      <button
        @click="emit('toggle')"
        class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span class="sr-only">Toggle Sidebar</span>
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto">
      <ul class="space-y-2 p-2">
        <li v-for="item in mainMenuItems" :key="item.label">
          <router-link
            :to="item.route"
            class="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span v-if="!collapsed" class="ml-3">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="border-t border-gray-200 dark:border-gray-800">
      <ul class="space-y-2 p-2">
        <li v-for="item in bottomMenuItems" :key="item.label">
          <router-link
            :to="item.route"
            class="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span v-if="!collapsed" class="ml-3">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
      
      <div class="p-4 text-xs text-gray-500 dark:text-gray-400 flex items-center">
        <Info class="w-4 h-4" />
        <span v-if="!collapsed" class="ml-2">{{ version }}</span>
      </div>
    </div>
  </aside>
</template>