import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('../features/HomePage.vue');
const LoginPage = () => import('../features/security/pages/LoginPage.vue');
const RegisterPage = () =>
  import('../features/security/pages/RegisterPage.vue');
const DurusPage = () => import('../features/files/pages/DurusPage.vue');
const NotFoundPage = () => import('../features/NotFoundPage.vue');
const AudiosPage = () => import('../features/audios/pages/AudiosPage.vue');
const SinglePageAudio = () =>
  import('../features/audios/pages/SingleCategoryPage.vue');
const CategoryPage = () =>
  import('../features/audios/pages/CategoriesByTypePage.vue');
const ResultsPage = () => import('../features/ResultsPage.vue');
const SinglePageFile = () => import('../features/files/pages/SinglePage.vue');
const mainLayout = () => import('../layouts/MainLayout.vue');

const routes = [
  {
    path: '/',
    component: mainLayout,
    children: [
      { path: '/', component: HomePage },
      { path: '/audios', component: AudiosPage },
      { path: '/audios/:category', component: CategoryPage },
      { path: '/audios/category/:slug', component: SinglePageAudio },
      { path: '/durus', component: DurusPage },
      { path: '/durus/:slug', component: SinglePageFile },
      { path: '/results/:term', component: ResultsPage },
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
