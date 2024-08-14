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
  width: 60%;
  height: 25%;
  padding: 50px;
  flex: 1 0 auto;
  border-radius: 15px;
  font-family: $vs-code-font;
  color: $quaternary-color;
  background-color: $secondary-color;
  box-shadow: 5px 5px 5px black;
  display: grid;
  grid-template-columns: 45% 50%;
  grid-template-rows: 15% 65% 20%;
  column-gap: 5%;
}
.left-card {
  align-self: flex-start;
  .card-title,
  .gallery {
    grid-column: 1;
  }
  .project-desc {
    grid-column: 2;
  }
}
.right-card {
  align-self: flex-end;
  .card-title,
  .gallery {
    justify-self: end;
    grid-column: 2;
  }
  .project-desc {
    grid-column: 1;
  }
}
.card-title {
  grid-row: 1;
  height: fit-content;
  font-size: 2rem;
  margin: 0;
}
.project-desc {
  grid-row: 2;
  grid-column: 2;
  font-size: 1.25rem;
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
  width: 100%;
  height: 100%;
  justify-self: center;
  align-self: center;
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
  width: 50px;
  grid-row: 3;
  grid-column: 2/3;
  justify-self: end;
  align-self: center;
  padding: 10px;
}
</style>
