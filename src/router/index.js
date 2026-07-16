import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import TicketBooking from '../components/Ticketbookingmodal.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketBooking
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router