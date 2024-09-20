<template>
  <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <floating-header class="header"></floating-header>
    <section class="product-team-section">
      <h1 class="heading">
        <span>Products I've Worked On</span>
      </h1>
      <ProjectGallery :projects="products"></ProjectGallery>
      <!-- <div class="cards">
        <ProductCard
          class="product-card"
          v-for="(product, index) of products"
          @toggle-expand="toggleProductCards($event, index)"
          :key="index"
          :product="product"
          :expanded="index == selectedProductIndex"
        ></ProductCard>
      </div> -->
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

import ProjectGallery from "@/components/project-gallery.vue";
// import ProductCard from "@/components/product-card.vue";
import ProjectCard from "@/components/project-card.vue";
import NextPage from "@/components/next-page.vue";
import FooterBar from "@/components/footer-bar.vue";
import FloatingHeader from "@/components/floating-header.vue";

const projects = ref(store.projects);
const products = ref(store.productTeams);
// const selectedProductIndex = ref(0);

// function toggleProductCards(cardExpanded, cardIndex) {
//   if (cardExpanded == true) {
//     selectedProductIndex.value = -1;
//     setTimeout(() => {
//       selectedProductIndex.value = cardIndex;
//     }, 250);
//   } else {
//     selectedProductIndex.value = -1;
//   }
// }
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";
$title-height: 100px;
$products-height: 1300px;
$projects-height: 1200px;
$next-height: 400px;
$projects-page-height: $header-height + $products-height + $projects-height +
  $next-height + $footer-height;
.page {
  grid-template-rows: $header-height $products-height $projects-height $next-height $footer-height;
  grid-template-columns: 100%;
  row-gap: 20px;
  scroll-snap-type: y proximity;
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

.product-team-section {
  @extend .page-section;
  display: flex;
  flex-flow: column nowrap; // height: $products-height;
  padding-top: 75px;
  row-gap: 50px;

  .heading {
    //   color: $quaternary-color;
    //   justify-self: center;
    //   align-self: center;
    grid-row: 1;
    //   z-index: 2;
    //   font-family: $heading-font;
    //   font-size: 3rem;
    //   font-weight: bold;
  }
  .product-card {
    margin: 10px 0;
  }
  .cards {
    flex-flow: column;
    width: 65vw;
    row-gap: 2.5%;
    grid-row: 2;
  }
}

.cards {
  display: flex;
  align-items: center;
  z-index: 2;
  padding: 50px;
  justify-self: center;
}
.project-card {
  width: 600px;
  height: 375px;
}
.project-section {
  @extend .page-section;
  grid-row: 3;
  display: grid;
  // width: 100%;
  justify-self: center;
  row-gap: 5%;
  overflow: hidden;
  grid-template-rows: $title-height $projects-height - $title-height;
  .heading {
    padding-top: 50px;
    grid-row: 1;
    color: $primary-color;
  }
  .heading span:first-child,
  span:last-child {
    color: $quaternary-color;
  }
  .cards {
    flex-flow: row wrap;
    height: 90%;
    overflow-y: auto;
    width: 75vw;
    padding: 30px;
    flex-flow: row wrap;
    justify-self: center;
    gap: 2.5%;
  }
}
.next {
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
@media screen and (max-width: $small-screen-width) {
  .heading {
    font-size: 2.75rem;
  }
  .title-section {
    height: 350px;
  }

  .page {
    grid-template-rows: 125px 1200px 1200px;
    row-gap: 0;
  }
  .product-team-section {
    overflow: hidden;
    grid-template-rows: 125px 1200px;
    height: 100%;
    .product-card {
      height: fit-content;
    }
    .cards {
      padding: 25px;
      row-gap: 1%;
      width: 75vw;
    }
  }
  .project-section {
    row-gap: 2.5%;
    grid-template-rows: 150px 400px;
    .heading {
      padding: 0;
    }
    .cards {
      justify-content: center;
      row-gap: 5%;
      overflow-y: scroll;
      height: 800px;
    }
    .project-card {
      width: 75%;
    }
  }
  .next {
    height: 350px;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .page {
    grid-template-rows: 100px 1200px 1000px 400px 100px;
    height: unset;
  }
  .project-section {
    grid-template-rows: 100px 400px;
    margin-top: 30px;
    row-gap: 0;
    .cards {
      width: 90vw;
      padding: 0px;
      row-gap: 2.5%;
    }
    .project-card {
      display: grid;
      grid-template-rows: 10% 40% 35% 5%;
      grid-template-columns: 80% 20%;
      flex-flow: column nowrap;
      gap: 10px;
      padding: 15px 20px;
      margin-top: 10px;
      width: unset;
      box-shadow: none;
      align-items: center;
      height: 450px;
    }
  }
  .next {
    justify-self: center;
    margin: 0;
  }
  .heading {
    margin: 0;
    font-size: 1.7rem;
  }
  .product-team-section {
    padding: 0;
    width: auto;
    grid-template-rows: 100px 1000px;
    .heading {
      font-size: 1.7rem;
    }
    .product-card {
      margin: 0px;
    }
    .cards {
      width: 100vw;
      padding: 0;
    }
  }
  .footer {
    gap: 40px;
  }
}
</style>
