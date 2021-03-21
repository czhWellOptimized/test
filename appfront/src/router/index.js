import Vue from 'vue'
import Router from 'vue-router'

import CourseList from '@/components/CourseList'
import Login from '@/components/Login'
import Register from '@/components/Register'

import Choices from '@/components/Choices'
import Text from '@/components/Text'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/courselist',
      name: 'CourseList',
      component: CourseList
    },
    {
      path: '/',
      name: 'Login',
      component:Login
    },
    {
      path: '/register',
      name: 'Register',
      component:Register
    },
    {
      path: '/courselist/operatingsystem/choices',
      name: 'Choices',
      component:Choices
    },
    {
      path: '/courselist/operatingsystem/text',
      name: 'Text',
      component:Text
    },
  ]
})
