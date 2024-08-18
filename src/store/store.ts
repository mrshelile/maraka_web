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
        signOut(state) { 
            state.isLogin = false;
            let toRemove=[
                "email","full_name","id","phone","token"
            ]
            toRemove.forEach((val) => localStorage.removeItem(val));
        },
        stopNav(state) {
            // mutate state
            state.isNavigation = false;
        },
        startNav(state) {
            state.isNavigation = true;
        }
    }
})