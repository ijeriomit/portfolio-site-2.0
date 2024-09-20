<template>
  <div class="card-wrapper">
    <h3 @click="toggleExpand" class="product-title">
      <img
        class="tab"
        :style="{ rotate: expanded ? '180deg' : '' }"
        src="@/assets/clip-art-images/triangle-fill.svg"
      />
      <span>{{ props.product.title }}</span>
    </h3>
    <Transition>
      <div v-if="expanded" class="product-info">
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
    </Transition>
  </div>
</template>
>
<script setup>
import MediaGallery from "./media-gallery.vue";
const props = defineProps(["product", "expanded"]);
const emit = defineEmits(["toggleExpand"]);
function toggleExpand() {
  emit("toggleExpand", !props.expanded);
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$card-title-height: 75px;

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
.product-info {
  grid-row: 2;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 15%;
  width: 95%;
  column-gap: 2.5%;
  align-self: center;
  overflow: hidden;
}
.card-wrapper {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 50px;
  width: 100%;
  height: fit-content;
}
.product-title {
  display: grid;
  height: $card-title-height;
  align-items: center;
  grid-row: 1;
  grid-column: 1;
  // border-radius: 15px;
  color: $secondary-color;
  background-color: $quaternary-color;
  font-family: $heading-font;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;

  span {
    grid-row: 1;
    justify-self: center;
    grid-column: 1;
  }
}
.product-title:hover {
  color: $highlight-color;
}
.product-desc {
  grid-row: 1;
  grid-column: 1;
  font-family: $text-font;
  font-size: 1.5rem;
  margin: 0;
}
.gallery {
  grid-column: 2;
  grid-row: 1;
  align-self: center;
  max-width: 100%;
  height: 400px;
  justify-self: center;
}
.tech-stack {
  grid-row: 2;
  grid-column: 1/3;
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
.tab {
  width: 50px;
  rotate: 90deg;
  grid-row: 1;
  grid-column: 1;
  margin-left: 10px;
  transition: all 0.3s ease-in-out;
}
@media screen and (max-width: $small-screen-width) {
  .card-wrapper {
    width: 100%;
    height: 500px;
    flex-shrink: 0;
    column-gap: 0;
    grid-template-rows: 75px 325px 75px;
  }
  .gallery {
    height: unset;
    width: 400px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-self: end;
  }
  .product-info {
    grid-template-rows: 70% 25%;
    // justify-self: center;
    grid-template-columns: 49% 49%;
    column-gap: 0;
    row-gap: 0;
    margin-left: 1%;
  }
  .product-desc {
    font-size: 1.25rem;
    align-self: center;
  }
  .tech-stack {
    grid-column: 1 / 3;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .page {
    grid-template-rows: 100px 1300px 1000px 400px 100px;
  }
  .product-title {
    font-size: 1.2rem;
    /* align-self: center; */
    height: 50px;
    grid-column: 1 / 3;
    border-radius: 0;
    background-color: $quaternary-color;
    color: $secondary-color;
    padding: 8px 0px;
    span {
      max-width: 70%;
      justify-self: center;
      text-align: center;
    }
  }
  .tab {
    rotate: 180deg;
    margin-left: 15px;
    width: 30px;
  }
  .product-info {
    display: flex;
    gap: 20px;
    flex-flow: column nowrap;
    max-width: 90%;
    margin-left: 0;
  }
  .product-desc {
    font-size: 1.15rem;
    width: 90%;
    order: 2;
  }
  .tech-stack {
    flex-flow: row wrap;
    order: 3;
    gap: 10px 8px;
    justify-content: center;
    p {
      margin: 0;
      width: 100%;
      font-size: 1.25rem;
      display: flex;
      justify-content: center;
    }
    .tech-block {
      font-size: 1rem;
      padding: 7.5px;
      // background-color: $primary-color;
      // color: #000;
    }
  }
  .card-wrapper {
    padding: 10px 0;
  }
}
</style>
