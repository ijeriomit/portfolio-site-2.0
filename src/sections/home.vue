<template>
  <div class="home-wrapper">
    <span class="line">
      <div class="intro">
        <span class="hi">Hi, my name is,</span>
        <span class="name"> Ijeri Omitogun </span>
      </div>
      <img
        class="avatar"
        src="@/assets/clip-art-images/avatar-background.svg"
        alt="cartoon avater"
      />
    </span>
    <span class="description">
      Software Engineer with Robotics Experience and a Passion For Web
      Development
    </span>
  </div>
</template>
<script>
export default {
  name: "home-section",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
.home-wrapper {
  width: 90%;
  height: 75%;
  align-items: center;
  padding-top: 5rem;
}
.avatar {
  width: 20rem;
  order: 1;
  position: relative;
}

.intro {
  order: 2;
  font-size: 3rem;
  word-break: break-word;
  line-height: 1.2;
  font-weight: bold;
  display: flex;
  flex-flow: column nowrap;
  text-justify: right;
  width: 50%;
}

.hi {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: $secondary-color;
  order: 1;
  font-family: $vs-code-font;
}
.name {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: $dark-text-color;
  order: 2;
}
.line {
  display: flex;
  flex-flow: row wrap;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.description {
  @extend .line;
  color: $dark-text-color;
  font-size: 2.5rem;
  word-break: break-word;
  font-weight: bold;
}

@media screen and (max-width: $small-screen-width) {
  .avatar {
    width: 12.5rem;
  }
  .line {
    // text-align: center;
    flex-flow: column nowrap;
    width: 100%;
  }
  .intro {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }
  .description {
    text-align: center;
    font-size: 1.75rem;
    width: 100%;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .line {
    flex-flow: column nowrap;
    width: 100%;
  }
  .intro {
    font-size: 1.75rem;
    text-align: center;
    width: 100%;
  }
  .description {
    text-align: center;
    font-size: 1.5rem;
    width: 100%;
  }
  .avatar {
    width: 10.5rem;
  }
}
</style>
