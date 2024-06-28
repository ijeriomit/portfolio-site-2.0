<template>
  <div id="app">
    <div class="content-grid">
      <floating-header class="header" ref="header"></floating-header>
      <div class="title-background">
        <img src="@/assets/matrix-background.svg" />
      </div>
      <div id="HOME" class="content-block home-section">
        <home-section></home-section>
      </div>
      <div class="gradient-background"></div>
      <div id="ABOUT-ME" class="content-block about-section">
        <about-section></about-section>
      </div>
      <div id="PROJECTS" class="content-block project-section">
        <!-- <projects-section class="section-wrapper"></projects-section> -->
      </div>
      <div class="flag-background"></div>
      <div id="CONTACT-ME" class="content-block contact-section">
        <!-- <contact-me class="section-wrapper"></contact-me> -->
      </div>
      <div class=""></div>
      <!-- <div class="content-block" style="grid-row: 6/6">
        <footer-section class="section-wrapper"></footer-section>
      </div> -->
    </div>
    <!-- <div class="social-bar"></div> -->
  </div>
</template>
<script setup>
import FloatingHeader from "./components/floating-header.vue";
import HomeSection from "./sections/home.vue";
import AboutSection from "./sections/about-me.vue";
// import Footer from "./components/footer.vue";
</script>
<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$header-height: 100px;
$title-height: 650px;
$aboutMe-height: 1800px;
$projects-height: 1600px;
$contactMe-height: 1500px;
$footer-height: 500px;

$page-height: $title-height + $aboutMe-height + $projects-height +
  $contactMe-height + $footer-height;

#app {
  height: $page-height;
  width: 100vw;
  position: relative;
}

.content-grid {
  position: relative;
  height: 100%;
  width: 100vw;
  display: grid;
  grid-template-columns: 2.5% 95% 2.5%;
  grid-template-rows:
    $title-height
    $aboutMe-height
    $projects-height
    $contactMe-height
    $footer-height;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
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
  grid-column: 2/2;
}
.footer {
  grid-row: 5/5;
}
.content-block {
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  grid-column: 2/2;
  overflow: hidden;
}
.title-background {
  @extend .background;
  background-color: $primary-color;
  grid-row: 1 / 2;
  width: 100%;
  opacity: 40%;
  display: flex;
  overflow: hidden;
}
.title-background img {
  align-self: center;
  width: 100%;
  height: 200%;
}
.gradient-background {
  @extend .background;
  grid-row: 2/4;
  background-image: linear-gradient(
    rgba(0, 135, 83, 0.63),
    rgba(0, 135, 83, 0.275),
    rgba(0, 135, 83, 0.1),
    rgba(0, 135, 83, 0.1),
    rgba(0, 135, 83, 0.275),
    rgba(0, 135, 83, 0.63)
  );
}
@media screen and (max-width: $phone-screen-width) {
  .content-grid {
    position: relative;
    // top: 60px;
    height: 100%;
    width: 100vw;
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows:
      calc($title-height/2)
      $aboutMe-height
      $projects-height
      $contactMe-height
      $footer-height;
  }
}
body::-webkit-scrollbar {
  display: none;
}
</style>
