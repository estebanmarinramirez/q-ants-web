<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from 'primevue/breadcrumb'
import { Home, ChevronRight } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Route to label mapping
const routeLabels = {
  '/': 'Home',
  '/chat': 'Q-ANTS',
  '/analysis': 'Analysis & Tools',
  '/portfolio': 'Portfolio',
  '/tasks': 'Jobs & Tasks',
  '/recipes': 'Recipes',
  '/config': 'Configuration'
}

// Generate breadcrumb items dynamically
const breadcrumbItems = computed(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  const items = []

  // Always start with Home
  items.push({
    label: 'Home',
    icon: Home,
    route: '/',
    command: () => router.push('/')
  })

  // Build breadcrumbs for nested paths
  let currentPath = ''
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const label = routeLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1)
    
    // Don't add if it's the same as home
    if (currentPath !== '/') {
      items.push({
        label,
        route: currentPath,
        command: () => router.push(currentPath)
      })
    }
  })

  return items
})

// Current breadcrumb items for PrimeVue Breadcrumb
const breadcrumbModel = computed(() => {
  const items = breadcrumbItems.value.map((item, index) => ({
    ...item,
    // Last item shouldn't be clickable
    command: index === breadcrumbItems.value.length - 1 ? undefined : item.command
  }))

  return items
})

// Home item for PrimeVue Breadcrumb
const home = computed(() => ({
  icon: Home,
  command: () => router.push('/')
}))
</script>

<template>
  <div class="flex items-center px-6 py-3 bg-surface-0 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700">
    <Breadcrumb 
      :model="breadcrumbModel" 
      :home="home"
      class="flex-1"
    >
      <template #item="{ item, props }">
        <router-link 
          v-if="item.route && item.command" 
          :to="item.route"
          :class="props.class"
          class="flex items-center text-surface-600 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <component 
            v-if="item.icon" 
            :is="item.icon" 
            class="w-4 h-4 mr-2" 
          />
          <span class="text-sm font-medium">{{ item.label }}</span>
        </router-link>
        <span 
          v-else 
          :class="props.class"
          class="flex items-center text-surface-900 dark:text-surface-100 font-semibold"
        >
          <component 
            v-if="item.icon" 
            :is="item.icon" 
            class="w-4 h-4 mr-2" 
          />
          <span class="text-sm">{{ item.label }}</span>
        </span>
      </template>
      
      <template #separator>
        <ChevronRight class="w-3 h-3 text-surface-400 dark:text-surface-500 mx-2" />
      </template>
    </Breadcrumb>
  </div>
</template>

<style scoped>
/* Custom breadcrumb styling */
:deep(.p-breadcrumb) {
  background: transparent;
  border: none;
  padding: 0;
}

:deep(.p-breadcrumb ol) {
  flex-wrap: wrap;
}

:deep(.p-breadcrumb-list) {
  align-items: center;
}
</style> 