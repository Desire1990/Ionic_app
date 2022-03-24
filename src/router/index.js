import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from "../pages/Home.vue";
import Todos from "../pages/Todos.vue";

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/todos',
    component:Todos
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
