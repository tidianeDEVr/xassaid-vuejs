import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/security/LoginPage.vue";
import RegisterPage from "../pages/security/RegisterPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import LibraryPage from "../pages/LibraryPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import PodcastsPage from "../pages/PodcastsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage },
  { path: "/podcasts", component: PodcastsPage },
  { path: "/library", component: LibraryPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
