import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/timeentries',
      name: 'Time entries',
      component: TimeEntries
    }
  ]
})
