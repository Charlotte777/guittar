// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Router from './router'

Vue.use(Vuex);
Vue.use(Router);
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router: Router,
    template: '<App/>',
    components: { App }
})