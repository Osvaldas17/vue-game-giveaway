import { createRouter, createWebHashHistory } from 'vue-router'
import Games from '../views/Games.vue'
import SortGames from "../views/SortGames";
import SelectedGiveaway from "../views/SelectedGiveaway";

const routes = [
  {
    path: '/',
    name: 'Games',
    component: Games
  },
  {
    path: '/sort-giveaways',
    name: 'SortGames',
    component: SortGames
  },
  {
    path: '/selected-game/:id',
    name: 'SelectedGiveaway',
    component: SelectedGiveaway
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
