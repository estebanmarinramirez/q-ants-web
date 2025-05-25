<script setup>
import { ref } from 'vue'

const activeTab = ref('overview')

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'technical', label: 'Technical Analysis' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'strategies', label: 'Strategies' },
  { id: 'market', label: 'Market Data' },
  { id: 'reports', label: 'Reports' }
]
</script>

<template>
  <main class="h-full flex flex-col">
    <div class="border-b border-gray-200 dark:border-gray-800">
      <nav class="flex space-x-4 px-4" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="[
            activeTab === tab.id
              ? 'border-primary text-primary'
              : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300',
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          ]"
        >
          {{ tab.label }}
        </button>
      </nav>
    </div>

    <div class="flex-1 p-6 overflow-auto">
      <div v-if="activeTab === 'overview'">
        <!-- Overview content will go here -->
        <h2 class="text-2xl font-semibold mb-4">Overview</h2>
      </div>
      <!-- Other tab contents will be implemented later -->
    </div>
  </main>
</template>