<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import InputText from 'primevue/inputtext'
  import ScrollPanel from 'primevue/scrollpanel'
  import { Send, MessageSquare } from 'lucide-vue-next'

  const messages = ref([
    {
      id: 1,
      agent: 'analyst_ant',
      content: 'Welcome to Q-Ants! How can I assist you with your financial analysis today?',
      timestamp: new Date().toISOString(),
    },
    {
      id: 2,
      agent: 'analyst_ant',
      content:
        'I can help you with portfolio analysis, risk assessment, market research, and financial planning. What would you like to explore?',
      timestamp: new Date(Date.now() - 60000).toISOString(),
    },
  ])

  const newMessage = ref('')

  const sendMessage = () => {
    if (!newMessage.value.trim()) return

    messages.value.push({
      id: messages.value.length + 1,
      agent: 'user',
      content: newMessage.value,
      timestamp: new Date().toISOString(),
    })

    // Simulate Q-Ants response
    setTimeout(() => {
      messages.value.push({
        id: messages.value.length + 1,
        agent: 'analyst_ant',
        content: 'I understand your request. Let me analyze that for you...',
        timestamp: new Date().toISOString(),
      })
    }, 1000)

    newMessage.value = ''
  }
</script>

<template>
  <aside
    class="h-full bg-surface-0 dark:bg-surface-900 border-l border-surface-200 dark:border-surface-700 flex flex-col"
  >
    <!-- Chat Header -->
    <div
      class="p-4 border-b border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800"
    >
      <div class="flex items-center space-x-2">
        <MessageSquare class="w-5 h-5 text-primary-600 dark:text-primary-400" />
        <h2 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Q-Ants Chat</h2>
      </div>
      <p class="text-xs text-surface-600 dark:text-surface-400 mt-1">AI Financial Assistant</p>
    </div>

    <!-- Messages Container -->
    <ScrollPanel
      class="flex-1 p-4"
      style="width: 100%; height: 100%"
    >
      <div class="space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="[
            'max-w-[85%] rounded-xl p-3 shadow-sm',
            message.agent === 'user'
              ? 'bg-primary-500 text-white ml-auto'
              : 'bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-100',
          ]"
        >
          <div class="flex items-start space-x-2">
            <div class="flex-1">
              <p class="text-sm leading-relaxed">
                {{ message.content }}
              </p>
              <span class="text-xs opacity-70 mt-2 block">
                {{ new Date(message.timestamp).toLocaleTimeString() }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ScrollPanel>

    <!-- Chat Input -->
    <div
      class="p-4 border-t border-surface-200 dark:border-surface-700 bg-surface-50 dark:bg-surface-800"
    >
      <form
        class="flex space-x-2"
        @submit.prevent="sendMessage"
      >
        <InputText
          v-model="newMessage"
          placeholder="Ask Q-Ants anything..."
          class="flex-1"
          :class="{ 'pr-12': newMessage.length > 0 }"
        />
        <Button
          type="submit"
          :disabled="!newMessage.trim()"
          size="small"
          class="px-4"
        >
          <Send class="w-4 h-4" />
        </Button>
      </form>
      <p class="text-xs text-surface-500 dark:text-surface-400 mt-2">
        Press Enter to send • Q-Ants is powered by AI
      </p>
    </div>
  </aside>
</template>
