import Vue from 'vue';
import App from './App';

import router from './router';
import Vuex from 'vuex';
// import store from './vuex';

Vue.use(Vuex);

new Vue({
    el: '#app',
    template: '<App/>',
    router,
    // store,
    components: {
        App
    }
});