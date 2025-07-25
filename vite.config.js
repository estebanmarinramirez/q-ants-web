import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [PrimeVueResolver()],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          primevue: ['primevue'],
          vendor: ['vue', 'vue-router', 'pinia'],
        },
      },
    },
  },
})
