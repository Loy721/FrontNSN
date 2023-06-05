import { createRouter, createWebHistory } from 'vue-router'
import MyNewsLine from '../pages/MyNewsLine.vue'
import UserSearch from '../pages/UserSearch.vue'
import UserProfile from '../pages/UserProfile.vue'
import Login from '../pages/Login.vue'
import Registration from '../pages/Registration.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MyNewsLine
    },
    {
        path: '/notFound',
        component: NotFound
    },
    {
        path: '/notFound',
        component: MyNewsLine
    },
    {
        path: '/user/:surname/:name',
        component: UserSearch
    },
    {
        path: '/user/:uid',
        component: UserProfile
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registration',
        component: Registration
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;