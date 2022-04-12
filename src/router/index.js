import { createRouter, createWebHistory } from 'vue-router'
import Accueil from "@/views/Accueil"
import MentionsLegales from "@/views/MentionsLegales"

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/mentions_legales",
    name: "MentionsLegales",
    component: MentionsLegales
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ "@/views/MentionsLegales.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router