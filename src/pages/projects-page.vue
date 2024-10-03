<template>
  <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <floating-header class="header"></floating-header>
    <section class="product-team-section">
      <h1 class="heading">Products I've Worked On</h1>
      <ProductGallery
        class="product-gallery"
        :products="products"
      ></ProductGallery>
    </section>
    <section class="project-section">
      <h2 class="heading">Personal Projects</h2>
      <div class="cards">
        <ProjectCard
          class="project-card"
          v-for="(project, index) of projects"
          :key="index"
          :project="project"
          :index="index"
        ></ProjectCard>
      </div>
    </section>
    <NextPage
      class="next"
      message="Contact Me"
      :next-route="routes[3]"
    ></NextPage>
    <FooterBar class="footer"></FooterBar>
  </div>
</template>
<script setup>
import { store } from "@/data.js";
import { ref } from "vue";
import { routes } from "@/main.js";

import ProductGallery from "@/components/product-gallery.vue";
import ProjectCard from "@/components/project-card.vue";
import NextPage from "@/components/next-page.vue";
import FooterBar from "@/components/footer-bar.vue";
import FloatingHeader from "@/components/floating-header.vue";

const projects = ref(store.projects);
const products = ref(store.productTeams);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";
$title-height: 75px;
$products-height: 95vh;
$projects-height: 95vh;
$next-height: 400px;
.page {
  grid-template-rows: $header-height $products-height $projects-height $next-height $footer-height;
  grid-template-columns: 100%;
  // scroll-snap-type: unset;
}

.clip-art {
  position: absolute;
  width: 40vw;
  transform: rotate(180deg);
  right: 0;
  z-index: 1;
  bottom: 0;
}
.heading {
  color: $quaternary-color;
  grid-row: 1;
}
.header {
  grid-row: 1;
}
.product-team-section {
  @extend .page-section;
  display: flex;
  flex-flow: column nowrap;
  padding-top: 5vh;
  gap: 2.5%;
  width: 75%;
  height: 100%;
  align-items: center;
  grid-row: 2;
  .heading {
    margin-bottom: 0;
    padding: 25px;
    margin: 0;
    height: fit-content;
  }
  // .product-gallery {
  //   height: 85%;
  // }
}

.project-section {
  @extend .page-section;
  grid-row: 3;
  display: flex;
  width: 80%;
  flex-flow: column nowrap;
  justify-self: center;
  padding-top: 5%;
  // grid-template-columns: 100%;
  // grid-template-rows: 7vh 90vh;
  gap: 10px;
  .heading {
    margin: 0;
    padding: 7.5px;
    color: $quaternary-color;
  }
  .cards {
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
    height: 90%;
    display: flex;
    align-items: center;
    width: 100%;
  }
  .project-card {
    width: 30%;
    height: 45%;
  }
}
.next {
  @extend .page-section;
  grid-row: 4;
  justify-self: end;
  align-self: center;
  margin-right: 15vw;
}
.footer {
  grid-row: 5;
  align-self: center;
  justify-self: center;
}
@media screen and (max-width: $laptop-screen-width) {
  .heading {
    font-size: $heading-text-size-laptop-screen;
  }
  .product-team-section {
    width: 75%;
    height: 95%;
  }
  .project-section {
    padding-top: 2.5%;
    grid-template-rows: 7vh 95vh;
    .cards {
      max-height: 95%;
    }
  }
}
@media screen and (max-width: $small-screen-width) {
  .project-section {
    width: 85%;
    .project-card {
      width: 32%;
      height: 45%;
    }
  }

  .heading {
    font-size: $heading-text-size-small-screen;
  }
  .next {
    height: 350px;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .page {
    height: 100vh;
  }
  .project-section {
    height: 100vh;
    padding-top: 5vh;
    width: 95%;
    gap: 0;
    align-self: center;
    .heading {
      font-size: $heading-text-size-phone-screen;
      height: 10%;
    }
    .cards {
      width: 95%;
      height: 80vh;
      overflow-y: scroll;
      padding: 0px;
      row-gap: 5%;
      justify-content: center;
      align-self: center;
      .project-card {
        flex-flow: column nowrap;
        gap: 10px;
        height: 275px;
        width: 95%;
      }
    }
  }
  .product-team-section {
    padding-top: 7.5vh;
    width: auto;
    height: 120vh;
    scroll-snap-align: none;
    .heading {
      font-size: $heading-text-size-phone-screen;
      padding: 10px;
      width: 60%;
    }
  }
  .next {
    justify-self: center;
    margin: 0;
    height: 27.5vh;
    width: 100vw;
    scroll-snap-align: none;
    justify-content: center;
  }
  .heading {
    margin: 0;
    text-align: center;
  }

  .footer {
    gap: 40px;
    padding: 30px 0;
  }
}
</style>
