import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Browse from '@/components/browse'
import songList from '@/components/general/song-list'
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
                component: Browse.overview,
                children: [{
                    path: ':list',
                    component: songList
                }, ]
            }, {
                path: 'charts',
                component: Browse.charts
            }, {
                path: 'singer',
                component: Browse.singer
            }, {
                path: 'new-releases',
                component: Browse.newReleases
            }]
        }]
    }]
})