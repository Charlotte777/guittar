import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
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
        name: 'browse',
        component: Browse
    }]
})