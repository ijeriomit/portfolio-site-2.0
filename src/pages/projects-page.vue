<template>
  <div class="page">
    <TitleSection class="title-section">
      <h1 class="heading">
        <span>return { </span>
        <span>"Products I've Worked On"</span>
        <span> };</span>
      </h1>
    </TitleSection>
    <section class="product-team-section">
      <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
      <div class="cards">
        <ProductCard
          v-for="(product, index) of products"
          :key="index"
          :product="product"
        ></ProductCard>
      </div>
    </section>
    <section class="project-section">
      <h2 class="heading">
        <span>const array = [</span>
        <span>"Github", "Projects"</span>
        <span>];</span>
      </h2>
      <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
      <div class="cards">
        <ProjectCard
          v-for="(project, index) of projects"
          :key="index"
          :project="project"
          :index="index"
        ></ProjectCard>
      </div>
    </section>
  </div>
</template>
<script setup>
import { store } from "@/data.js";
import { ref } from "vue";
import ProductCard from "@/components/product-card.vue";
import ProjectCard from "@/components/project-card.vue";
import TitleSection from "@/components/title-section";

const projects = ref(store.projects);
const products = ref(store.productTeams);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";
$title-height: 400px;
$products-height: 2000px;
$projects-height: 2000px;
$projects-page-height: $title-height + $products-height + $projects-height;
.page {
  grid-template-rows: $title-height $products-height $projects-height;
  grid-template-columns: 100vw;
  height: $projects-page-height;
  row-gap: 100px;
}
.title-section {
  @extend .page-section;
  overflow: hidden;
  grid-row: 1/2;
  height: $title-height;
  display: grid;
}
.heading {
  color: $quaternary-color;
  justify-self: center;
  align-self: center;
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  font-family: $heading-font;
  font-size: 3rem;
  font-weight: bold;
}
.heading span:first-child,
span:last-child {
  color: $secondary-color;
}
.clip-art {
  width: 65vw;
  position: absolute;
  z-index: 1;
  align-self: center;
  opacity: 50%;
}

.product-team-section {
  grid-row: 2;
  display: grid;
  height: $products-height;

  .clip-art {
    justify-self: end;
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    transform: rotate(180deg);
  }
}
section::-webkit-scrollbar {
  width: 10px;
}
section::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
section::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
section::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.cards {
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  align-items: center;
  z-index: 2;
  padding: 50px;
  width: fit-content;
  justify-self: center;
  row-gap: 2.5%;
}
.project-section {
  grid-row: 3;
  height: $projects-height;
  display: grid;
  width: 100%;
  justify-self: center;
  .heading {
    padding-top: 50px;

    color: $primary-color;
  }
  .heading span:first-child,
  span:last-child {
    color: $quaternary-color;
  }
  .cards {
    height: $projects-height - 500px;
    width: 65vw;
    // padding: 0 50px;
    row-gap: 2.5%;
  }
}
@media screen and (max-width: $small-screen-width) {
  .heading {
    font-size: 2.75rem;
    span:first-child,
    span:last-child {
      color: $secondary-color;
    }
  }
  .title-section {
    height: 350px;
  }
}
</style>
