<template>
  <div
    class="card-wrapper"
    :style="{
      backgroundImage: `url(${props.project.media})`,
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <div v-show="hovered" class="card-overlay">
      <h3 class="card-title">{{ props.project.projectName }}</h3>
      <p class="project-desc">{{ props.project.text }}</p>
      <div class="skills">
        <div
          v-for="(skill, index) of props.project.skills"
          :key="index"
          class="skill-block"
        >
          <p>{{ skill }}</p>
        </div>
      </div>
      <a
        v-if="props.project.githubUrl"
        :href="props.project.githubUrl"
        target="_blank"
        class="external-link"
      >
        <img src="@/assets/link-images/external-link.png" />
      </a>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["project", "index"]);
const hovered = ref(false);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.card-wrapper {
  cursor: pointer;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: $secondary-color;
  // padding: 5px;
}
.card-overlay {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 65% 15%;
  // row-gap: 10px;
  // padding: 5px;
  height: 100%;
  width: 100%;
  background-color: $quaternary-color-transparent;
}

.card-title {
  grid-row: 1;
  height: fit-content;
  font-size: $sub-heading-text-size - 0.5rem;
  margin: 0;
  font-family: $text-font;
  grid-column: 1 / 3;
  justify-self: center;
  color: #14d086;
  align-self: center;
  font-weight: bold;
}

.project-desc {
  grid-row: 2;
  grid-column: 1 / 3;
  color: white;
  grid-row: 2;
  width: 90%;
  align-self: baseline;
  justify-self: center;
  font-size: $sub-text-size - 0.1rem;
  font-family: $text-font;
  max-height: 100%;
  overflow: hidden;
  margin: 0;
}
.skills {
  grid-row: 3;
  grid-column: 1 / 3;
  padding-left: 10px;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}
.skill-block {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: $secondary-color;
  background-color: $highlight-color;
  font-size: $sub-text-size;
  padding: 5px;
  border-radius: 5px;
  font-family: $heading-font;
  height: fit-content;
  p {
    height: fit-content;
    margin: 0;
  }
}
.external-link {
  filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(77deg) brightness(109%)
    contrast(101%);
  padding-right: 10px;
  cursor: pointer;
  width: 25px;
  grid-row: 3;
  grid-column: 2/3;
  justify-self: end;
  align-self: center;
  padding: 10px;
}
@media screen and (max-width: $laptop-screen-width) {
  .card-title {
    font-size: $sub-heading-text-size-laptop-screen - 0.25rem;
  }
  .project-desc {
    font-size: $sub-text-size-laptop-screen - 0.05rem;
  }
  .skill-block {
    font-size: $sub-text-size-laptop-screen;
  }
}
@media screen and (max-width: $small-screen-width) {
  .card-title {
    font-size: $sub-heading-text-size-small-screen - 0.25rem;
  }
  .project-desc {
    font-size: $sub-text-size-small-screen - 0.05rem;
  }
  .skill-block {
    font-size: $sub-text-size-small-screen;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .card-title {
    font-size: 1.35rem;
    grid-column: 1 / 3;
    grid-row: 1;
    align-self: end;
  }
  .card-overlay {
    grid-template-rows: 15% 65% 20%;
  }
  .project-desc {
    align-self: center;
    text-align: center;
    grid-row: 2;
    grid-column: 1 / 3;
    width: 90%;
  }
  .skills {
    grid-row: 3;
    grid-column: 1;
  }
  .skill-block {
    font-size: 1rem;
    padding: 5px;
  }
  .external-link {
    align-self: center;
    grid-row: 3;
    grid-column: 2;
  }
}
</style>
