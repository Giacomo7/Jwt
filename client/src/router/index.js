/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import store from "../store";
import Home from '../views/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/LoginPage.vue'),
        meta: { mustBeGuest: true },
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/DashboardPage.vue'),
        meta: { mustBeAuth: true },
    },
    {
        path: '/logout',
        name: 'LogoutPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/LogoutPage.vue')
    },
    {
        path: '/signup',
        name: 'RegistrationPage',
        component: () => import(/* webpackChunkName: "loginPage" */ '../views/RegistrationPage.vue'),
        meta: { mustBeGuest: true }
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to, from, next) => {
    //meta mustBeAuth
    if (to.matched.some((m) => m.meta.mustBeAuth) && !store.state.isLoggedIn) {
        return next({ name: 'LoginPage' });
    }
    //meta mustBeGuest
    if (to.matched.some((m) => m.meta.mustBeGuest) && store.state.isLoggedIn) {
        return next({ name: 'DashboardPage' });
    }
    next();
});
export default router;
//# sourceMappingURL=index.js.map