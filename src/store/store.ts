import { createStore } from 'vuex';
export var store = createStore({
    state: {
        isLogin: false,
        isNavigation: false
    },
    mutations: {
        signIn(state) {
            state.isLogin = true
            // console.log("siginin")
        },
        signOut(state) { state.isLogin = false;
            localStorage.clear(); },
        stopNav(state) {
            // mutate state
            state.isNavigation = false;
        },
        startNav(state) {
            state.isNavigation = true;
        }
    }
})