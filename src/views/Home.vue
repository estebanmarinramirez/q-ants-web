<script setup>
  import { ref } from 'vue'

  const stats = ref([
    { label: 'Portfolio Value', value: '$125,430', change: '+2.4%', positive: true },
    { label: 'Active Strategies', value: '8', change: '+1', positive: true },
    { label: 'Monthly Return', value: '3.2%', change: '+0.8%', positive: true },
    { label: 'Risk Score', value: '6.5', change: '-0.2', positive: false },
  ])
</script>

<template>
  <div class="p-6">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Q-Ants</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Your quantitative analysis and trading dashboard
      </p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card
        v-for="stat in stats"
        :key="stat.label"
        class="p-4"
      >
        <template #content>
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {{ stat.label }}
              </p>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ stat.value }}
              </p>
            </div>
            <Badge
              :value="stat.change"
              :severity="stat.positive ? 'success' : 'danger'"
              class="text-xs"
            />
          </div>
        </template>
      </Card>
    </div>

    <!-- Main Content Area -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Portfolio Overview -->
      <Card>
        <template #header>
          <div class="p-4 border-b">
            <h3 class="text-lg font-semibold">Portfolio Overview</h3>
          </div>
        </template>
        <template #content>
          <div class="p-4">
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Your portfolio performance and allocation
            </p>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-sm">Stocks</span>
                <div class="flex items-center space-x-2">
                  <ProgressBar
                    :value="65"
                    class="w-20"
                  />
                  <span class="text-sm font-medium">65%</span>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Bonds</span>
                <div class="flex items-center space-x-2">
                  <ProgressBar
                    :value="25"
                    class="w-20"
                  />
                  <span class="text-sm font-medium">25%</span>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-sm">Cash</span>
                <div class="flex items-center space-x-2">
                  <ProgressBar
                    :value="10"
                    class="w-20"
                  />
                  <span class="text-sm font-medium">10%</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>

      <!-- Recent Activity -->
      <Card>
        <template #header>
          <div class="p-4 border-b">
            <h3 class="text-lg font-semibold">Recent Activity</h3>
          </div>
        </template>
        <template #content>
          <div class="p-4">
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <Avatar
                  icon="pi pi-chart-line"
                  class="bg-blue-500"
                />
                <div class="flex-1">
                  <p class="text-sm font-medium">Strategy "Growth Alpha" executed</p>
                  <p class="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <Avatar
                  icon="pi pi-dollar"
                  class="bg-green-500"
                />
                <div class="flex-1">
                  <p class="text-sm font-medium">Dividend received: $245.30</p>
                  <p class="text-xs text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div class="flex items-center space-x-3">
                <Avatar
                  icon="pi pi-bell"
                  class="bg-orange-500"
                />
                <div class="flex-1">
                  <p class="text-sm font-medium">Risk alert: High volatility detected</p>
                  <p class="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>

    <!-- Quick Actions -->
    <div class="mt-8">
      <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
      <div class="flex flex-wrap gap-3">
        <Button
          label="Run Analysis"
          icon="pi pi-chart-line"
          class="p-button-primary"
          @click="$router.push('/analysis')"
        />
        <Button
          label="View Portfolio"
          icon="pi pi-briefcase"
          class="p-button-outlined"
          @click="$router.push('/portfolio')"
        />
        <Button
          label="Chat with Q-Ants"
          icon="pi pi-comments"
          class="p-button-outlined"
          @click="$router.push('/chat')"
        />
        <Button
          label="Manage Tasks"
          icon="pi pi-list"
          class="p-button-outlined"
          @click="$router.push('/tasks')"
        />
      </div>
    </div>
  </div>
</template>
