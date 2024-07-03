<template>
  <header class="header-wrapper">
    <a class="logo" href="#HOME">
      <img
        class="logo-icon logo-spin"
        src="@/assets/clip-art-images/ijeri-logo-icon.png"
      />
      <img
        class="logo-text logo-text-disappear"
        src="@/assets/clip-art-images/ijeri-logo-text.png"
      />
    </a>
    <button @click="toggleMenu()" class="hamburger-menu" type="button">
      <menu-svg v-if="!menuOpen" :color="'#000000'"> </menu-svg>
      <img
        class="close-menu"
        src="@/assets/clip-art-images/close.svg"
        v-if="menuOpen"
      />
    </button>
    <menu-nav v-if="menuOpen"></menu-nav>
  </header>
</template>
<script>
import MenuSvg from "./menu-svg.vue";
import MenuNav from "./menu-nav.vue";

export default {
  name: "floating-header",
  components: {
    "menu-svg": MenuSvg,
    "menu-nav": MenuNav,
  },
  data: function () {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu: function () {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.header-wrapper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.logo {
  display: inline-flex;
  order: 1;
  align-self: center;
  cursor: pointer;
  margin-left: 2.5vw;
}
.logo-icon {
  // margin: -15px;
  align-self: center;
  width: 75px;
}
.logo-text {
  position: relative;
  align-self: center;
  width: 75px;
  right: 15px;
  margin-bottom: -7px;
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
  width: 50px;
  height: 50px;
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
    width: 95%;
    justify-self: center;
  }
}
@media screen and (max-width: $small-screen-width) {
  .hamburger-menu {
    display: block;
  }
}
</style>
