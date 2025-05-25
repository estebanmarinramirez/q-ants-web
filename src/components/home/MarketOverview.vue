<script setup>
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Badge from 'primevue/badge'

  const marketData = ref([
    { symbol: 'SPY', price: 432.15, change: '+2.34', changePercent: '+0.54%', positive: true },
    { symbol: 'QQQ', price: 378.92, change: '+1.82', changePercent: '+0.48%', positive: true },
    { symbol: 'VTI', price: 245.67, change: '-0.93', changePercent: '-0.38%', positive: false },
    { symbol: 'BTC', price: 43521, change: '+1245', changePercent: '+2.95%', positive: true },
  ])
</script>

<template>
  <Card class="h-full">
    <template #title>
      <div class="flex items-center gap-2">
        <span>Market Overview</span>
        <Badge
          value="Live"
          severity="success"
        />
      </div>
    </template>

    <template #content>
      <div class="space-y-4">
        <div
          v-for="item in marketData"
          :key="item.symbol"
          class="flex justify-between items-center p-3 bg-surface-50 dark:bg-surface-800 rounded-lg"
        >
          <div>
            <div class="font-semibold text-lg">{{ item.symbol }}</div>
            <div class="text-surface-600 text-sm">${{ item.price.toLocaleString() }}</div>
          </div>
          <div class="text-right">
            <div :class="['font-medium', item.positive ? 'text-green-600' : 'text-red-600']">
              {{ item.change }}
            </div>
            <div :class="['text-sm', item.positive ? 'text-green-500' : 'text-red-500']">
              {{ item.changePercent }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
