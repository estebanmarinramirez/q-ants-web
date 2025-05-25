<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Menu from 'primevue/menu'
import InputText from 'primevue/inputtext'
import OverlayPanel from 'primevue/overlaypanel'
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  User, 
  Settings, 
  LogOut,
  HelpCircle,
  Globe
} from 'lucide-vue-next'

const router = useRouter()

// Refs
const userMenuRef = ref()
const notificationPanelRef = ref()
const searchQuery = ref('')
const isDarkMode = ref(false)
const notificationCount = ref(3)

// User data (mock)
const currentUser = ref({
  name: 'Esteban Marin',
  email: 'esteban@qants.com',
  avatar: 'https://ui-avatars.com/api/?name=Esteban+Marin&background=3B82F6&color=fff',
  role: 'Senior Analyst'
})

// User menu items
const userMenuItems = ref([
  {
    label: 'Profile',
    icon: User,
    command: () => {
      router.push('/profile')
    }
  },
  {
    label: 'Settings',
    icon: Settings,
    command: () => {
      router.push('/config')
    }
  },
  {
    separator: true
  },
  {
    label: 'Help Center',
    icon: HelpCircle,
    command: () => {
      window.open('https://docs.qants.com', '_blank')
    }
  },
  {
    separator: true
  },
  {
    label: 'Sign Out',
    icon: LogOut,
    command: () => {
      handleSignOut()
    }
  }
])

// Mock notifications
const notifications = ref([
  {
    id: 1,
    title: 'Portfolio Rebalancing Complete',
    message: 'Your monthly portfolio rebalancing has been completed successfully.',
    time: '5 min ago',
    unread: true
  },
  {
    id: 2,
    title: 'Market Alert',
    message: 'AAPL has reached your target price of $175.',
    time: '1 hour ago',
    unread: true
  },
  {
    id: 3,
    title: 'Q-ANTS Analysis Ready',
    message: 'Your requested analysis for Q3 performance is ready for review.',
    time: '3 hours ago',
    unread: false
  }
])

// Computed
const unreadNotifications = computed(() => 
  notifications.value.filter(n => n.unread).length
)

// Methods
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  // Add dark mode toggle logic here
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  console.log('Dark mode:', isDarkMode.value ? 'enabled' : 'disabled')
}

const toggleUserMenu = (event) => {
  userMenuRef.value.toggle(event)
}

const toggleNotifications = (event) => {
  notificationPanelRef.value.toggle(event)
}

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push(`/search?q=${encodeURIComponent(searchQuery.value)}`)
  }
}

const handleSignOut = () => {
  console.log('Signing out...')
  // Add sign out logic here
  router.push('/login')
}

const markNotificationAsRead = (notification) => {
  notification.unread = false
  notificationCount.value = unreadNotifications.value
}

const markAllNotificationsAsRead = () => {
  notifications.value.forEach(n => n.unread = false)
  notificationCount.value = 0
}
</script>

