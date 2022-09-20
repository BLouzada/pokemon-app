import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon-graph',
    name: 'pokemon-graph',
    component: () => import(/* webpackChunkName: "pokemon-graph" */ '../views/PokemonGraph.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/PokemonSearch.vue')
  },
  {
    path: '/pokemon-card',
    name: 'pokemon-card',
    component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/PokemonCard.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
