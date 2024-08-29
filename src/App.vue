<template>
  <floating-header class="header"></floating-header>
  <main>
    <RouterView />
  </main>
</template>
<script setup>
import FloatingHeader from "./components/floating-header.vue";
</script>
<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$header-height: 100px;
$page-height: 6000px;

#app {
  width: 100vw;
  position: relative;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  width: 0;
}

.background {
  z-index: 1;
  height: 100%;
  position: relative;
  grid-column: 1/4;
  display: flex;
  flex-flow: row;
}
.home-section {
  grid-row: 1/2;
}
.about-section {
  grid-row: 2/3;
}
.project-section {
  grid-row: 3/4;
}
.contact-section {
  grid-row: 4/5;
}
.header {
  height: $header-height;
  position: fixed;
  z-index: 1000;
  width: 100vw;
}
.content-block {
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  grid-column: 2/2;
  overflow: hidden;
  // scroll-snap-align: center;
}
@media screen and (max-width: $small-screen-width) {
  .footer {
    height: $footer-height - 100px;
  }
}
</style>
