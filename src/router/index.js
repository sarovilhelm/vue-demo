import Vue from "vue"
import VueRouter from "vue-router"
import AuthMiddleware from "@nerd305/firebase-vuetify-auth/src/components/authguard"


Vue.use(VueRouter)

const routes = [
    {
        name: "Login",
        path: "/login",
        component: () => import(/* webpackChunkName: "login" */ "@/components/LoginComponent.vue"),
    },
    {
        name: "Sign Up",
        path: "/signup",
        component: () => import(/* webpackChunkName: "login" */ "@/components/SignUpComponent.vue"),
    },
    {
        path: "/todos",
        meta: { requiresAuth: true }, // this route requires authentication guard
        name: "todo",
        component: () => import(/* webpackChunkName: "protected" */ "@/components/UserTodos.vue"), // example protected route
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach(AuthMiddleware)

export default router
