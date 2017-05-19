import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Browse from '@/components/browse'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/signin',
        name: 'signin',
        component: Login
    }, {
        path: '/',
        redirect: '/browse/overview',
        name: 'index',
        component: Index,
        children: [{
            path: 'browse',
            name: 'browse',
            component: Browse.index,
            children: [{
                path: 'overview',
                component: Browse.overview
            }, {
                path: 'charts',
                component: Browse.charts
            }, {
                path: 'new-releases',
                component: Browse.newReleases
            }]
        }]
    }]
})