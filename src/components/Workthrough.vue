<template>
  <section class="bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
          Start Selling on Maraka
        </h2>
        <p class="text-slate-400">
          Follow these simple steps to get your products in front of buyers
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">

        <!-- Horizontal Line -->
        <div class="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">

          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex flex-col items-center text-center"
          >

            <!-- Icon -->
            <div class="mb-4 md:mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg transition-transform duration-300 hover:scale-110">
              <component :is="step.icon" class="w-8 h-8 text-white" />
            </div>

            <!-- Content -->
            <div>
              <h3 class="text-lg font-bold text-white mb-2">
                {{ step.title }}
              </h3>
              <p class="text-sm text-slate-400">
                {{ step.description }}
              </p>
            </div>

          </div>

        </div>
      </div>

      

    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import {
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
  Square3Stack3DIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon
} from "@heroicons/vue/24/solid"

export default defineComponent({
  name: "Workthrough",

  data() {
    return {
      steps: [
        {
          title: "Create Account",
          description: "Register on the Maraka website or mobile app.",
          icon: UserPlusIcon
        },
        {
          title: "Login",
          description: "Access your account and open your dashboard.",
          icon: ArrowRightOnRectangleIcon
        },
        {
          title: "Go to My Ads",
          description: "Navigate to the My Ads page where you manage listings.",
          icon: Square3Stack3DIcon
        },
        {
          title: "Create New Ad",
          description: "Upload images, add product details, price and location.",
          icon: ArrowUpTrayIcon
        },
        {
          title: "Publish & Sell",
          description: "Your ad becomes visible and buyers can contact you.",
          icon: CheckCircleIcon
        }
      ]
    }
  },

  components: {
    UserPlusIcon,
    ArrowRightOnRectangleIcon,
    Square3Stack3DIcon,
    ArrowUpTrayIcon,
    CheckCircleIcon
  }
})
</script>