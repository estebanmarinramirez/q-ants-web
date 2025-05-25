<script setup>
  import { ref } from 'vue'
  import Sidebar from '../components/layout/Sidebar.vue'
  import TopToolbar from '../components/layout/TopToolbar.vue'
  import Breadcrumb from '../components/layout/Breadcrumb.vue'
  import MainPanel from '../components/layout/MainPanel.vue'
  import ChatPanel from '../components/layout/ChatPanel.vue'
  import Splitter from 'primevue/splitter'
  import SplitterPanel from 'primevue/splitterpanel'

  const isSidebarCollapsed = ref(false)
  const chatPanelWidth = ref(400)

  // Splitter configurations
  const mainSplitterSizes = ref([15, 70, 15]) // sidebar, main, chat percentages
  const sidebarMinSize = ref(3) // minimum 3% when collapsed
  const chatMinSize = ref(10) // minimum 10% for chat panel

  // Handle sidebar collapse
  const handleSidebarToggle = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value
    if (isSidebarCollapsed.value) {
      mainSplitterSizes.value = [3, 82, 15] // collapsed sidebar
    } else {
      mainSplitterSizes.value = [15, 70, 15] // expanded sidebar
    }
  }

  // Handle splitter resize
  const onSplitterResize = event => {
    mainSplitterSizes.value = event.sizes
    // Auto-collapse sidebar if resized too small
    if (event.sizes[0] <= 5 && !isSidebarCollapsed.value) {
      isSidebarCollapsed.value = true
    } else if (event.sizes[0] > 5 && isSidebarCollapsed.value) {
      isSidebarCollapsed.value = false
    }
  }
</script>

<template>
  <div class="h-screen bg-surface-50 dark:bg-surface-950">
    <Splitter
      :size="mainSplitterSizes"
      class="h-full"
      @resizeend="onSplitterResize"
    >
      <!-- Sidebar Panel -->
      <SplitterPanel
        :size="mainSplitterSizes[0]"
        :min-size="sidebarMinSize"
        class="!overflow-visible"
      >
        <Sidebar
          :collapsed="isSidebarCollapsed"
          @toggle="handleSidebarToggle"
        />
      </SplitterPanel>

      <!-- Main Content Panel -->
      <SplitterPanel
        :size="mainSplitterSizes[1]"
        :min-size="30"
        class="!overflow-visible"
      >
        <div class="h-full flex flex-col">
          <!-- Top Toolbar -->
          <TopToolbar />

          <!-- Breadcrumb Navigation -->
          <Breadcrumb />

          <!-- Main Content -->
          <main class="flex-1 overflow-auto bg-surface-0 dark:bg-surface-900">
            <router-view />
          </main>
        </div>
      </SplitterPanel>

      <!-- Chat Panel -->
      <SplitterPanel
        :size="mainSplitterSizes[2]"
        :min-size="chatMinSize"
        class="!overflow-visible"
      >
        <ChatPanel />
      </SplitterPanel>
    </Splitter>
  </div>
</template>
