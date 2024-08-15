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
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 37.5% 37.5% 25%;
  display: grid;
}
.socials {
  display: flex;
  grid-row: 3;
  grid-column: 1;
  justify-self: center;
  align-self: center;
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
  align-self: center;
  justify-self: center;
  font-size: 2rem;
  font-family: Roboto Slab Roboto Mono monospace;
  p {
    margin: 0;
  }
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
@media screen and (max-width: $small-screen-width) {
  .social-icon {
    width: 3rem;
  }
  .socials {
    width: 50%;
  }
  .logo {
    img:first-child {
      width: 12.5rem;
      margin: -42.5px;
    }
    img:last-child {
      width: 6.25rem;
      right: 10%;
    }
  }
  .tag {
    font-size: 1.75rem;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .tag {
    // display: none;
    font-size: 1.25rem;
    grid-column: 1/4;
  }
  .logo {
    img:first-child {
      width: 10rem;
      margin: -30px;
    }
    img:last-child {
      width: 4rem;
      right: 10%;
    }
  }
  .socials {
    grid-column: 1/4;
    width: 50%;
    justify-self: start;
    width: 60%;
    align-self: start;
    justify-content: space-around;
    grid-column: 1 / 4;
    justify-self: center;
  }
  .social-icon {
    width: 2rem;
  }
  .credit {
    grid-column: 1/4;
    font-size: 1.25rem;
    align-self: end;
    margin: 5px;
  }
}
</style>
