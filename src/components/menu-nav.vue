<template>
  <nav class="menu">
    <a aria-label="home-tab" role="tab" href="#HOME">Home</a>
    <a aria-label="about-me-tab" role="tab" href="#ABOUT-ME">About Me</a>
    <a aria-label="projects-tab" role="tab" href="#PROJECTS">Projects</a>
    <a aria-label="contact-me-tab" role="tab" href="#CONTACT-ME">Contact Me</a>
  </nav>
</template>
<script setup></script>
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
a {
  display: block;
  margin: 10px 0;
  color: $quaternary-color;
  font-family: $vs-code-font;
  font-size: large;
  font-weight: bold;
  text-decoration: none;
}
a:hover {
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
