<template>
  <div>
    <floating-header class="header"></floating-header>
    <main>
      <RouterView />
    </main>
    <Footer class="footer"></Footer>
  </div>
</template>
<script setup>
import FloatingHeader from "./components/floating-header.vue";
import Footer from "./components/footer.vue";
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
  background-image: linear-gradient(
    rgba(0, 135, 83, 0.8),
    rgba(0, 135, 83, 0.25),
    rgba(0, 135, 83, 0)
  );
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
  // .content-grid {
  //   grid-template-rows:
  //     $title-height
  //     calc($aboutMe-height + 400px)
  //     $projects-height
  //     $contactMe-height
  //     $footer-height;
  // }
}

@media screen and (max-width: $phone-screen-width) {
  // .content-grid {
  //   position: relative;
  //   height: 100%;
  //   width: 100vw;
  //   display: grid;
  //   grid-template-columns: 5% 90% 5%;
  //   grid-template-rows:
  //     calc($title-height/2)
  //     $aboutMe-height
  //     $projects-height
  //     $contactMe-height
  //     $footer-height;
  // }
}
body::-webkit-scrollbar {
  display: none;
}
</style>
