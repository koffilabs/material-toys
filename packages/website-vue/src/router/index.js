import { createWebHistory, createRouter } from "vue-router";
import Buttons from "@/components/Buttons.vue";
import Layout from "@/components/Layout.vue";
const routes = [
  {
    path: "/buttons",
    name: "Buttons",
    component: Buttons,
  },
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
