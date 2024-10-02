<template>
  <RouterLink class="wrapper" :to="props.nextRoute">
    <img class="memoji" src="../assets/clip-art-images/memoji-laptop.svg" />
    <p>{{ props.message }}</p>

    <img class="arrow" src="@/assets/clip-art-images/thin-arrow.png" />
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
  flex-flow: column nowrap;
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
.memoji {
  width: 33%;
  align-self: center;
  justify-self: end;
  position: relative;
  right: 10%;
}
.arrow {
  width: 30%;
  position: relative;
  align-self: center;
  transform: scaleX(125%);
  bottom: 15%;
  color: green;
  right: 5%;
}
p {
  margin: 1.5rem 1rem 0;
  height: 3rem;
  font-size: $sub-heading-text-size;
  font-family: $heading-font;
  font-weight: bold;
  position: relative;
  right: 5%;
  align-self: center;
}
@keyframes expand {
  0% {
    transform: scaleX(125%) translateX(0px);
  }
  25% {
    transform: scaleX(135%) translateX(10px);
  }
  50% {
    transform: scaleX(125%) translateX(0px);
  }
  75% {
    transform: scaleX(130%) translateX(5px);
  }
  100% {
    transform: scaleX(125%) translateX(0px);
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
