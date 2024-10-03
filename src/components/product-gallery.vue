<template>
  <div class="active-product">
    <div class="product-wrapper">
      <h3 class="product-title">
        <span>{{ activeProduct.title }} </span>
        &nbsp;@&nbsp;
        <span> {{ activeProduct.companyName }}</span>
      </h3>
      <p class="product-desc" v-html="activeProduct.description"></p>
      <div class="tech-stack">
        <div
          class="tech-block"
          v-for="(tech, index) of activeProduct.techStack"
          :key="index"
        >
          {{ tech }}
        </div>
      </div>
    </div>
    <img class="media" :src="activeProduct.media[0]" />
    <div class="gallery">
      <div
        class="gallery-item"
        v-for="(product, index) in props.products"
        :style="{
          backgroundImage: `url(${product.coverImg})`,
          backgroundPosition: product.coverImgPos ?? '',
        }"
        :key="index"
        @click="activeProductIndex = index"
        @mouseenter="overLayedIndex = index"
        @mouseleave="overLayedIndex = -1"
      >
        <div v-show="overLayedIndex == index" class="overlay">
          <h4>{{ product.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const props = defineProps(["products"]);
const activeProductIndex = ref(0);

const overLayedIndex = ref(-1);

const activeProduct = computed(() => {
  return props.products[activeProductIndex.value];
});
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$product-height: 600px;
$gallery-height: 300px;
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
.active-product {
  display: grid;
  height: 80%;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 30%;
  row-gap: 10px;
  color: $secondary-color;
  .product-wrapper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    max-height: 100%;
    gap: 30px;
    color: black;
    align-self: center;
    align-items: center;
  }
  .product-title {
    margin: 0;
    font-family: $text-font;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-self: start;
    background-color: $quaternary-color;
    padding: 10px;

    font-size: $sub-heading-text-size;
    text-wrap: nowrap;
    border-radius: 15px;
    color: $highlight-color;
    span:first-child {
      padding-right: 7px;
      color: $secondary-color;
    }
    span:last-child {
      padding-left: 7px;
      color: $secondary-color;
    }
  }

  .product-desc {
    color: $quaternary-color;
    display: flex;

    font-size: $text-size;
    font-family: $text-font;
    grid-row: 2;
    grid-column: 1;
    align-items: center;
    z-index: 2;
    width: 90%;
    height: fit-content;
    height: 300px;
    margin: 0;
    color: black;
    padding: 0;
    border-radius: 10px;
    justify-self: center;
    line-height: 1.25;
    overflow: visible;
    grid-column: 1 / 4;
  }
}

.media {
  grid-column: 2;
  grid-row: 1;
  justify-self: start;
  height: 90%;
  width: 85%;
  align-self: center;
  z-index: 1;
}
.tech-stack {
  grid-row: 3;
  justify-self: start;
  gap: 10px;
  align-self: center;
  grid-column: 1 / 2;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  z-index: 2;
  .tech-block {
    background-color: black;
    font-family: $text-font;
    font-size: $sub-text-size;
  }
}
.gallery {
  display: flex;
  flex-flow: row nowrap;
  overflow-x: visible;
  align-items: center;
  gap: 10px;
  overflow-y: hidden;
  grid-row: 2;
  grid-column: 1 / 3;
  padding-top: 10px;
  width: 100%;
  .gallery-item {
    flex-shrink: 0;
    width: 23%;
    height: 100%;
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
@media screen and (max-width: $laptop-screen-width) {
  .active-product {
    .product-title {
      font-size: $sub-heading-text-size-laptop-screen;
    }
    .product-desc {
      font-size: $text-size-laptop-screen;
    }
    .tech-block {
      font-size: $sub-text-size-laptop-screen;
    }
    .media {
      grid-row: 1 / 4;
      height: 95%;
    }
  }
}
@media screen and (max-width: $small-screen-width) {
  .active-product {
    height: 95%;
    .product-title {
      font-size: $sub-heading-text-size-small-screen;
    }
    .product-desc {
      font-size: $text-size-small-screen;
    }
    .tech-block {
      font-size: $sub-text-size-small-screen;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  .active-product {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 20px;
    .gallery {
      order: 3;
      height: 120px;
      column-gap: 20px;
      width: 85%;
      padding: 0px;
      overflow-x: scroll;
      .gallery-item {
        width: 30%;
        // height: 100px;
        font-size: $sub-text-size-phone-screen;
      }
    }
    .product-title {
      text-wrap: nowrap;
      width: fit-content;
      padding-left: 5px;
      padding-right: 5px;
      max-width: 90%;
      order: 1;
      align-self: center;
      font-size: $sub-heading-text-size-phone-screen;
      justify-content: center;
    }
    .media {
      order: 2;
      width: 350px;
      height: 275px;
    }
    .tech-stack {
      order: 4;
      width: 85%;
      column-gap: 2%;
      justify-content: space-evenly;
      flex-flow: row wrap;
      .tech-block {
        padding: 7.5px;
        font-size: $sub-text-size-phone-screen;
      }
    }
    .product-desc {
      order: 5;
      width: 75%;
      padding: 15px;
      height: 60%;
      border-radius: 15px;
      box-shadow: none;
      text-align: center;
    }
  }
}
</style>
