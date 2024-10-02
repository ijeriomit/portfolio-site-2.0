import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";
import ContactPage from "./pages/contact-page.vue";
import ProjectsPage from "./pages/projects-page.vue";
import AboutPage from "./pages/about-page.vue";
import HomePage from "./pages/home-page.vue";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/contact", component: ContactPage },
];
export const resumeRoute =
  "https://docs.google.com/document/d/15fubGzf-Rreqq8O0Tqf6H907TP3SQPpqGes_3DVmTGc/edit?usp=drive_link";

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
