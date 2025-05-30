import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cv",
      name: "CV",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CVView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
      children: [
        {
          path: "",
          name: "projects list",
          component: () => import("../views/projects/ProjectList.vue"),
        },
        // {
        //   path: "monster_fighter",
        //   name: "monster fighter",
        //   component: () => import("../views/projects/MonsterFighter.vue"),
        // },
      ],
    },
  ],
});

export default router;
