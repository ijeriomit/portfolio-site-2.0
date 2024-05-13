<template>
  <div class="nav-wrapper">
    <a aria-label="home-tab" role="tab" href="#HOME"> .home() </a>
    <a href="#ABOUT-ME"> .aboutMe()</a>
    <a href="#WORK-EXPERIENCE"> .workExperience()</a>
    <a href="#PROJECTS"> .projects()</a>
    <a href="#CONTACT-ME"> .contactMe()</a>
  </div>
</template>
<script>
export default {
  name: "nav-bar",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
.nav-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  font-size: $medium-text-size;
}
a {
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: fit-content;
  color: $light-text-color;
  text-decoration: none;
  transition: color 0.4s ease-out;
  line-height: 1;
}
a:hover {
  color: $dark-text-color;
  font-weight: bolder;
  border-bottom: 1px solid $dark-text-color;
  // text-decoration: underline;
}
</style>
