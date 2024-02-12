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
  {
    path: "/webapp",
    name: "webapp",
    component: () => import("@/pages/Webapp.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      if (to.hash) {
        resolve({ el: to.hash, top: 0, behavior: "smooth" });
      } else if (savedPosition) {
        resolve({ top: savedPosition.top });
      } else {
        resolve({ left: 0, top: 0 });
      }
    });
  },
});

export default router;
