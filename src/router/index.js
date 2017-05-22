import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '@/components/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: Quiz
    }
  ]
})
