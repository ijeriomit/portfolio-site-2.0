<template>
  <footer>
    <a
      class="social-link"
      href="https://www.linkedin.com/in/ijeri-omitogun/"
      target="_blank"
    >
      <img src="@/assets/link-images/linkedin.svg" />
    </a>
    <a class="social-link" href="https://github.com/ijeriomit" target="_blank">
      <img src="@/assets/link-images/github.svg" />
    </a>
    <a class="social-link" href="https://medium.com/@jeri-omit" target="_blank">
      <img src="@/assets/link-images/medium.svg" />
    </a>
  </footer>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
footer {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 100%;
  // flex-flow: row nowrap;
  justify-self: center;
  height: fit-content;
  justify-items: center;
  column-gap: 30px;
}
.social-link {
  cursor: pointer;
  max-width: fit-content;
}
.social-link img {
  width: $footer-icon-width;
}
.social-link > img:hover {
  width: $footer-icon-width + 5px;
}
.credit {
  align-self: end;
}
@media screen and (max-width: $laptop-screen-width) {
  .social-link > img {
    width: $footer-icon-width-laptop-screen;
  }
}
@media screen and (max-width: $small-screen-width) {
  .social-link > img {
    width: $footer-icon-width-small-screen;
  }
  .socials {
    width: 50%;
  }
  .logo {
    img:first-child {
      width: 12.5rem;
      margin: -42.5px;
    }
    img:last-child {
      width: 6.25rem;
      right: 10%;
    }
  }
  .tag {
    font-size: 1.75rem;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .tag {
    font-size: 1.25rem;
    align-self: start;
    grid-column: 1/4;
  }
  .logo {
    img:first-child {
      width: 10rem;
      margin: -30px;
    }
    img:last-child {
      width: 4rem;
      right: 10%;
    }
  }
  .socials {
    grid-column: 1/4;
    width: 50%;
    justify-self: start;
    width: 60%;
    align-self: start;
    justify-content: space-around;
    grid-column: 1 / 4;
    justify-self: center;
  }
  .social-link > img {
    width: $footer-icon-width-phone-screen;
  }
  .credit {
    grid-column: 1/4;
    font-size: 1.25rem;
    align-self: end;
    margin: 5px;
  }
  .wrapper {
    grid-template-rows: 35% 30% 30%;
  }
}
</style>
