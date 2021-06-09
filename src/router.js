import Vue from "vue";
import Router from "vue-router";
// import Login from './views/login/index.vue'
//  下面情况，默认的会导入 ./views/login 目录下的index.vue组件
import Login from './views/ login'
//布局组建
import Layout from '@/components/Loyout.vue'
import Home from './views/home'
import Member from './views/member'
import Supplier from './views/supplier'
import Goods from './views/goods'
import Staff from './views/staff'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login', //路由名称
      component: Login //组件对象
    },
    {
      path: '/pms',
      component: Layout,//这是在哪个组件显示？
      redirect: '/pms/product',
      name: 'pms',
      meta: {title: '商品', icon: 'product'},
      children: [{
        path: 'product',
        name: 'product',
        component: () => import('@/views/pms/product.vue'),
        meta: {title: '商品列表', icon: 'product-list'}
      },
      {
        path: 'addProduct',
        name: 'addProduct',
        component: () => import('@/views/pms/addProduct.vue'),
        meta: {title: '添加商品', icon: 'product-add'}
      },
    ]
    },
    {
      path: '/',
      name: 'layout', //路由名称
      component: Layout, //组件对象
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
          meta: {title: '首页'}
        },
        // {
        //   path: '/member',
        //   component: Member
        // }
      ]
    },
    {
      path: '/member',
      component: Layout,
      children: [
        {
          path: '/', // /member/
          component: Member,
          meta: {title: '会员管理'}
        }
      ]
    },
    {
      path: '/supplier',
      component: Layout,
      children: [
        {
          path: '/', 
          component: Supplier,
          meta: {title: '供应商管理'}
        }
      ]
    },
    {
      path: '/goods',
      component: Layout,
      children: [
        {
          path: '/', 
          component: Goods,
          meta: {title: '商品管理'}
        }
      ]
    },
    {
      path: '/staff',
      component: Layout,
      children: [
        {
          path: '/', 
          component: Staff,
          meta: {title: '员工管理'}
        }
      ]
    },
    
  ]
})
