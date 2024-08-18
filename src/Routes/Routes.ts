import AuthVue from "../pages/auth/Auth.vue";
import LoginVue from "../pages/auth/Login.vue";
import ActivateAccount from "../pages/auth/ActivateAccount.vue"
import AccountRegistered from "../pages/auth/AccountRegistered.vue"
import PackagesVue from "../pages/auth/Packages.vue";
import RegistrationVue from "../pages/auth/Registration.vue";
import ForgotPassword from "../pages/auth/ForgotPassword.vue";
import ResetPassword from "../pages/auth/ResetPassword.vue";
import Home from '../pages/Home/Home.vue';
import About from '../pages/about/About.vue'
import Product from '../pages/market/Product.vue'
import Market from '../pages/market/Market.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MyAdsVue from "../pages/MyAds/MyAds.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            name: "index"
        },
        {
            path: "/about",
            component: About,
            name: "about"
        }
        , 
        {
            path: "/ads-page",
            component: Market,
            name: "market",

        }, 

        {
            path: "/ads-page/:id",
            component: Product,
            name: "product"
        },
        {
            path:"/my-Ads",
            component:MyAdsVue,
            name:"Myads"
        }
        ,
        {
            path: "/auth",
            component: AuthVue,
            name: "Auth",
            children: [
                {
                    path: "login",
                    component: LoginVue,
                    name: "login"
                },
                {
                    path: "forgot-password",
                    component: ForgotPassword,
                    name: "forgotPassword"
                },
                {
                    path: "reset-password/:email/:otp",
                    component: ResetPassword,
                    name: "resetPassword"
                },
                {
                    path: "register",
                    component: RegistrationVue,
                    name: "register"
                },
                {
                    path:'activate-account/:email/:otp',
                    name:"activateAccount",
                    component:ActivateAccount,
                },
                {
                    path:'account-registered',
                    name:"accountRegistered",
                    component:AccountRegistered
                }
            ]
        }
    ]
})