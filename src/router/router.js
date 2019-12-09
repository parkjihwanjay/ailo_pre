import Vue from 'vue';
import Router from 'vue-router';

const Header = () => import('../components/Header.vue');

const Login = () => import('../views/LoginView.vue');

const Register = () => import('../views/RegisterView.vue');

const Home = () => import('../views/HomeView.vue');

const Order = () => import('../views/OrderView.vue');

const PreBasic = () => import('../views/Pre/BasicCustom.vue');

const PreDragDrop = () => import('../views/Pre/DragDrop.vue');

const Memo = () => import('../components/DragDropComponent/Memo.vue');

const Dday = () => import('../components/DragDropComponent/Dday.vue');

const DailyRecord = () => import('../components/DragDropComponent/DailyRecord.vue');

const Schedule = () => import('../components/DragDropComponent/Schedule.vue');
Vue.use(Router);

const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home,
  },
  {
    path : '/login',
    name : 'Login',
    component : Login,
  },
  {
    path : '/signup',
    name : 'Register',
    component : Register
  },
  {
    path : '/order',
    name : 'order',
    component : Order,
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
  {
    path : '/pre/schedule',
    name : 'schedule',
    component : Schedule,
  },
]

export default routes;

