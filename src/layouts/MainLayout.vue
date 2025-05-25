<script setup>
import { ref } from 'vue'
import Sidebar from '../components/layout/Sidebar.vue'
import MainPanel from '../components/layout/MainPanel.vue'
import ChatPanel from '../components/layout/ChatPanel.vue'

const isSidebarCollapsed = ref(false)
const chatPanelWidth = ref(400)
</script>

<template>
  <div class="flex h-screen bg-white dark:bg-dark">
    <Sidebar :collapsed="isSidebarCollapsed" @toggle="isSidebarCollapsed = !isSidebarCollapsed" />
    <main class="flex-grow">
      <router-view />
    </main>
    <ChatPanel :width="chatPanelWidth" />
  </div>
</template>