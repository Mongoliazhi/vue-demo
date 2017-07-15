import Vue from 'vue'
import Router from 'vue-router'
import App1 from '../app1.vue'
import Hello from '@/components/Hello'
import News from '@/components/News'
import dynamic from '@/components/dynamic'
import imgCon from '@/components/imgCon'

import product from '@/components/product/product'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App1',
      component: App1,
      children: [
        {
          path: '/',
          name: 'Hello',
          component: Hello
        },
        {
          path: '/Hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: '/news',
          name: 'News',
          component: News
        },
        {
          path: '/dynamic',
          name: 'dynamic',
          component: dynamic
        },
        {
          path: '/product',
          name: 'product',
          component: product
        }
      ]
    },
    {
      path: '/imgCon',
      name: 'imgCon',
      component: imgCon
    }
  ]
})
