<script lang="ts">
import logo from '../../src/assets/logo.png'

export default {
  name: "Navigation",
  data() {
    return {
      full_name: '',
      email: '',
      phone: '',
      token: '',
      logo: logo,
      isMenuOpen: false,
      searchQuery: '',
      notifications: 0
    }
  },
  computed: {
    userInitials() {
      return this.full_name
        .split(' ')
        .map(n => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    },
    isLoggedIn() {
      return this.$store.state.isLogin
    }
  },
  created() {
    if (localStorage.getItem('token') != null) {
      this.$store.commit('signIn')
      this.token = localStorage.getItem('token') ?? ''
      this.full_name = localStorage.getItem('full_name') ?? ''
      this.phone = localStorage.getItem('phone') ?? ''
      this.email = localStorage.getItem('email') ?? ''
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleSearch() {
      // Add search logic
      console.log('Search:', this.searchQuery)
    }
  }
}
</script>

<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        
        <!-- Logo Section -->
        <router-link :to="{ name: 'index' }" class="flex items-center space-x-2 flex-shrink-0 hover:opacity-80 transition">
          <img :src="logo" class="h-8 w-8" alt="Maraka" />
          <span class="text-xl font-bold text-gray-900">Maraka</span>
        </router-link>

        <!-- Search Bar - Hidden on mobile -->
        <div class="hidden md:flex flex-1 mx-8 max-w-md">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Search products, cars, services..."
              class="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition"
            />
            <button
              @click="handleSearch"
              class="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            :to="{ name: 'index' }"
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition"
          >
            Browse
          </router-link>
          
          <router-link
            :to="{ name: 'about' }"
            class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition"
          >
            About
          </router-link>

          <router-link
            :to="{ name: 'Myads' }"
            class="px-4 py-2 mx-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-lg transition"
          >
            Upload Your Product
          </router-link>

          <!-- Messages Icon -->
          <button class="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </button>

          <!-- Notifications Icon -->
          <button class="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition relative">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
            <span v-if="notifications" class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <!-- User Menu / Auth Buttons -->
          <div v-if="isLoggedIn" class="relative group">
            <button class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition">
              <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                {{ userInitials }}
              </div>
            </button>
            
            <!-- Dropdown -->
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 border border-gray-100">
              <div class="px-4 py-3 border-b border-gray-100">
                <p class="text-sm font-semibold text-gray-900">{{ full_name }}</p>
                <p class="text-xs text-gray-500">{{ email }}</p>
              </div>
              <router-link
                :to="{ name: 'index' }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Profile
              </router-link>
              <router-link
                :to="{ name: 'index' }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                My Listings
              </router-link>
              
              <router-link
                :to="{ name: 'index' }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Settings
              </router-link>
              <button
                @click="$store.commit('signOut')"
                class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-100"
              >
                Sign Out
              </button>
            </div>
          </div>

          <div v-else class="flex items-center space-x-2">
            <router-link
              :to="{ name: 'login' }"
              class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition"
            >
              Login
            </router-link>
            <router-link
              :to="{ name: 'register' }"
              class="px-4 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition"
            >
              Register
            </router-link>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition"
        >
          <svg class="w-6 h-6" :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg class="w-6 h-6" :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Search -->
      <div class="md:hidden pb-4">
        <div class="relative">
          <input
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button @click="handleSearch" class="absolute right-3 top-2.5 text-gray-500">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden pb-4 border-t border-gray-200 space-y-1">
        <router-link
          :to="{ name: 'index' }"
          @click="closeMenu"
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition"
        >
          Browse
        </router-link>
        <router-link
          :to="{ name: 'about' }"
          @click="closeMenu"
          class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition"
        >
          Categories
        </router-link>
        <button class="w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition font-medium">
          Sell Item
        </button>
        
        <div v-if="isLoggedIn" class="border-t border-gray-200 pt-4 mt-4 space-y-2">
          <p class="px-3 text-sm font-semibold text-gray-900">{{ full_name }}</p>
          <router-link
            :to="{ name: 'index' }"
            @click="closeMenu"
            class="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm transition"
          >
            Profile
          </router-link>
          <router-link
            :to="{ name: 'index' }"
            @click="closeMenu"
            class="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm transition"
          >
            My Listings
          </router-link>
          <button
            @click="$store.commit('signOut'); closeMenu()"
            class="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 text-sm transition"
          >
            Sign Out
          </button>
        </div>

        <div v-else class="border-t border-gray-200 pt-4 mt-4 space-y-2">
          <router-link
            :to="{ name: 'login' }"
            @click="closeMenu"
            class="block px-3 py-2 text-gray-700 hover:bg-gray-50 text-sm transition"
          >
            Login
          </router-link>
          <button class="w-full text-left px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition font-medium text-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
