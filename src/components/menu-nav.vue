<template>
  <nav class="menu">
    <RouterLink
      @click="$emit('routeClicked')"
      class="menu-link"
      :to="props.routes[0]"
      >Home</RouterLink
    >
    <RouterLink
      @click="$emit('routeClicked')"
      class="menu-link"
      :to="props.routes[1]"
      >About Me</RouterLink
    >
    <RouterLink
      @click="$emit('routeClicked')"
      class="menu-link"
      :to="props.routes[2]"
      >Projects</RouterLink
    >
    <RouterLink
      @click="$emit('routeClicked')"
      class="menu-link"
      :to="props.routes[3]"
      >Contact Me</RouterLink
    >
    <a
      @click="$emit('routeClicked')"
      class="menu-link"
      :href="props.routes[4]"
      target="_blank"
    >
      Resume</a
    >
    <FooterBar class="footer" :nav="true"></FooterBar>
  </nav>
</template>
<script setup>
import FooterBar from "./footer-bar.vue";
const props = defineProps(["routes"]);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.menu {
  background-color: $quaternary-color-transparent;
  flex-flow: column nowrap;
  position: absolute;
  height: fit-content;
  width: 250px;
  right: 0px;
  top: 25px;
  padding: 5% 2.5%;
  margin-right: 2.5vw;
  justify-content: start;
  display: flex;
  cursor: pointer;
  box-shadow: 5px 10px 10px grey;
}
.menu-link {
  display: block;
  margin: 15px 0;
  color: $secondary-color;
  font-family: $vs-code-font;
  font-size: $sub-text-size;
  font-weight: bold;
  text-decoration: none;
}
.menu-link:hover {
  color: $highlight-color;
  // font-size: $text-size + 0.1rem;
}
@media screen and (max-width: $laptop-screen-width) {
  .menu {
    width: 225px;
    top: 15px;
  }
  .menu-link {
    font-size: $sub-text-size-laptop-screen;
  }
}
@media screen and (max-width: $small-screen-width) {
  .menu {
    width: 200px;
  }
  .menu-link {
    font-size: $sub-text-size-small-screen;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .menu {
    padding: 20px 20px;
    width: 150px;
    margin-right: 5vw;
    justify-content: end;
    top: 15px;
  }
  .menu-link {
    font-size: $sub-text-size-phone-screen;
  }
  .footer {
    justify-content: space-evenly;
    width: 90%;
    gap: 10px;
  }
}
</style>
