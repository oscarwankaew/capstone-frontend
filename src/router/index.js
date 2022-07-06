import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import EventsShow from "../views/EventsShow.vue";
import FightersIndex from "../views/FightersIndex.vue";
import FightersShow from "../views/FightersShow.vue";
import UsersShow from "../views/UsersShow.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/events/:id",
    name: "events-show",
    component: EventsShow,
  },
  {
    path: "/fighters",
    name: "fighters-index",
    component: FightersIndex,
  },
  {
    path: "/fighters/:id",
    name: "fighters-show",
    component: FightersShow,
  },
  {
    path: "/users/:id",
    name: "users-show",
    component: UsersShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
