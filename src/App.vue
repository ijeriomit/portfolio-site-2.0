<template>
  <div>
    <floating-header class="header"></floating-header>
    <main class="content-grid">
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
      <div id="PROJECTS" class="content-block project-section"></div>
      <div class="flag-background"></div>
      <div id="CONTACT-ME" class="content-block contact-section"></div>
      <div class="footer"></div>
    </main>
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
$title-height: 600px;
$aboutMe-height: 1600px;
$projects-height: 1600px;
$contactMe-height: 1000px;
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
  // scroll-snap-type: y proximity;
  // overflow-y: scroll;
  // scroll-behavior: smooth;
  height: 100vh;
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
  scroll-behavior: smooth;
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
  width: 100vw;
}
.footer {
  grid-row: 5/5;
  width: 100vw;
  position: absolute;
  bottom: 0;
  height: $footer-height;
  background-color: $primary-color;
  // scroll-snap-align: center;
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
  grid-row: 2/5;
  background-image: linear-gradient(
    rgba(0, 135, 83, 0.65),
    rgba(0, 135, 83, 0.25),
    rgba(0, 135, 83, 0)
  );
}

@media screen and (max-width: $small-screen-width) {
  .content-grid {
    grid-template-rows:
      $title-height
      calc($aboutMe-height + 400px)
      $projects-height
      $contactMe-height
      $footer-height;
  }
}

@media screen and (max-width: $phone-screen-width) {
  .content-grid {
    position: relative;
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
