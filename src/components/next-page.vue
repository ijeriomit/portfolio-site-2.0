<template>
  <RouterLink class="wrapper" :to="props.nextRoute">
    <p>{{ props.message }}</p>

    <img class="arrow" src="@/assets/clip-art-images/chevron_black.svg" />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";

const props = defineProps(["message", "nextRoute"]);
</script>
<style lang="scss" scoped>
@import "../scss/variables.scss";

.wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: $quaternary-color;
  transition: all 0.1s;
  width: fit-content;
  height: fit-content;
}
.wrapper:hover {
  color: $primary-color-light;
  .memoji {
    animation: bounce 1.5s ease-in-out;
  }
  .arrow {
    animation: expand 1.5s ease-in-out 1;
  }
}
.arrow {
  position: relative;
  align-self: center;
  width: 75px;
  transform: rotate(180deg);
}
p {
  height: fit-content;
  font-size: $sub-heading-text-size;
  font-family: $heading-font;
  font-weight: bold;
  position: relative;
  align-self: center;
}
@keyframes expand {
  0% {
    transform: rotate(180deg) translateX(0px);
  }
  25% {
    transform: rotate(180deg) translateX(5px);
  }
  50% {
    transform: rotate(180deg) translateX(0px);
  }
  75% {
    transform: rotate(180deg) translateX(5px);
  }
  100% {
    transform: rotate(180deg) translateX(0px);
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(-15%);
  }
  50% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-7%);
  }
  100% {
    transform: translateY(0%);
  }
}
@media screen and (max-width: $laptop-screen-width) {
  p {
    font-size: $sub-heading-text-size-laptop-screen;
  }
}
@media screen and (max-width: $small-screen-width) {
  .memoji {
    width: 125px;
  }
  p {
    font-size: $sub-heading-text-size-small-screen;
  }
  .arrow {
    width: 100px;
    bottom: 20px;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .memoji {
    right: 0;
    width: 125px;
  }
  p {
    right: 0;
  }
  .arrow {
    bottom: 15px;
    right: 0;
    width: 100px;
  }
}
</style>
