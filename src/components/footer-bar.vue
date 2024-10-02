<template>
  <footer :class="{ 'footer-nav': props.nav }">
    <a
      :class="{ 'white-filter': props.nav }"
      class="social-link"
      href="https://www.linkedin.com/in/ijeri-omitogun/"
      target="_blank"
    >
      <img src="@/assets/link-images/linkedin.svg" />
    </a>
    <a
      :class="{ 'white-filter': props.nav }"
      class="social-link"
      href="https://github.com/ijeriomit"
      target="_blank"
    >
      <img src="@/assets/link-images/github.svg" />
    </a>
    <a
      :class="{ 'white-filter': props.nav }"
      class="social-link"
      href="https://medium.com/@jeri-omit"
      target="_blank"
    >
      <img src="@/assets/link-images/medium.svg" />
    </a>
  </footer>
</template>
<script setup>
const props = defineProps(["nav"]);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
footer {
  display: flex;
  flex-flow: row nowrap;
  justify-self: center;
  height: fit-content;
  width: fit-content;
  gap: 40px;
}
.footer-nav {
  padding-top: 20%;
  align-self: center;
}
.social-link {
  cursor: pointer;
  max-width: fit-content;
}
.social-link img {
  // width: 20%;
  width: $footer-icon-width;
}
.white-filter img {
  filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(77deg) brightness(109%)
    contrast(101%);
  width: calc($footer-icon-width/2);
}

.social-link > img:hover {
  // width: 25%;
  width: $footer-icon-width + 5px;
}
.white-filter > img:hover {
  width: calc($footer-icon-width/2) + 5px;
  // filter: invert(79%) sepia(29%) saturate(6647%) hue-rotate(105deg)
  //   brightness(96%) contrast(84%);
}
.credit {
  align-self: end;
}
@media screen and (max-width: $laptop-screen-width) {
  .social-link > img {
    width: $footer-icon-width-laptop-screen;
  }
  .white-filter > img {
    width: 25px;
  }
  .footer-nav {
    padding-top: 10%;
  }
}
@media screen and (max-width: $small-screen-width) {
  .social-link > img {
    width: $footer-icon-width-small-screen;
  }
  .white-filter > img {
    width: 25px;
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
  .white-filter img {
    width: calc($footer-icon-width-phone-screen/1.5);
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
  .footer-nav {
    padding-top: 20%;
  }
  footer {
    gap: 5px;
  }
}
</style>
