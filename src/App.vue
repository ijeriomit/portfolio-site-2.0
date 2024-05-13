<template>
  <div id="app">
    <floating-header class="header"></floating-header>
    <div class="content-grid">
      <div class="primary-background-block" style="grid-row: 1/1"></div>
      <div id="HOME" class="content-block" style="grid-row: 1/1">
        <home-section
          class="section-wrapper"
          style="padding-bottom: 10vh"
        ></home-section>
      </div>
      <div
        style="grid-row: 2/2; justify-content: center"
        class="secondary-background-block"
      >
        <img style="width: 700px; align-self: flex-end" :src="mattFarImg" />
      </div>
      <div
        v-show="true"
        id="ABOUT-ME"
        class="content-block"
        style="grid-row: 2/2"
      >
        <about-section class="section-wrapper"> </about-section>
      </div>
      <div
        class="primary-background-block"
        style="grid-row: 3/3; justify-content: flex-start"
      >
        <img class="gear-image" :src="gearsImg" />
      </div>
      <div
        v-show="true"
        id="WORK-EXPERIENCE"
        class="content-block"
        style="grid-row: 3/3"
      >
        <workexp-section class="section-wrapper"></workexp-section>
      </div>
      <div
        class="secondary-background-block"
        style="grid-row: 4/4; border-bottom-width: 15px"
      ></div>
      <div
        v-show="true"
        id="PROJECTS"
        class="content-block"
        style="grid-row: 4/4"
      >
        <projects-section class="section-wrapper"></projects-section>
      </div>
      <div
        class="primary-background-block"
        style="
          grid-row: 5/5;
          align-self: flex-start;
          background-color: #008753;
          border: none;
        "
      >
        <img :src="phoneImg" />
      </div>
      <div
        v-show="true"
        id="CONTACT-ME"
        class="content-block"
        style="grid-row: 5/5; flex-flow: column nowrap"
      >
        <section-title>
          <template v-slot:section-title-content>
            <div class="section-title-keyword-1-alt">await</div>
            <div class="section-title-keyword-2-alt">fetch</div>
            <div class="section-title-operator-alt">(</div>
            <div class="section-title-title-alt">Contact Me</div>
            <div class="section-title-operator-alt">)</div>
          </template>
        </section-title>
        <contact-me class="section-wrapper"></contact-me>
      </div>
      <div class="footer" style="grid-row: 6/6"></div>
      <div class="content-block" style="grid-row: 6/6">
        <footer-section class="section-wrapper"></footer-section>
      </div>
    </div>
    <div class="social-bar"></div>
  </div>
</template>
<script>
import FloatingHeader from "./components/floating-header.vue";
import HomeSection from "./sections/home.vue";
import AboutMe from "./sections/about-me.vue";
import workExperience from "./sections/work-experience.vue";
import projects from "./sections/projects.vue";
import contactMe from "./sections/contact-me.vue";
import Footer from "./components/footer.vue";
import gears from "@/assets/clip-art-images/single-gear.png";
import mattFar from "@/assets/clip-art-images/Mattfarley-background.svg";
import phone from "@/assets/clip-art-images/phone.svg";
import sectionTitle from "@/components/section-title.vue";

export default {
  name: "portfolio-app",
  components: {
    "floating-header": FloatingHeader,
    "home-section": HomeSection,
    "about-section": AboutMe,
    "workexp-section": workExperience,
    "projects-section": projects,
    "contact-me": contactMe,
    "footer-section": Footer,
    "section-title": sectionTitle,
  },
  data: function () {
    return {
      gearsImg: gears,
      mattFarImg: mattFar,
      phoneImg: phone,
    };
  },
};
</script>
<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$page-height: $header-height + $small-section-height + $section-height +
  $section-height + $large-section-height + $section-height + $footer-height;

#app {
  height: $page-height;
  width: 100vw;
  position: relative;
}
.header {
  height: $header-height;
  position: fixed;
  z-index: 1000;
  background-color: $primary-color;
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
  width: 100%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows:
    ($small-section-height + $header-height) $section-height $section-height
    $large-section-height
    $section-height $footer-height;
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
  // border-top: #f1f1f1 solid 8px;
  // border-bottom: #f1f1f1 solid 4px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row;
}
.content-block {
  z-index: 2;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  grid-column: 2/2;
  overflow: hidden;
}
.primary-background-block {
  @extend .background-block;
  color: $dark-text-color;
  background-color: $primary-color;
}
.half-background-block {
  @extend .secondary-background-block;
  height: ($section-height / 2);
  border-top: none;
}
.gradient {
  background-image: linear-gradient(
    to right,
    $secondary-color,
    $primary-color,
    $primary-color,
    $primary-color,
    $primary-color,
    $primary-color,
    $primary-color,
    $primary-color,
    $secondary-color
  );
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
.section-wrapper {
  display: flex;
  flex-flow: column nowrap;
  height: 90%;
  justify-content: space-around;
  overflow: hidden;
}

@media screen and (max-width: $phone-screen-width) {
  .section-wrapper {
    justify-content: center;
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
