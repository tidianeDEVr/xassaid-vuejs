import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/security/LoginPage.vue";
import RegisterPage from "../pages/security/RegisterPage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import DurusPage from "../pages/DurusPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import AudiosPage from "../pages/audios/AudiosPage.vue";
import SerignePage from "../pages/audios/SerignePage.vue";
import ResultsPage from "../pages/ResultsPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage },
  { path: "/audios", component: AudiosPage },
  { path: "/audios/serigne/:slug", component: SerignePage },
  { path: "/durus", component: DurusPage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/results", component: ResultsPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
