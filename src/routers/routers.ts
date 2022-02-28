import { RouteRecordRaw } from "vue-router";

export const baseRouters: RouteRecordRaw[] = [
  {
    path: '/login',
    name: "Login",
    component: () => import("../views/login.vue")
  }
]