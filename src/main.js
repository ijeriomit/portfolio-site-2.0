import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";
import ContactPage from "./pages/contact-page.vue";
// import ProjectsPage from "./pages/projects-page.vue";
import AboutPage from "./pages/about-page.vue";
import HomePage from "./pages/home-page.vue";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  // { path: "/projects", component: AboutPage },
  { path: "/contact", component: ContactPage },
];
export const resumeRoute = "https://yellow-anabal-39.tiiny.site/";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
