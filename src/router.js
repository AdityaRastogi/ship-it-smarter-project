import { createRouter, createWebHistory } from 'vue-router';
import CarrierProfile from './components/CarrierProfile.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Carrier Profile',
      component: CarrierProfile
    }
  ]
});

export default router;