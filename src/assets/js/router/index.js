import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/pages/Home'], resolve)
const Analysis = resolve => require(['@/pages/Analysis'], resolve)
const Lucky = resolve => require(['@/pages/Lucky'], resolve)
const Setting = resolve => require(['@/pages/Setting'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history', // "hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mdui-tab-active mdui-bottom-nav-active',
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: Home
    },
    {
      path: '/Home',
      name: 'v-Home',
      component: Home
    },
    {
      path: '/Analysis',
      name: 'v-Analysis',
      component: Analysis
    },
    {
      path: '/Lucky',
      name: 'v-Lucky',
      component: Lucky
    },
    {
      path: '/Setting',
      name: 'v-Setting',
      component: Setting
    }
  ]
})
