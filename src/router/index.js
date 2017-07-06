import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import News from '@/components/News'
import dynamic from '@/components/dynamic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
