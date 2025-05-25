<script setup>
  import { formatDistanceToNow } from 'date-fns'
  import { Bell } from 'lucide-vue-next'

  defineProps({
    update: {
      type: Object,
      required: true,
    },
  })
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border-l-4"
    :class="[
      update.type === 'alert'
        ? 'border-error'
        : update.type === 'warning'
          ? 'border-warning'
          : 'border-success',
    ]"
  >
    <div class="flex items-start gap-3">
      <Bell class="w-5 h-5 text-gray-400" />
      <div class="flex-1">
        <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
          {{ update.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm">
          {{ update.message }}
        </p>
        <span class="text-xs text-gray-500 dark:text-gray-400 mt-2 block">
          {{ formatDistanceToNow(new Date(update.timestamp), { addSuffix: true }) }}
        </span>
      </div>
    </div>
  </div>
</template>
