import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/categories",
    name: "categories",
    component: () => import("./components/CategoriesList")
  },
  {
    path: "/categories/:id",
    name: "category-details",
    component: () => import("./components/GetCategory")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;