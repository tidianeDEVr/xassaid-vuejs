import { createRouter, createWebHistory } from "vue-router";
const HomePage = () => import("../pages/HomePage.vue");
const LoginPage = () => import("../pages/security/LoginPage.vue");
const RegisterPage = () => import("../pages/security/RegisterPage.vue");
const ContactPage = () => import("../pages/ContactPage.vue");
const DurusPage = () => import("../pages/files/DurusPage.vue");
const NotFoundPage = () => import("../pages/NotFoundPage.vue");
const AudiosPage = () => import("../pages/audios/AudiosPage.vue");
const SerignePage = () => import("../pages/audios/SerignePage.vue");
const ResultsPage = () => import("../pages/ResultsPage.vue");
const SinglePage = () => import("../pages/files/SinglePage.vue");
const BlogPage = () => import("../pages/blog/BlogPage.vue");
const SingleBlogPage = () => import("../pages/blog/SinglePage.vue");

const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/blog/:slug", component: SingleBlogPage },
  { path: "/contact", component: ContactPage },
  { path: "/audios", component: AudiosPage },
  { path: "/audios/serigne/:slug", component: SerignePage },
  { path: "/durus", component: DurusPage },
  { path: "/durus/:slug", component: SinglePage },
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
