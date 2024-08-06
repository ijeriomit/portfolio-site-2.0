<template>
  <nav class="menu">
    <RouterLink class="menu-link" :to="props.routes[0]">About Me</RouterLink>
    <RouterLink class="menu-link" :to="props.routes[1]">Projects</RouterLink>
    <RouterLink class="menu-link" :to="props.routes[2]">Contact</RouterLink>
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
  height: 200px;
  width: 125px;
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
  margin: 10px 0;
  color: $quaternary-color;
  font-family: $vs-code-font;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
.menu-link:hover {
  color: $secondary-color;
  font-size: larger;
}
@media screen and (max-width: $phone-screen-width) {
  .menu {
    padding: 20px 20px;
    width: 20vw;
    margin-right: 5vw;
  }
  a {
    font-size: medium;
  }
}
</style>
