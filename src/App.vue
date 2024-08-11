<script  lang="ts">
import Navigation from './components/Navigation.vue';
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<any>
    }
}

export default {
    name: "App",
    components: {
        Navigation
    }
}
</script>

<template>
    <div>
        <Navigation v-if="$store.state.isNavigation" />
        <!-- <router-link to="/">Go to Home</router-link>
        <router-link to="/auth/login">Go to auth</router-link> -->
        <router-view></router-view>
    </div>
</template>

<style scoped></style>
