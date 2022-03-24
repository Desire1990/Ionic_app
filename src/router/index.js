import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from "../pages/Home.vue";
import Todos from "../pages/Todos.vue";
import Users from "../pages/Users.vue";
import TodoDetail from "../components/TodoDetail.vue";
import AddOrUpdateUsers from "../components/AddOrUpdateUsers";

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
  {
    path:'/users',
    component:Users
  },
  {
    path: "/add-or-update/:id",
    component: AddOrUpdateUsers
  }, 
  {
    path:'/todos/add',
    component:TodoDetail
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