<template>
  <Toolbar class="bg-surface-0 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-700 px-6 h-16">
    <template #start>
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <div class="relative">
          <div class="flex items-center">
            <Search class="absolute left-3 w-4 h-4 text-surface-400 dark:text-surface-500" />
            <InputText
              v-model="searchQuery"
              placeholder="Search Q-ANTS..."
              class="pl-10 pr-4 py-2 w-80"
              @keyup.enter="handleSearch"
            />
          </div>
        </div>
      </div>
    </template>

    <template #end>
      <div class="flex items-center space-x-3">
        <!-- Dark Mode Toggle -->
        <Button
          @click="toggleDarkMode"
          text
          rounded
          size="small"
          class="p-2"
          :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDarkMode" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </Button>

        <!-- Notifications -->
        <div class="relative">
          <Button
            @click="toggleNotifications"
            text
            rounded
            size="small"
            class="p-2 relative"
            aria-label="Notifications"
          >
            <Bell class="w-5 h-5" />
            <Badge 
              v-if="unreadNotifications > 0"
              :value="unreadNotifications" 
              severity="danger" 
              class="absolute -top-1 -right-1"
            />
          </Button>

          <OverlayPanel ref="notificationPanelRef" appendTo="body" class="w-80">
            <div class="p-4">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">
                  Notifications
                </h3>
                <Button
                  v-if="unreadNotifications > 0"
                  @click="markAllNotificationsAsRead"
                  text
                  size="small"
                  class="text-primary-600 dark:text-primary-400"
                >
                  Mark all as read
                </Button>
              </div>

              <div class="space-y-3 max-h-80 overflow-y-auto">
                <div
                  v-for="notification in notifications"
                  :key="notification.id"
                  class="p-3 rounded-lg border border-surface-200 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-800 cursor-pointer transition-colors"
                  :class="{ 'bg-primary-50 dark:bg-primary-900/20': notification.unread }"
                  @click="markNotificationAsRead(notification)"
                >
                  <div class="flex items-start space-x-3">
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-surface-900 dark:text-surface-100">
                        {{ notification.title }}
                      </h4>
                      <p class="text-xs text-surface-600 dark:text-surface-400 mt-1">
                        {{ notification.message }}
                      </p>
                      <span class="text-xs text-surface-500 dark:text-surface-500 mt-1 block">
                        {{ notification.time }}
                      </span>
                    </div>
                    <div 
                      v-if="notification.unread"
                      class="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1"
                    />
                  </div>
                </div>

                <div v-if="notifications.length === 0" class="text-center py-8">
                  <Bell class="w-8 h-8 text-surface-400 dark:text-surface-500 mx-auto mb-2" />
                  <p class="text-surface-600 dark:text-surface-400">No notifications</p>
                </div>
              </div>
            </div>
          </OverlayPanel>
        </div>

        <!-- User Menu -->
        <div class="relative">
          <Button
            @click="toggleUserMenu"
            text
            rounded
            class="p-1"
            aria-label="User menu"
          >
            <Avatar 
              :image="currentUser.avatar"
              size="normal"
              shape="circle"
              class="border-2 border-surface-200 dark:border-surface-700"
            />
          </Button>

          <Menu 
            ref="userMenuRef" 
            :model="userMenuItems" 
            :popup="true"
            class="w-48"
          >
            <template #start>
              <div class="p-3 border-b border-surface-200 dark:border-surface-700">
                <div class="flex items-center space-x-3">
                  <Avatar 
                    :image="currentUser.avatar"
                    size="normal"
                    shape="circle"
                  />
                  <div class="flex-1">
                    <p class="text-sm font-medium text-surface-900 dark:text-surface-100">
                      {{ currentUser.name }}
                    </p>
                    <p class="text-xs text-surface-600 dark:text-surface-400">
                      {{ currentUser.email }}
                    </p>
                    <p class="text-xs text-surface-500 dark:text-surface-500">
                      {{ currentUser.role }}
                    </p>
                  </div>
                </div>
              </div>
            </template>

            <template #item="{ item, props }">
              <a v-ripple :class="props.class" @click="item.command">
                <component :is="item.icon" class="w-4 h-4 mr-2" />
                <span>{{ item.label }}</span>
              </a>
            </template>
          </Menu>
        </div>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
/* Custom toolbar styling */
:deep(.p-toolbar) {
  padding: 0.75rem 1.5rem;
  min-height: 4rem;
}

/* Search input styling */
:deep(.p-inputtext) {
  border-radius: 0.5rem;
  background: var(--p-surface-50);
  border-color: var(--p-surface-300);
}

:deep(.p-inputtext:focus) {
  background: var(--p-surface-0);
  border-color: var(--p-primary-color);
  box-shadow: 0 0 0 1px var(--p-primary-color);
}

/* Menu styling */
:deep(.p-menu .p-menuitem-link) {
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
}

:deep(.p-menu .p-menuitem-link:hover) {
  background: var(--p-primary-50);
  color: var(--p-primary-600);
}

/* Badge positioning */
:deep(.p-badge) {
  min-width: 1.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
}
</style> 