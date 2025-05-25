<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { 
  Home,
  MessageSquare,
  LineChart,
  Briefcase,
  Timer,
  BookOpen,
  Settings,
  LogOut,
  Info,
  Menu as MenuIcon
} from 'lucide-vue-next'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const props = defineProps({
  collapsed: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])
const router = useRouter()
const route = useRoute()

// Convert menu items to PrimeVue Menu format
const mainMenuItems = ref([
  { 
    label: 'Home', 
    icon: Home, 
    route: '/',
    command: () => router.push('/')
  },
  { 
    label: 'Q-ANTS', 
    icon: MessageSquare, 
    route: '/chat',
    command: () => router.push('/chat')
  },
  { 
    label: 'Analysis/Tools', 
    icon: LineChart, 
    route: '/analysis',
    command: () => router.push('/analysis')
  },
  { 
    label: 'Portfolio', 
    icon: Briefcase, 
    route: '/portfolio',
    command: () => router.push('/portfolio')
  },
  { 
    label: 'Jobs/Tasks', 
    icon: Timer, 
    route: '/tasks',
    command: () => router.push('/tasks')
  }
])

const bottomMenuItems = ref([
  { 
    label: 'Recipes', 
    icon: BookOpen, 
    route: '/recipes',
    command: () => router.push('/recipes')
  },
  { 
    label: 'Config', 
    icon: Settings, 
    route: '/config',
    command: () => router.push('/config')
  },
  { 
    label: 'Logout', 
    icon: LogOut, 
    route: '/logout',
    command: () => handleLogout()
  }
])

const version = 'v1.0.0'

const handleLogout = () => {
  // Add logout logic here
  console.log('Logout clicked')
}

// Check if route is active
const isRouteActive = (itemRoute) => {
  return route.path === itemRoute
}
</script>

<template>
  <aside
    class="h-full bg-surface-0 dark:bg-surface-900 border-r border-surface-200 dark:border-surface-700 transition-all duration-300 flex flex-col"
    :class="{ 'w-[200px]': !collapsed, 'w-[60px]': collapsed }"
  >
    <!-- Header with Logo and Toggle -->
    <div class="p-4 flex items-center justify-between border-b border-surface-200 dark:border-surface-700">
      <img 
        v-if="!collapsed" 
        src="/logo.svg" 
        alt="Q-Ants" 
        class="h-8" 
      />
      <Button
        @click="emit('toggle')"
        text
        rounded
        size="small"
        class="p-2"
        :class="{ 'ml-auto': collapsed }"
        aria-label="Toggle Sidebar"
      >
        <MenuIcon class="w-5 h-5" />
      </Button>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 overflow-y-auto p-2">
      <div class="space-y-1">
        <div 
          v-for="item in mainMenuItems" 
          :key="item.label"
          class="relative"
        >
          <button
            @click="item.command"
            class="w-full flex items-center px-3 py-2.5 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 group"
            :class="{
              'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-sm': isRouteActive(item.route),
              'justify-center': collapsed,
              'justify-start': !collapsed
            }"
          >
            <component 
              :is="item.icon" 
              class="w-5 h-5 flex-shrink-0"
              :class="{
                'text-primary-600 dark:text-primary-400': isRouteActive(item.route)
              }"
            />
            <span 
              v-if="!collapsed" 
              class="ml-3 text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              :class="{
                'text-primary-600 dark:text-primary-400': isRouteActive(item.route)
              }"
            >
              {{ item.label }}
            </span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Bottom Section -->
    <div class="border-t border-surface-200 dark:border-surface-700">
      <div class="p-2 space-y-1">
        <div 
          v-for="item in bottomMenuItems" 
          :key="item.label"
          class="relative"
        >
          <button
            @click="item.command"
            class="w-full flex items-center px-3 py-2.5 rounded-lg text-surface-700 dark:text-surface-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200 group"
            :class="{
              'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 shadow-sm': isRouteActive(item.route),
              'justify-center': collapsed,
              'justify-start': !collapsed
            }"
          >
            <component 
              :is="item.icon" 
              class="w-5 h-5 flex-shrink-0"
              :class="{
                'text-primary-600 dark:text-primary-400': isRouteActive(item.route)
              }"
            />
            <span 
              v-if="!collapsed" 
              class="ml-3 text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
              :class="{
                'text-primary-600 dark:text-primary-400': isRouteActive(item.route)
              }"
            >
              {{ item.label }}
            </span>
          </button>
        </div>
      </div>
      
      <!-- Version Info -->
      <div class="p-4 text-xs text-surface-500 dark:text-surface-400 flex items-center">
        <Info class="w-4 h-4 flex-shrink-0" />
        <span v-if="!collapsed" class="ml-2">{{ version }}</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Add subtle hover effects and smooth transitions */
.group:hover {
  transform: translateX(1px);
}

/* Active state indicator */
.relative::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: var(--p-primary-color);
  transition: height 0.2s ease;
  border-radius: 0 2px 2px 0;
}

.relative:has(.bg-primary-50)::before,
.relative:has(.dark\\:bg-primary-900\\/20)::before {
  height: 20px;
}
</style>