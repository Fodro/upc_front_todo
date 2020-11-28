import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage";
import Todos from "@/views/Todos";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LoginPage
        },
        {
            path: '/todos',
            component: Todos
        }
    ]
})
