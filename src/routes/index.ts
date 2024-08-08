import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('../pages/HomePage.vue');
const LoginPage = () => import('../pages/security/LoginPage.vue');
const RegisterPage = () => import('../pages/security/RegisterPage.vue');
const ContactPage = () => import('../pages/ContactPage.vue');
const DurusPage = () => import('../pages/files/DurusPage.vue');
const NotFoundPage = () => import('../pages/NotFoundPage.vue');
const AudiosPage = () => import('../pages/audios/AudiosPage.vue');
const SinglePageAudio = () => import('../pages/audios/TypePage.vue');
const CategoryPage = () => import('../pages/audios/CategoryPage.vue');
const ResultsPage = () => import('../pages/ResultsPage.vue');
const SinglePageFile = () => import('../pages/files/SinglePage.vue');
const mainLayout = () => import('../layouts/MainLayout.vue');

const routes = [
  {
    path: '/',
    component: mainLayout,
    children: [
      { path: '/', component: HomePage },
      { path: '/contact', component: ContactPage },
      { path: '/audios', component: AudiosPage },
      { path: '/audios/:category', component: CategoryPage },
      { path: '/audios/:category/:slug', component: SinglePageAudio },
      { path: '/durus', component: DurusPage },
      { path: '/durus/:slug', component: SinglePageFile },
      { path: '/results', component: ResultsPage },
      { path: '/:pathMatch(.*)*', component: NotFoundPage },
    ],
  },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
