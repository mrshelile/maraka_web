<template>
    <footer class="bg-white border-t border-gray-200">
        <!-- Main Footer Content -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
                <!-- Brand Section -->
                <div class="col-span-2 sm:col-span-1">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-sm">M</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900">Maraka</h3>
                    </div>
                    <p class="text-xs sm:text-sm text-gray-600">
                        Modern marketplace for buying and selling.
                    </p>
                </div>

                <!-- Quick Links -->
                <nav>
                    <h4 class="font-semibold text-gray-900 mb-3 text-sm">Product</h4>
                    <ul class="space-y-2">
                        <li><RouterLink :to="{name:'market'}" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Browse</RouterLink></li>
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Categories</a></li>

                    </ul>
                </nav>

                <!-- Support -->
                <nav>
                    <h4 class="font-sem ibold text-gray-900 mb-3 text-sm">Support</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Help Center</a></li>
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Contact</a></li>
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">FAQ</a></li>
                    </ul>
                </nav>

                <!-- Legal -->
                <nav>
                    <h4 class="font-semibold text-gray-900 mb-3 text-sm">Legal</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Privacy</a></li>
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">Terms</a></li>
                        <li><a href="#" class="text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors">About</a></li>
                    </ul>
                </nav>
            </div>

            <!-- Divider -->
            <div class="border-t border-gray-200 my-6 sm:my-8"></div>

            <!-- Bottom Footer -->
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-xs sm:text-sm text-gray-600">
                <p>© 2026 Maraka. All rights reserved.</p>
                <div class="flex gap-4">
                    <a href="#" class="hover:text-cyan-600 transition-colors">Privacy</a>
                    <a href="#" class="hover:text-cyan-600 transition-colors">Terms</a>
                    <a href="#" class="hover:text-cyan-600 transition-colors">Contact</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    name: "Footer",
}
</script>
