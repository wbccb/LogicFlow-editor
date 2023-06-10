import {createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions} from "vue-router";
import Location from "@/views/Location.vue";

const basicRouters: RouteRecordRaw[] = [
  {
    path: "",
    component: Location,
  },
] as RouteRecordRaw[];

const routerOptions: RouterOptions = {
  history: createWebHashHistory(),
  routes: basicRouters,
} as RouterOptions;

const router = createRouter(routerOptions);
export default router;
