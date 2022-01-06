import { createWebHistory, createRouter } from "vue-router";
import Buttons from "@/components/Buttons.vue";
const routes = [
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
