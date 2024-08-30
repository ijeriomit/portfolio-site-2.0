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
  </nav>
</template>
<script setup>
const props = defineProps(["routes"]);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.menu {
  background-color: $primary-color;
  flex-flow: column nowrap;
  position: absolute;
  height: 300px;
  width: 250px;
  right: 0px;
  top: 25px;
  padding: 35px;
  margin-right: 2.5vw;
  justify-content: center;
  display: flex;
  cursor: pointer;
  box-shadow: 5px 10px 10px grey;
}
.menu-link {
  display: block;
  margin: 15px 0;
  color: $quaternary-color;
  font-family: $vs-code-font;
  font-size: $text-size;
  font-weight: bold;
  text-decoration: none;
}
.menu-link:hover {
  color: $secondary-color;
  font-size: 1.6rem;
}
@media screen and (max-width: $small-screen-width) {
  .menu {
    width: 200px;
  }
  .menu-link {
    // font-size: 1.5rem;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .menu {
    padding: 20px 20px;
    width: 150px;
    margin-right: 5vw;
  }
  .menu-link {
    font-size: 1.25rem;
  }
  a {
    font-size: medium;
  }
}
</style>
