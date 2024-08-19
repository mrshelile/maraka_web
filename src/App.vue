<script  lang="ts">
import Navigation from './components/Navigation.vue';
import { Store } from 'vuex'
import { mapGetters } from 'vuex';
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $store: Store<any>
    }
}

export default {
    name: "App",
    components: {
        Navigation
    },
    methods:{
        
    },
    computed: {
    ...mapGetters(['isLogin']),
    },
    watch: {
    isLogin(newVal) {
      if (!newVal) {
        this.$router.push({name:'index'}); // Redirect to the login page
        // console.log("Logout")
      }
    },
  },
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
