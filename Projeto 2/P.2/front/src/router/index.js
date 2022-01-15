import { createWebHashHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import News from "@/components/News.vue";
import Header from "@/components/Header.vue";
import Ranking from "@/components/Ranking.vue";
import News1 from "@/views/News1.vue";
import News2 from "@/views/News2.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";
import User from "@/views/User.vue";
import Admin from "@/views/Admin.vue";
import Add from "@/views/Add.vue";
import Login from "@/views/Login.vue";
import Lists from "@/components/Lists";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Header",
    name: "Header",
    component: Header,
  },
  {
    path: "/Lists",
    name: "Lists",
    component: Lists,
  },
  {
    path: "/Add",
    name: "Add",
    component: Add,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/User",
    name: "User",
    component: User,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/Ranking",
    name: "Ranking",
    component: Ranking,
  },
  {
    path: "/home",
    name: "Home2",
    component: Home,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/News1",
    name: "News1",
    component: News1,
  },
  {
    path: "/News2",
    name: "News2",
    component: News2,
  },
  {
    path: "/about",
    name: "About2",
    component: About,
  },
  {
    path: "/about/:name",
    name: "About",
    component: About,
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
