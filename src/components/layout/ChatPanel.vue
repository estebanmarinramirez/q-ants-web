<script setup>
import { ref } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 400
  }
})

const messages = ref([
  {
    id: 1,
    agent: 'analyst_ant',
    content: 'Welcome to Q-Ants! How can I assist you with your financial analysis today?',
    timestamp: new Date().toISOString()
  }
])

const newMessage = ref('')

const sendMessage = () => {
  if (!newMessage.value.trim()) return

  messages.value.push({
    id: messages.value.length + 1,
    agent: 'user',
    content: newMessage.value,
    timestamp: new Date().toISOString()
  })

  newMessage.value = ''
}
</script>

<template>
  <aside
    class="h-full border-l border-gray-200 dark:border-gray-800 flex flex-col"
    :style="{ width: `${width}px` }"
  >
    <div class="p-4 border-b border-gray-200 dark:border-gray-800">
      <h2 class="text-lg font-semibold">Q-Ants Chat</h2>
    </div>

    <div class="flex-1 overflow-y-auto p-4 space-y-4">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="[
          'max-w-[80%] rounded-lg p-3',
          message.agent === 'user'
            ? 'bg-primary text-white ml-auto'
            : 'bg-gray-100 dark:bg-gray-800'
        ]"
      >
        <p class="text-sm">{{ message.content }}</p>
        <span class="text-xs opacity-70 mt-1 block">
          {{ new Date(message.timestamp).toLocaleTimeString() }}
        </span>
      </div>
    </div>

    <div class="p-4 border-t border-gray-200 dark:border-gray-800">
      <form @submit.prevent="sendMessage" class="flex space-x-2">
        <input
          v-model="newMessage"
          type="text"
          placeholder="Type your message..."
          class="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Send
        </button>
      </form>
    </div>
  </aside>
</template>