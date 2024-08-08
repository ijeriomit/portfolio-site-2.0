<template>
  <div class="wrapper">
    <div class="logo">
      <img src="@/assets/clip-art-images/ijeri-logo-icon-mono.svg" />
      <img src="@/assets/clip-art-images/ijeri-logo-text.png" />
    </div>
    <p class="tag">Living, learning, and leveling up<br />one day at a time.</p>
    <div class="socials">
      <a style="margin-left: 0px" class="social-icon"
        ><img src="@/assets/link-images/linkedin.svg" />
      </a>
      <a class="social-icon"><img src="@/assets/link-images/github.svg" /></a>
      <a class="social-icon"><img src="@/assets/link-images/medium.png" /></a>
    </div>
    <div class="credit">
      <p>@ Ijeri Omitogun 2024</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer-section",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.wrapper {
  background-color: $light-primary-color;
  // background-color: $primary-color;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 150px 150px 100px;
  display: grid;
}
.socials {
  display: flex;
  grid-row: 3;
  grid-column: 1;
  justify-self: center;
  align-self: start;
}
.social-icon {
  width: 3.5rem;
}
.credit {
  grid-row: 3;
  grid-column: 3;
  align-self: start;
  justify-self: center;
  font-size: 2rem;
  font-family: Roboto Slab Roboto Mono monospace;
}
.tag {
  grid-row: 2;
  grid-column: 2;
  text-align: center;
  align-self: center;
  justify-self: center;
  font-size: 2rem;
}
a {
  width: 2.75rem;
  height: 2.75rem;
  // background-color: white;
  display: block;
  margin-left: 60px;
}
.footer-wrapper > div {
  text-align: center;
  align-self: center;
}
.logo {
  align-self: end;
  justify-self: center;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  img:first-child {
    width: 15rem;
    margin: -50px;
  }
  img:last-child {
    width: 7.5rem;
    right: 10%;
  }
}
</style>
