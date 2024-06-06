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
      <div
        style="grid-row: 2/4; justify-content: center"
        class="gradient-background"
      ></div>
      <div id="ABOUT-ME" class="content-block" style="grid-row: 2/2">
        <!-- <about-section class="section-wrapper"> </about-section> -->
      </div>
      <div id="PROJECTS" class="content-block" style="grid-row: 3/3">
        <!-- <projects-section class="section-wrapper"></projects-section> -->
      </div>
      <div
        id="CONTACT-ME"
        class="content-block"
        style="grid-row: 5/5; flex-flow: column nowrap"
      >
        <!-- <section-title>
          <template v-slot:section-title-content>
            <div class="section-title-keyword-1-alt">await</div>
            <div class="section-title-keyword-2-alt">fetch</div>
            <div class="section-title-operator-alt">(</div>
            <div class="section-title-title-alt">Contact Me</div>
            <div class="section-title-operator-alt">)</div>
          </template>
        </section-title> -->
        <!-- <contact-me class="section-wrapper"></contact-me> -->
      </div>
      <!-- <div class="footer" style="grid-row: 6/6"></div>
      <div class="content-block" style="grid-row: 6/6">
        <footer-section class="section-wrapper"></footer-section>
      </div> -->
    </div>
    <!-- <div class="social-bar"></div> -->
  </div>
</template>
<script>
import FloatingHeader from "./components/floating-header.vue";
import HomeSection from "./sections/home.vue";
// import Footer from "./components/footer.vue";
import gradientBackground from "@/assets/background-gradient.svg";
import whiteMatrixBackground from "@/assets/white-matrix-background.png";
// import { ref, onMounted } from "vue";
export default {
  name: "portfolio-app",
  components: {
    "floating-header": FloatingHeader,
    "home-section": HomeSection,
    // "footer-section": Footer,
  },
  data: function () {
    return {
      whiteMatrixBackground,
      gradientBackground,
      headerColorWhite: true,
    };
  },
  // setup: function () {
  //   const header = ref(null);
  //   const that = this;
  //   onMounted(() => {
  //     let observer = new IntersectionObserver(that.changeHeaderColorOnScroll, {
  //       threshold: [0.9, 0.94, 0.98],
  //     });
  //     observer.observe(header);
  //   });
  //   return { header };
  // },
  changeHeaderColorOnScroll: function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("is intersecting");
        this.headerColorWhite = !this.headerColorWhite;
      }
    });
  },
};
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
.header {
  height: $header-height;
  position: fixed;
  z-index: 1000;
  grid-column: 2/3;
}
.footer {
  z-index: 1;
  position: relative;
  background-color: $primary-color;
  grid-column: 1/4;
  border-top: 5px solid $secondary-color;
}

.content-grid {
  position: relative;
  // top: 60px;
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
.background-block {
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
.content-block {
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  grid-column: 2/2;
  overflow: hidden;
}

.title-background {
  @extend .background-block;
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
  @extend .background-block;
  background-image: linear-gradient(
    rgba(0, 135, 83, 0.63),
    rgba(0, 135, 83, 0.275),
    rgba(0, 135, 83, 0.1),
    rgba(0, 135, 83, 0.1),
    rgba(0, 135, 83, 0.275),
    rgba(0, 135, 83, 0.63)
  );
}
.bottom-gradient-background {
  @extend .background-block;
  background-image: linear-gradient(
    rgba(0, 135, 83, 0.1),
    rgba(0, 135, 83, 0.275),
    rgba(0, 135, 83, 0.63)
  );
}
.half-background-block {
  @extend .secondary-background-block;
  height: ($aboutMe-height / 2);
  border-top: none;
}

.secondary-background-block {
  @extend .background-block;
  background-color: $secondary-color;
  color: $primary-color;
  border-top: #f1f1f1 solid 15px;
  border-left: #f1f1f1 solid 15px;
  border-right: #f1f1f1 solid 15px;
  border-bottom: #f1f1f1 solid 15px;
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
      $title-height/2
      $aboutMe-height
      $projects-height
      $contactMe-height
      $footer-height;
  }
}
body::-webkit-scrollbar {
  display: none;
}
.gear-image {
  width: 30vw;
  height: 30vw;
  align-self: flex-start;
  left: -16vw;
  position: absolute;
}
</style>
