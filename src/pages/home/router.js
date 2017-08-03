import Vue from 'vue';
import VueRouter from 'vue-router';

// import About from 'pages/home/components/about';
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

let routes = [
    {
        path: '/about',
        component(resolve) {
            require(['pages/home/components/about'], resolve)
        }
    },
    {
        path: '/cases',
        component(resolve) {
            require(['pages/home/components/cases'], resolve)
        }
    }
];



export default new VueRouter({
    routes
});