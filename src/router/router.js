import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import('../views/Home.vue');

const PreBasic = () => import('../views/Pre/BasicCustom.vue');

const PreDragDrop = () => import('../views/Pre/DragDrop.vue');

const Memo = () => import('../components/DragDropComponent/Memo.vue');

const Dday = () => import('../components/DragDropComponent/Dday.vue');

const DailyRecord = () => import('../components/DragDropComponent/DailyRecord.vue');
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
  },
  {
    path : '/pre/memo',
    name : 'memo',
    component : Memo,
  },
  {
    path : '/pre/dday',
    name : 'dday',
    component : Dday,
  },
  {
    path : '/pre/dailyrecord',
    name : 'dailyrecord',
    component : DailyRecord,
  },
]

export default routes;

