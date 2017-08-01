import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import login from '../components/login';
import shufa from '../components/shufa'
Vue.use(iView);

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
    	path:'/shufa',
    	name:'shufa',
    	component:shufa
    }
  ]
})
