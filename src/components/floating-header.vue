<template>
  <header>
    <RouterLink class="logo" :to="routes[0]">
      <!-- <img
        v-if="useDarkLogo"
        class="logo-icon-dark"
        src="@/assets/clip-art-images/ijeri-logo-icon-dark.png"
      /> -->
      <img
        class="logo-icon"
        src="@/assets/clip-art-images/ijeri-logo-icon.png"
      />
      <img
        class="logo-text"
        src="@/assets/clip-art-images/ijeri-logo-text.png"
      />
    </RouterLink>
    <button
      @click.prevent="toggleMenu"
      class="hamburger-menu"
      type="button"
      ref="toggle"
    >
      <menu-svg v-show="!menuOpen" :color="'#000000'"> </menu-svg>
      <img
        class="close-menu"
        src="@/assets/clip-art-images/close.svg"
        v-show="menuOpen"
      />
    </button>
    <menu-nav
      @routeClicked="menuOpen = false"
      :routes="routes"
      v-show="menuOpen"
      ref="menu"
    ></menu-nav>
  </header>
</template>
<script setup>
import MenuSvg from "./menu-svg.vue";
import MenuNav from "./menu-nav.vue";

import { routes } from "@/main.js";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const menuOpen = ref(false);
const menu = ref(null);
const toggle = ref(null);
const route = useRoute();
const useDarkLogo = ref(true);

watch(route, (newVal) => {
  if (newVal.path == routes[0].path) {
    useDarkLogo.value = true;
  } else {
    useDarkLogo.value = false;
  }
});
onMounted(() => {
  document.addEventListener("click", close);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", close);
});

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function close(event) {
  if (
    !menu.value.$el.contains(event.target) &&
    !toggle.value.contains(event.target)
  ) {
    menuOpen.value = false;
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: $header-height;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  width: 100vw;
}
.logo {
  order: 1;
  align-self: center;
  cursor: pointer;
  margin-left: 5vw;
  .logo-icon {
    margin: -15px;
    width: 90px;
  }
  .logo-text {
    width: 90px;
  }
  .logo-icon-dark {
    margin: -2px;
    width: 62.5px;
  }
}

.hamburger-menu {
  order: 2;
  transform: scaleX(-1);
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  z-index: 2000;
  position: relative;
  right: 2.5vw;
}
.hamburger-menu > svg {
  width: 75px;
  height: 75px;
}
.close-menu {
  width: 35px;
  padding: 5px;
}
.logo-spin {
  animation-name: spin;
  animation-duration: 750ms;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.1, 0.3, 0.8, 1);
  animation-timing-function: linear;
}
.logo-text-appear {
  animation-name: appear;
  animation-duration: 1.75s;
  animation-fill-mode: both;
}
.logo-text-disappear {
  animation-name: disappear;
  animation-duration: 1.75s;
  animation-fill-mode: both;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes disappear {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(-75px);
    display: none;
  }
}
@media screen and (max-width: $laptop-screen-width) {
  header {
    height: $header-height-laptop-screen;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .hamburger-menu > svg {
    padding: 0px;
    width: 50px;
  }
  .logo {
    margin-left: 7.5vw;
    width: 100px;
  }
  .logo .logo-icon {
    width: 75px;
  }
  .logo .logo-icon-dark {
    width: 50px;
  }
  .logo .logo-text {
    width: 70px;
  }
  header {
    justify-self: center;
    height: $header-height-phone-screen;
  }
  .close-menu {
    transform: none;
    width: 20px;
    margin-left: 2.5vw;
  }
  .page {
    grid-template-rows: 350px 1200px 1000px 1200px;
  }
  .title-section {
    height: 100%;
    img {
      max-height: 350px;
    }
  }
  .title-section-background {
    max-height: 350px;
  }
}
</style>
