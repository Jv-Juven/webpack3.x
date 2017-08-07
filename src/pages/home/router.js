import Vue from 'vue';
import VueRouter from 'vue-router';

// import About from 'pages/home/components/about';
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);

let asyncComponent = function (path = '', name = '', dependencies = []) {
    return function (resolve) {
        require.ensure(dependencies, () => {
            resolve(require(path));
        }, name);
    }
}

// let fn = function () {
//     return import(/* webpackChunkName: "my-chunk-name" */
//         /* webpackMode: "lazy" */
//         'pages/home/components/cases');
// }

let routes = [
    {
        path: '/about',
        component: function (resolve) {
            require.ensure([], () => {
                resolve(require('pages/home/components/about'));
            }, 'about');
            // require(['pages/home/components/about'], resolve)
        }
    },
    {
        path: '/cases',
        // component(resolve) {
        //     require(['pages/home/components/cases'], resolve, 'cases');
        // }
        component: function () {
            import(
                /* webpackChunkName: "my-chunk-name" */
                /* webpackMode: "lazy" */
                'pages/home/components/cases');
        }
        // component: asyncComponent.call(this, 'pages/home/components/cases', 'cases', [])(resolve)
    }
];



export default new VueRouter({
    routes
});