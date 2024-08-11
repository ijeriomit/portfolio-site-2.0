<template>
  <div class="wrapper">
    <RouterLink class="logo" :to="routes[0]">
      <img src="@/assets/clip-art-images/ijeri-logo-icon-mono.svg" />
      <img src="@/assets/clip-art-images/ijeri-logo-text.png" />
    </RouterLink>
    <p class="tag">Living, learning, and leveling up<br />one day at a time.</p>
    <div class="socials">
      <a
        href="https://www.linkedin.com/in/ijeri-omitogun/"
        target="_blank"
        class="social-icon"
        ><img src="@/assets/link-images/linkedin.svg"
      /></a>
      <a href="https://github.com/ijeriomit" target="_blank" class="social-icon"
        ><img src="@/assets/link-images/github.svg"
      /></a>
      <a
        href="https://medium.com/@jeri-omit"
        target="_blank"
        class="social-icon"
        ><img src="@/assets/link-images/medium.svg"
      /></a>
    </div>
    <div class="credit">
      <p>@ Ijeri Omitogun 2024</p>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { routes } from "@/main.js";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.wrapper {
  background-color: $light-primary-color;
  // background-color: $primary-color;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 150px 150px 100px;
  display: grid;
}
.socials {
  display: flex;
  grid-row: 3;
  grid-column: 1;
  justify-self: center;
  align-self: start;
  width: 45%;
  justify-content: space-between;
}
.social-icon {
  width: 3.5rem;
  cursor: pointer;
}
.social-icon:hover {
  width: 3.75rem;
}
.credit {
  grid-row: 3;
  grid-column: 3;
  align-self: start;
  justify-self: center;
  font-size: 2rem;
  font-family: Roboto Slab Roboto Mono monospace;
}
.tag {
  grid-row: 2;
  grid-column: 2;
  text-align: center;
  align-self: center;
  justify-self: center;
  font-size: 2rem;
}
.footer-wrapper > div {
  text-align: center;
  align-self: center;
}
.logo {
  align-self: end;
  justify-self: center;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  img:first-child {
    width: 15rem;
    margin: -50px;
  }
  img:last-child {
    width: 7.5rem;
    right: 10%;
  }
}
</style>
