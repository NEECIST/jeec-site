import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/pages/Team.vue"),
  },
  {
    path: "/schedule",
    name: "schedule",
    component: () => import("@/pages/Schedule.vue"),
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: () => import("@/pages/Sponsors.vue"),
  },
  {
    path: "/partners",
    name: "partners",
    component: () => import("@/pages/Partners.vue"),
  },
  {
    path: "/speakers",
    name: "speakers",
    component: () => import("@/pages/Speakers.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 10,
        behavior: 'smooth',
      }
    } 
    else {
      return { top: 0 }
    }
  },
});

export default router;
