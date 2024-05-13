<template>
  <div class="header-wrapper">
    <div class="title-section">
      <a class="logo" href="#HOME">
        <img style="height: 100%; width: 100%" :src="logo" />
      </a>
      <div class="title">IO</div>
    </div>

    <div class="nav-section">
      <nav-bar />
    </div>

    <font-awesome class="hamburger-menu" :icon="['fa', 'bars']"></font-awesome>
  </div>
</template>
<script>
import NavBar from "@/components/nav-bar.vue";
import logo from "@/assets/clip-art-images/logo.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "floating-header",
  components: {
    "nav-bar": NavBar,
    "font-awesome": FontAwesomeIcon,
  },
  created: function () {
    library.add(faBars);
  },
  data: function () {
    return {
      logo: logo,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
.header-wrapper {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 15px 20px rgba(25, 25, 25, 0.1);
  font-family: $vs-code-font;
}

.title-section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  order: 1;
  // right: 5%;
  position: relative;
  left: 10vw;
}
.nav-section {
  order: 2;
  position: relative;
  right: 10vw;
}

.logo {
  width: 2.75rem;
  height: 2.75rem;
  order: 1;
  align-self: center;
}
.title {
  order: 2;
  font-family: $text-font;
  color: $light-text-color;
  align-self: center;
  font-weight: bold;
  position: relative;
  left: 2.5rem;
  font-size: $large-text-size;
}
.hamburger-menu {
  display: none;
  order: 3;
  font-size: 2.5rem;
  margin-right: 10%;
  color: $secondary-color;
}
@media screen and (max-width: $small-screen-width) {
  .hamburger-menu {
    display: block;
  }
  .title {
    display: none;
  }
  .nav-section {
    display: none;
  }
  .header-wrapper {
    justify-content: space-between;
  }
}
</style>
