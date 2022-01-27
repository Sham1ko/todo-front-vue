import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import About from '@/pages/About'
import Todos from '@/pages/Todos/Todos'
import Todo from '@/pages/Todos/Todo'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/todos',
    component: Todos
  },
  {
    path: '/todos/:id',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
