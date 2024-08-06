<template>
  <section class="projects-wrapper">
    <h1 class="project-title">
      <span> return { </span>
      <span> Projects </span>
      <span> }; </span>
    </h1>
    <div class="content-section">
      <div
        v-for="(project, index) of projects"
        :key="index"
        class="project-block"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { store } from "@/data.js";
import { ref } from "vue";

const projects = ref(store.projects);
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
