<script  lang="ts">
import PricingCard from './components/PricingCard.vue';
import {PricingPackages} from '../auth/constants/PricingPackages'
export default {
  name: "Packages",
  components: {
    PricingCard
  },
  data() {
    return {
         packages: PricingPackages
    }
  }
}

</script>
<template>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in packages" >
        <PricingCard v-bind:package="item"/>
      </div>
     
    </div>
</template>
<style scoped>

</style>