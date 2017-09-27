import Vue from 'vue';
import Router from 'vue-router';
import HeaderComponent from '@/components/header';


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HeaderComponent },
    { path: '/ola/:name', component: HeaderComponent },
  ],
});
