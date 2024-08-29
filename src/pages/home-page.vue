<template>
  <div class="page">
    <div class="title-section-background"></div>
    <img
      class="matrix"
      src="@/assets/background-images/matrix-rain-white.gif"
    />
    <div class="home-wrapper">
      <img
        class="memoji"
        src="@/assets/clip-art-images/memoji-wave.svg"
        alt="cartoon waving"
      />
      <h1 class="title">
        <div class="typewriter-animation">HI, I AM</div>
        <div class="unhide-typewriter-animation">IJERI OMITOGUN!</div>
      </h1>
      <h2 class="subtitle">
        Frontend Developer / Software Engineer / UX Designer
      </h2>
      <nav class="nav-links">
        <RouterLink class="nav-link" :to="routes[1]">Learn About Me</RouterLink>
        <RouterLink class="nav-link" :to="routes[2]">See My Work</RouterLink>
        <RouterLink class="nav-link" :to="routes[3]"
          >Send Me a Message</RouterLink
        >
        <a
          class="nav-link"
          href="https://yellow-anabal-39.tiiny.site/"
          target="_blank"
        >
          Resume
        </a>
      </nav>
      <FooterSection class="footer"></FooterSection>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { routes } from "@/main.js";
import FooterSection from "@/components/footer-section.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";
.page {
  overflow: hidden;
  height: 100vh;
  display: grid;
}
.title-section-background {
  z-index: 1;
  height: inherit;
  background-color: $primary-color;
  width: 100%;
  opacity: 85%;
  grid-column: 1;
  grid-row: 1;
}
.matrix {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 100%;
  height: inherit;
  opacity: 12.5%;
  z-index: 2;
  position: relative;
}
.home-wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: $header-height;
  max-width: 70%;
  grid-template-rows: 200px 175px 200px 100px;
  align-self: center;
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  justify-self: center;
}
.footer {
  grid-row: 4;
  grid-column: 1 / 3;
  align-self: end;
}
.memoji {
  order: 1;
  width: 320px;
  position: relative;
  grid-column: 1/1;
  grid-row: 1/3;
  align-self: center;
  justify-self: end;
  margin: 0 10px;
}

.title {
  color: $quaternary-color;
  font-family: $heading-font;
  font-weight: bold;
  grid-column: 2/2;
  grid-row: 1/1;
  font-size: 3.5rem;

  margin: 0 50px 0 50px;
  align-self: center;
}
.title div {
  max-width: fit-content;
  margin-left: 0;
  margin-right: 0;
}
.subtitle {
  color: $quaternary-color;
  font-family: $text-font;
  font-weight: bold;
  grid-column: 2/2;
  grid-row: 2/2;
  align-self: center;
  font-size: 2.5rem;
  margin: 0 50px 0 50px;
  max-width: fit-content;
}

.nav-links {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  grid-row: 3;
  grid-column: 1 / 3;
  width: fit-content;
  justify-self: center;
  border-radius: 20px;
  align-self: center;
  height: 100px;
  background-color: $quaternary-color;
  cursor: pointer;
}
.nav-link {
  font-weight: bold;
  font-size: $small-text-size;
  color: $secondary-color;
  text-decoration: none;

  padding: 15px 30px;
  border-right: 5px solid $highlight-color;
  font-family: $heading-font;
}
.nav-link:hover {
  color: $highlight-color;
}
.nav-link:last-child {
  border-right: none;
}
@media screen and (max-width: $small-screen-width) {
  .home-wrapper {
    max-width: 100%;
    align-self: center;
    justify-self: center;
    grid-template-columns: 40% 50%;
  }
}
@media screen and (max-width: $phone-screen-width) {
  $left-side-padding: 20px;
  .button-row {
    grid-row: 3;
    grid-column: 1;
    align-self: center;
    justify-self: end;
    margin-left: $left-side-padding;
    align-items: center;
    left: 0px;
    gap: 0px 20px;
  }
  .title {
    grid-row: 2;
    grid-column: 1;
    font-size: 1.75rem;
    align-self: baseline;
    justify-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0;
  }
  .subtitle {
    margin-left: $left-side-padding;
    margin-top: 5px;
    margin-bottom: 0;
    align-self: end;
    grid-row: 2;
    grid-column: 1;
    font-size: 1.25rem;
    justify-self: center;
    text-align: center;
    margin: 0;
    max-width: 250px;
  }
  .home-wrapper {
    justify-self: center;
    align-self: center;
    grid-template-columns: unset;
    width: 85%;
    grid-template-rows: 150px 150px 100px;
  }
  .social-link img {
    width: 32.5px;
  }
  .social-link {
    grid-column: 2/3;
    cursor: pointer;
  }
  .resume-button > button {
    font-size: small;
    width: 80px;
    height: 42.5px;
    font-size: medium;
    margin: 0 15px 0 15px;
    cursor: pointer;
  }
  .resume-button {
    grid-column: 1 / 2;
    grid-row: 3 / 3;
    align-self: center;
    justify-self: start;
    margin: 0;
  }
  .memoji {
    margin: 0;
    width: 120px;
    align-self: start;
    justify-self: center;
  }
}
</style>
