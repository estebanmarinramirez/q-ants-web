<script setup>
import { ChartBar, Briefcase, Search, LightBulb } from 'lucide-vue-next'

const icons = {
  ChartBar,
  Briefcase,
  Search,
  LightBulb
}

defineProps({
  actions: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <a
      v-for="action in actions"
      :key="action.id"
      :href="action.route"
      class="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <component :is="icons[action.icon]" class="w-6 h-6 text-primary mb-2" />
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ action.label }}</span>
    </a>
  </div>
</template>