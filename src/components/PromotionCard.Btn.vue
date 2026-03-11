<template>
  <!-- Floating Promo Card on Left Center -->
  <div
    class="fixed top-1/2 right-8 -translate-y-1/2 w-80 md:w-96 p-6 rounded-xl bg-gradient-to-r from-amber-500 to-pink-500 shadow-2xl text-white cursor-pointer z-50 transform transition-transform duration-500 hover:scale-105 animate-float"
    @click="navigateToPromotions"
  >
    <h3 class="text-2xl font-bold mb-2 animate-pulse">
      🌟 Hot Deals!
    </h3>
    <p class="text-sm mb-4">
      Don’t miss our exclusive promotions. Click to explore now!
    </p>
    <button
      class="px-4 py-2 bg-white text-amber-600 font-semibold rounded-full text-sm transition-transform duration-300 hover:scale-110 hover:shadow-lg"
    >
      View Promotions
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "FloatingPromoBannerLeftCenter",
  setup() {
    const router = useRouter();
    const navigateToPromotions = () => {
      router.push("/promotions"); // replace with your promotions page route
    };
    return { navigateToPromotions };
  },
});
</script>

<style>
/* Floating animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>