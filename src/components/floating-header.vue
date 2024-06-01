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
    <button class="hamburger-menu" type="button">
      <menu-svg :color="'#000000'"> </menu-svg>
    </button>
  </header>
</template>
<script>
import MenuSvg from "./menu-svg.vue";
export default {
  name: "floating-header",
  components: {
    "menu-svg": MenuSvg,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.header-wrapper {
  width: 90%;
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
}
.logo-icon {
  // margin: -15px;
  align-self: center;
  width: 75px;
  left: 15px;
  position: relative;
}
.logo-text {
  align-self: center;
  width: 75px;
  margin-bottom: -7px;
}
.hamburger-menu {
  order: 2;
  transform: scaleX(-1);
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
}
.hamburger-menu > svg {
  width: 50px;
  height: 50px;
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
  }
}

@media screen and (max-width: $phone-screen-width) {
  .hamburger-menu {
    padding: 0px;
  }
  .logo-icon {
    width: 50px;
  }
  .logo-text {
    width: 50px;
  }
}
@media screen and (max-width: $small-screen-width) {
  .hamburger-menu {
    display: block;
  }
  .header-wrapper {
    justify-content: space-between;
  }
}
</style>
