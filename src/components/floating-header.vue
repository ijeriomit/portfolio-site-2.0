<template>
  <header class="header-wrapper">
    <RouterLink class="logo" :to="routes[0]">
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
    <menu-nav :routes="routes" v-show="menuOpen" ref="menu"></menu-nav>
  </header>
</template>
<script setup>
import MenuSvg from "./menu-svg.vue";
import MenuNav from "./menu-nav.vue";
import { routes } from "@/main.js";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

const menuOpen = ref(false);
const menu = ref(null);
const toggle = ref(null);

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

.header-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100px;
  justify-content: space-between;
}
.logo {
  order: 1;
  align-self: center;
  cursor: pointer;
  margin-left: 2.5vw;
  img:first-child {
    margin: -15px;
  }
}
.hamburger-menu {
  order: 2;
  transform: scaleX(-1);
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  margin-right: 2.5vw;
}
.hamburger-menu > svg {
  width: 75px;
  height: 75px;
}
.close-menu {
  width: 25px;
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

@media screen and (max-width: $phone-screen-width) {
  .hamburger-menu {
    padding: 0px;
    width: 25px;
  }
  .logo-icon {
    width: 50px;
  }
  .logo-text {
    right: 10px;
    width: 50px;
  }
  .header-wrapper {
    justify-self: center;
  }
  .close-menu {
    transform: none;
    width: 20px;
    margin-left: 2.5vw;
  }
}
@media screen and (max-width: $small-screen-width) {
  .hamburger-menu {
    display: block;
  }
}
</style>
