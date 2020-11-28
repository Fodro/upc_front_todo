import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/views/LoginPage";
import Todos from "@/views/Todos";
import AddTodo from "@/views/AddTodo";

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
        },
        {
            path: '/todos/add',
            component: AddTodo
        }
    ]
})
