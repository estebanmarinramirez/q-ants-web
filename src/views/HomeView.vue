<script setup>
import { ref } from 'vue'
import SearchBar from '../components/home/SearchBar.vue'
import NewsCard from '../components/home/NewsCard.vue'
import UpdateCard from '../components/home/UpdateCard.vue'
import MarketOverview from '../components/home/MarketOverview.vue'
import QuickActions from '../components/home/QuickActions.vue'

const news = ref([
  {
    id: 1,
    title: 'Market Analysis: Tech Sector Shows Strong Recovery',
    summary: 'Latest technical analysis indicates a bullish trend in technology stocks, with key resistance levels being tested.',
    timestamp: '2024-12-30T10:30:00Z',
    source: 'Q-Ants Analysis',
    category: 'Technical Analysis'
  },
  {
    id: 2,
    title: 'New Trading Strategy Available',
    summary: 'A new mean reversion strategy has been added to the strategy builder. Test it with historical data now.',
    timestamp: '2024-12-30T09:15:00Z',
    source: 'Strategy Updates',
    category: 'Strategies'
  },
  {
    id: 3,
    title: 'Portfolio Rebalancing Opportunity',
    summary: 'Market conditions suggest an optimal time for portfolio rebalancing. Click to view detailed analysis.',
    timestamp: '2024-12-30T08:45:00Z',
    source: 'Portfolio Guardian',
    category: 'Portfolio'
  }
])

const updates = ref([
  {
    id: 1,
    type: 'alert',
    title: 'Portfolio Alert',
    message: 'Unusual volume detected in AAPL. Consider reviewing your position.',
    timestamp: '2024-12-30T10:45:00Z'
  },
  {
    id: 2,
    type: 'success',
    title: 'Analysis Complete',
    message: 'Technical analysis for your watchlist has been updated.',
    timestamp: '2024-12-30T10:30:00Z'
  },
  {
    id: 3,
    type: 'warning',
    title: 'Market Volatility',
    message: 'Increased market volatility detected. Review risk parameters.',
    timestamp: '2024-12-30T10:15:00Z'
  }
])

const quickActions = ref([
  { id: 1, label: 'New Analysis', icon: 'ChartBar', route: '/analysis/new' },
  { id: 2, label: 'Portfolio Review', icon: 'Briefcase', route: '/portfolio' },
  { id: 3, label: 'Market Scanner', icon: 'Search', route: '/scanner' },
  { id: 4, label: 'Create Strategy', icon: 'LightBulb', route: '/strategies/new' }
])

const handleSearch = (query) => {
  console.log('Searching for:', query)
  // Implement search functionality
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
      <p class="text-gray-600 dark:text-gray-400">Here's your financial overview for today</p>
    </div>

    <div class="mb-8">
      <SearchBar @search="handleSearch" />
    </div>

    <div class="mb-8">
      <QuickActions :actions="quickActions" />
    </div>

    <div class="mb-8">
      <MarketOverview />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Latest Updates</h2>
        <div class="space-y-4">
          <UpdateCard v-for="update in updates" :key="update.id" :update="update" />
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Market News & Analysis</h2>
        <div class="space-y-4">
          <NewsCard v-for="news in news" :key="news.id" :news="news" />
        </div>
      </div>
    </div>
  </div>
</template>