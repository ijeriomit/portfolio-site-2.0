<template>
  <div class="card-wrapper">
    <h3 class="product-title">
      {{ props.product.title }}
    </h3>
    <p class="product-desc">
      {{ props.product.description }}
    </p>
    <MediaGallery :mediaArray="props.product.media" class="gallery">
    </MediaGallery>
    <div class="tech-stack">
      <p>Tech Stack:</p>
      <div
        class="tech-block"
        v-for="(tech, index) of props.product.techStack"
        :key="index"
      >
        {{ tech }}
      </div>
    </div>
  </div>
</template>
>
<script setup>
import MediaGallery from "./media-gallery.vue";
const props = defineProps(["product"]);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

.card-wrapper {
  display: grid;
  grid-template-columns: 60% 35%;
  grid-template-rows: 75px 250px 75px;
  column-gap: 5%;
  width: 65vw;
  justify-self: center;
}
.product-title {
  grid-row: 1;
  grid-column: 1;
  font-family: $heading-font;
  font-size: 2rem;
}
.product-desc {
  grid-row: 2;
  grid-column: 1;
  font-family: $text-font;
  font-size: 1.5rem;
}
.gallery {
  grid-column: 2;
  grid-row: 1 / 4;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-self: center;
}
.tech-stack {
  grid-row: 3;
  grid-column: 1;
  font-family: $vs-code-font;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  font-weight: bold;
  font-size: 1.5rem;
}
.tech-block {
  background-color: $quaternary-color;
  height: fit-content;
  width: fit-content;
  color: $secondary-color;
  display: flex;
  padding: 10px;
  font-size: 1.25rem;
  font-weight: 400;
  align-items: center;
}
</style>
