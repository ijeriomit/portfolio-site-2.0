<template>
  <section>
    <div class="active-project">
      <h3 class="project-title">
        <span>{{ activeProject.title }} </span>
        &nbsp;@&nbsp;
        <span> {{ activeProject.companyName }}</span>
      </h3>
      <p class="project-desc">{{ activeProject.description }}</p>
      <MediaGallery
        :mediaArray="activeProject.media"
        class="media-gallery"
      ></MediaGallery>
      <div class="tech-stack">
        <div
          class="tech-block"
          v-for="(tech, index) of activeProject.techStack"
          :key="index"
        >
          {{ tech }}
        </div>
      </div>
    </div>
    <div class="project-gallery">
      <div
        class="gallery-item"
        :style="{ backgroundImage: `url(${project.coverImg})` }"
        v-for="(project, index) in props.projects"
        :key="index"
        @click="activeProjectIndex = index"
        @mouseenter="overLayedIndex = index"
        @mouseleave="overLayedIndex = -1"
      >
        <div v-show="overLayedIndex == index" class="overlay">
          <h4 class="gallery-item-title">{{ project.title }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from "vue";
import MediaGallery from "./media-gallery.vue";
const props = defineProps(["projects"]);
const activeProjectIndex = ref(0);

const overLayedIndex = ref(-1);

const activeProject = computed(() => {
  return props.projects[activeProjectIndex.value];
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$section-height: 600px;
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  transition: opacity 1s ease, transform 1s ease;
}
.v-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
section {
  display: grid;
  grid-template-columns: 60vw 20vw;
  column-gap: 20px;
  grid-template-rows: $section-height;
}
.active-project {
  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-rows: 15% 70% 15%;
  row-gap: 20px;
  column-gap: 20px;
  padding: 50px;
  grid-template-columns: 45% 55%;
  border-radius: 25px;
  border: solid black 5px;
  background-color: rgba(7, 164, 104, 0.2);
  color: $secondary-color;
  .project-title {
    grid-row: 1;
    grid-column: 1/3;
    margin: 0;
    font-family: $heading-font;
    background-color: $quaternary-color;
    padding: 10px 20px;
    width: fit-content;
    display: flex;
    align-items: center;
    color: $highlight-color;
    // color: $secondary-color;
    font-size: $sub-heading-text-size;
    span {
      color: $secondary-color;
    }
  }
  .project-desc {
    width: fit-content;
    color: $quaternary-color;
    // color: $secondary-color;
    // display: flex;
    // align-items: center;
    font-size: $text-size;
    grid-row: 2;
    grid-column: 1;
  }
  .media-gallery {
    grid-row: 2/4;
    // align-self: center;
    grid-column: 2;
  }
  .tech-stack {
    grid-row: 3;
    grid-column: 1/3;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 20px;
  }
}
.project-gallery {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  grid-column: 2;
  grid-row: 1;
  overflow-y: scroll;
  gap: 10px;
  .gallery-item {
    flex-shrink: 0;
    width: 90%;
    height: 200px;
    cursor: pointer;

    .overlay {
      z-index: 2;
      background-color: $quaternary-color-transparent;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: $highlight-color;
      font-size: $sub-text-size;
      font-family: $heading-font;
      transition: display 0.5s ease;
    }
  }
  .gallery-item:hover {
    color: $highlight-color;
  }
}
.tech-block {
  background-color: $quaternary-color;
  color: $secondary-color;
  padding: 10px;
  border-radius: 15px;
  font-size: $sub-text-size;
  font-family: $vs-code-font;
  font-weight: bold;
  align-items: center;
}
</style>
