import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import router from '.';

import checkAuth from './auth.js';

const Header = () => import('../components/Header.vue');

const Login = () => import('../views/LoginView.vue');

const CustomerHome = () => import('../views/CustomerView.vue');

const CustomerBoard = () => import('../components/Customer/CustomerBoard.vue');

const CustomerUsage = () => import('../components/Customer/CustomerUsage.vue');

const CustomerFAQ = () => import('../components/Customer/CustomerFAQ.vue');

const CustomerFeedback = () => import('../components/Customer/CustomerFeedback.vue');

const CustomerInquiry = () => import('../components/Customer/CustomerInquiry');

const Register = () => import('../views/RegisterView.vue');

const Home = () => import('../views/HomeView.vue');

const Order = () => import('../views/OrderView.vue');

const MyPage = () => import('../views/MyPageView.vue');

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
    path : '/mypage',
    name : 'mypage',
    component : MyPage,
    beforeEnter : async(to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        alert('로그인을 먼저 해주세요.');
        router.push({
          name : 'Login',
        })
      }
      next();
    },
  },
  {
    path : '/customer',
    name : 'customer',
    component : CustomerHome,
  },
  {
    path : '/customer/board',
    name : 'CustomerBoard',
    component : CustomerBoard,
  },
  {
    path : '/customer/usage',
    name : 'CustomerUsage',
    component : CustomerUsage,
  },
  {
    path : '/customer/faq',
    name : 'CustomerFAQ',
    component : CustomerFAQ,
  },
  {
    path : '/customer/feedback',
    name : 'CustomerFeedback',
    component : CustomerFeedback,
  },
  {
    path : '/customer/inquiry',
    name : 'CustomerInquiry',
    component : CustomerInquiry,
  },
  {
    path: '/pre/basic',
    name : 'PreBasic',
    component : PreBasic,
  },
  {
    path : '/pre/dragdrop/:id',
    name : 'PreDragDrop',
    component : PreDragDrop,
    beforeEnter : async (to, from, next) => {
      if (!localStorage.getItem('access_token')) {
        return alert('로그인을 먼저 해주세요.');
      }
      const id = to.params.id;
      try {
        const result = await axios.get(`/pre/diary/${id}`);
        if (!result) {
          alert('서버 에러입니다. 죄송합니다 ㅜㅜ');
        }
        to.params.data = result.data;
        next();
      } catch (e) {
        alert(e);
      }
      console.log(id);
    },
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
  {
    path : '*',
    beforeEnter : (to, from, next) => {
      alert('요청하신 주소는 없는 주소입니다 ㅜㅜ');
      next('/')
    }
  }
]

export default routes;

