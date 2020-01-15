import Vue from 'vue'
import Router from 'vue-router'
import ad from '@/components/ad'
import login from '@/components/login/Login'
import main from '@/components/main'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉url中的#
  routes: [

    // 广告页面
    {
      path: '/',
      name: 'ad',
      component: ad
    },

    // 登录页面
    {
      path: '/login',
      name: 'login',
      component: login
    },

    // 主界面
    {
      path: '/main',
      name: 'main',
      component: main
    },

  ]
})


