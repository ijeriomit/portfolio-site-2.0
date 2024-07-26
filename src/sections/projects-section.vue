<template>
  <section class="projects-wrapper">
    <h1 class="project-title">
      <span> return { </span>
      <span> Projects </span>
      <span> }; </span>
    </h1>
    <div class="content-section">
      <div
        v-for="(project, index) of shownProjects"
        @click="projectClicked(project)"
        :key="index"
        class="project-block"
      ></div>
      <div>
        <button @click="prevPage" :disabled="prevDisabled">&lt;</button>
        <div>{{ pageButtons }}</div>
        <button @click="nextPage" :disabled="nextDisabled">&gt;</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { store } from "@/data.js";
import { ref, computed } from "vue";

const projects = ref(store.projects);
let currentPage = 1;
let projectsPerPage = 4;
let numOfPages =
  projects.value.length % projectsPerPage == 0
    ? projects.value.length / projectsPerPage
    : Math.floor(projects.value.length / projectsPerPage) + 1;

const nextDisabled = computed(() => {
  return currentPage >= numOfPages;
});
const prevDisabled = computed(() => {
  return currentPage == 1;
});
const shownProjects = computed(() => {
  return projects.value.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );
});
function projectClicked(project) {
  console.log(project);
}
const pageButtons = computed(() => {
  return `${currentPage}... ${numOfPages}`;
});
function nextPage() {
  if (!nextDisabled.value) {
    currentPage++;
  }
}
function prevPage() {
  if (!prevDisabled.value) {
    currentPage--;
  }
}
</script>
<style lang="scss" scoped>
.projects-wrapper {
  max-width: 80vw;
  align-self: center;
}
.content-section {
  display: grid;
  grid-template-columns: 700px 700px;
  grid-template-rows: 700px 700px;
}
.project-block {
  background-color: grey;
  width: 650px;
  height: 600px;
}
</style>
