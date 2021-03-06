import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Index from '@/components/index'
import Browse from '@/components/browse'
import playList from '@/components/playlist'
import songList from '@/components/songlist'
import find from '@/components/find'
import singerList from '@/components/singerlist'
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
                    name:"overview",
                    component: Browse.overview
                }, {
                    path: 'charts',
                    name:"charts",
                    component: Browse.charts
                }, {
                    path: 'singer',
                    name:"singer",
                    component: Browse.singer
                }, {
                    path: 'new-releases',
                    name:"new-releases",
                    component: Browse.newReleases
                }]
            }, {
                path: "/songlist/:lid",
                name: 'songlist',
                component: songList
            }, {
                path: "/singerlist/:sid",
                name: 'singerlist',
                component: singerList
            }, {
                path: "/playlist",
                name: "playlist",
                component: playList.index,
            },  {
                path: "/find",
                name: "find",
                component: find,
            },

        ]
    }, ]
})