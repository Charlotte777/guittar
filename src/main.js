// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Router from './router'
import Dialog from 'hsy-vue-dialog'
import Bus from '@/assets/eventBus'

Vue.use(Vuex);
Vue.use(Router);
Vue.use(Dialog);
Vue.config.productionTip = false;

const store = new Vuex.Store({
    state: {
        userInfo: "0",
        songId: "",
    },
    mutations: {
        getId(state, id) {
            state.songId = id;
            Bus.$emit('change-song');
            
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