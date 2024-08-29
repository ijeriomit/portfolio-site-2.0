<template>
  <div
    :class="index % 2 == 0 ? 'left-card' : 'right-card'"
    class="card-wrapper"
  >
    <h3 class="card-title">{{ props.project.projectName }}</h3>
    <MediaGallery
      class="gallery"
      :mediaArray="props.project.media"
    ></MediaGallery>

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
</template>
<script setup>
import MediaGallery from "./media-gallery.vue";

const props = defineProps(["project", "index"]);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.card-wrapper {
  width: 45%;
  padding: 30px;

  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 55% 20%;
  height: 25%;
  border-radius: 15px;
  color: $quaternary-color;
  background-color: $secondary-color;
  box-shadow: 5px 5px 5px black;
  display: grid;
  column-gap: 2.55%;
}

.card-title {
  grid-row: 1;
  height: fit-content;
  font-size: 2rem;
  margin: 0;
  font-family: $text-font;
  grid-column: 1 / 3;
  justify-self: center;
}

.project-desc {
  grid-row: 2;
  grid-column: 2;
  font-size: 1.25rem;
  justify-self: end;
  align-self: start;
  font-family: $text-font;
  width: 90%;
  margin: 0;
}
.skills {
  grid-row: 3;
  grid-column: 1/2;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}
.gallery {
  width: 300px;
  height: 225px;
  overflow: hidden;
  justify-self: center;
  align-self: start;
}
.skill-block {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: $secondary-color;
  background-color: $quaternary-color;
  padding: 10px;
  font-size: 1.25rem;
  font-family: $heading-font;
  height: fit-content;
  p {
    height: fit-content;
    margin: 0;
  }
}
.external-link {
  width: 35px;
  grid-row: 3;
  grid-column: 2/3;
  justify-self: end;
  align-self: center;
  padding: 10px;
}
</style>
