<script setup>
  import { ref } from 'vue'
  import { Search } from 'lucide-vue-next'

  const searchQuery = ref('')
  const emit = defineEmits(['search'])

  const handleSearch = () => {
    emit('search', searchQuery.value)
  }
</script>

<template>
  <div class="w-full max-w-2xl">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for assets, analysis, or tasks..."
        class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
        @keyup.enter="handleSearch"
      />
    </div>
  </div>
</template>
