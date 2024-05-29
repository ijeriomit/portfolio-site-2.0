<template>
  <header class="header-wrapper">
    <a class="logo" href="#HOME">
      <img src="@/assets/clip-art-images/ijeri-logo.png" />
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
  width: 150px;
  order: 1;
  align-self: center;
  cursor: pointer;
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
@media screen and (max-width: $phone-screen-width) {
  .hamburger-menu {
    padding: 0px;
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
