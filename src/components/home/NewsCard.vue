<script setup>
  import { formatDistanceToNow } from 'date-fns'

  defineProps({
    news: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
    <h3 class="font-semibold text-gray-900 dark:text-white mb-2">
      {{ news.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 text-sm mb-3">
      {{ news.summary }}
    </p>
    <div class="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
      <span>{{ formatDistanceToNow(new Date(news.timestamp), { addSuffix: true }) }}</span>
      <span>{{ news.source }}</span>
    </div>
  </div>
</template>
