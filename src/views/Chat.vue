<script setup>
  import { ref } from 'vue'

  const messages = ref([
    {
      id: 1,
      type: 'bot',
      content:
        "Hello! I'm your Q-Ants assistant. How can I help you with your financial analysis today?",
      timestamp: new Date(),
    },
  ])

  const newMessage = ref('')

  const sendMessage = () => {
    if (!newMessage.value.trim()) return

    messages.value.push({
      id: messages.value.length + 1,
      type: 'user',
      content: newMessage.value,
      timestamp: new Date(),
    })

    // Simulate bot response
    setTimeout(() => {
      messages.value.push({
        id: messages.value.length + 1,
        type: 'bot',
        content:
          'I understand you want to discuss: "' +
          newMessage.value +
          '". Let me analyze that for you...',
        timestamp: new Date(),
      })
    }, 1000)

    newMessage.value = ''
  }
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Header -->
    <div class="p-6 border-b border-gray-200 dark:border-gray-700">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Q-Ants Chat</h1>
      <p class="text-gray-600 dark:text-gray-400">Chat with your AI financial assistant</p>
    </div>

    <!-- Messages Area -->
    <div class="flex-1 overflow-y-auto p-6 space-y-4">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['flex', message.type === 'user' ? 'justify-end' : 'justify-start']"
      >
        <div
          :class="[
            'max-w-xs lg:max-w-md px-4 py-2 rounded-lg',
            message.type === 'user'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
          ]"
        >
          <p class="text-sm">
            {{ message.content }}
          </p>
          <p class="text-xs opacity-70 mt-1">
            {{ message.timestamp.toLocaleTimeString() }}
          </p>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="p-6 border-t border-gray-200 dark:border-gray-700">
      <form
        class="flex space-x-3"
        @submit.prevent="sendMessage"
      >
        <InputText
          v-model="newMessage"
          placeholder="Type your message..."
          class="flex-1"
        />
        <Button
          type="submit"
          label="Send"
          icon="pi pi-send"
          :disabled="!newMessage.trim()"
        />
      </form>
    </div>
  </div>
</template>
