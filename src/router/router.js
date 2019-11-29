import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home.vue');

const PreBasic = () => import('../views/Pre/BasicCustom.vue');

const PreDragDrop = () => import('../views/Pre/DragDrop.vue');

Vue.use(Router);

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home,
  },
  {
    path: '/pre/basic',
    name : 'PreBasic',
    component : PreBasic,
  },
  {
    path : '/pre/dragdrop',
    name : 'PreDragDrop',
    component : PreDragDrop,
  }
]

export default routes;

