<template>
  <div class="page">
    <div class="title-section-background"></div>
    <img
      class="matrix"
      src="@/assets/background-images/matrix-rain-white.gif"
    />
    <floating-header class="header"></floating-header>
    <div class="home-wrapper">
      <img
        class="memoji"
        src="@/assets/clip-art-images/memoji-wave.svg"
        alt="cartoon waving"
      />
      <h1 class="title">
        <div class="typewriter-animation">Hello, my name is</div>
        <div class="typewriter-animation-2">Ijeri Omitogun</div>
      </h1>
      <h2 class="subtitle">
        Software Engineer &#x20; &#x2022; &#x20;Code Fanatic<br />
        Problem Solver &#x20; &#x2022; &#x20;Team Player
      </h2>
      <nav class="nav-links">
        <RouterLink class="nav-link" :to="routes[1]">Learn About Me</RouterLink>
        <RouterLink class="nav-link" :to="routes[2]">See My Work</RouterLink>
        <RouterLink class="nav-link" :to="routes[3]"
          >Send Me a Message</RouterLink
        >
        <a class="nav-link" :href="resumeRoute" target="_blank"> Resume </a>
      </nav>
      <FooterBar class="footer"></FooterBar>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { routes, resumeRoute } from "@/main.js";
import FloatingHeader from "@/components/floating-header.vue";
import FooterBar from "@/components/footer-bar.vue";
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
  width: 100%;
  grid-column: 1;
  grid-row: 1;
  background-image: linear-gradient(
    rgba(29, 173, 118, 0.3),
    rgba(29, 173, 118, 0.15),
    rgba(29, 173, 118, 0)
  );
}
.matrix {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 120%;
  height: inherit;
  opacity: 15%;
  z-index: 2;
  position: relative;
}
.home-wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: $header-height;
  max-width: 70%;
  grid-template-rows: 200px 175px 150px 100px;
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
  font-size: $heading-text-size + 0.25rem;
  margin: 0 50px 0 50px;
  align-self: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50px 50px;
  justify-items: center;
  row-gap: 20px;
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
  font-size: $sub-heading-text-size;
  margin: 0 50px 0 50px;
  max-width: fit-content;
  justify-self: center;
  text-align: center;
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
  font-size: $text-size;
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
  border: none;
}
@media screen and (max-width: $laptop-screen-width) {
  .home-wrapper {
    grid-template-rows: 175px 150px 175px 100px;
  }
  .title {
    font-size: $heading-text-size-laptop-screen + 0.25rem;
  }
  .subtitle {
    font-size: $sub-heading-text-size-laptop-screen;
  }
  .home-wrapper {
    margin-top: $header-height-laptop-screen;
  }
}
@media screen and (max-width: $small-screen-width) {
  .home-wrapper {
    max-width: 100%;
    height: 70%;
    align-self: center;
    justify-self: center;
    grid-template-columns: 35% 65%;
    margin-top: 5%;
    grid-template-rows: 30% 30% 25% 20%;
  }
  .title {
    font-size: $heading-text-size-small-screen + 0.15rem;
  }
  .memoji {
    width: 250px;
    align-self: end;
  }
  .subtitle {
    font-size: $sub-heading-text-size-small-screen;
  }
  .footer {
    align-self: end;
  }
  .nav-links {
    height: 75px;
    align-self: end;
    .nav-link {
      font-size: $text-size-small-screen;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $left-side-padding: 20px;
  .page {
    overflow: hidden;
  }
  .title {
    grid-row: 2;
    grid-column: 1;
    font-size: $heading-text-size-phone-screen;
    align-self: end;
    row-gap: 5px;
    justify-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0;
  }
  .subtitle {
    align-self: center;
    grid-row: 3;
    grid-column: 1;
    font-size: $sub-heading-text-size-phone-screen;
    justify-self: center;
    text-align: center;
    margin: 0;
  }
  .home-wrapper {
    justify-self: baseline;
    align-self: center;
    width: 100vw;
    height: 80%;
    margin-top: 0;
    grid-template-columns: 100vw;
    grid-template-rows: 20vh 10vh 10vh 35vh 10vh;
  }
  .nav-links {
    align-self: end;
    flex-flow: column nowrap;
    width: 75vw;
    height: fit-content;
    grid-row: 4;
    .nav-link {
      font-size: $text-size-phone-screen;
      padding: 0px;
      max-width: unset;
      height: 65px;
      width: 90%;
      align-self: center;
      display: flex;
      align-items: center;
      border-right: none;
      border-bottom: 5px solid #14d086;
      justify-content: center;
      text-align: center;
    }
    .nav-link:last-child {
      border: none;
    }
  }
  .footer {
    grid-row: 5;
    width: 70%;
    justify-content: space-evenly;
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
    width: 150px;
    align-self: start;
    justify-self: center;
  }
  .matrix {
    max-width: none;
    width: 900px;
  }
}
</style>
