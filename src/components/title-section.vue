<template>
  <section>
    <div class="title-section-background"></div>
    <img src="@/assets/white-matrix-background.png" />
    <slot></slot>
  </section>
</template>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

.title-section-background {
  z-index: 1;
  height: inherit;
  background-color: $primary-color;
  width: 100%;
  opacity: 40%;
  grid-column: 1;
  grid-row: 1;
}

.title-section img {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 100%;
  height: inherit;
  opacity: 45%;
  position: relative;
}
@media screen and (max-width: $phone-screen-width) {
  .title-section {
    max-height: 500px;
    height: 100%;
  }
  .title-section-background {
    height: 100%;
  }
  .matrix-background {
    height: 100%;
  }
}
</style>
