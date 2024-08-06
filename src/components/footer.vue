<template>
  <div class="footer-wrapper">
    <div class="socials">
      <a style="margin-left: 0px" class="social-icon"
        ><img :src="linkedin"
      /></a>
      <a class="social-icon"><img :src="github" /></a>
      <a class="social-icon"><img :src="medium" /></a>
    </div>
    <div class="credit">
      <p>Developed and Designed <b /> by <b /> Ijeri Omitogun</p>
    </div>
  </div>
</template>
<script>
import mediumIcon from "@/assets/link-images/medium.png";
import githubIcon from "@/assets/link-images/github.svg";
import linkedinIcon from "@/assets/link-images/linkedin.svg";
export default {
  name: "footer-section",
  data: function () {
    return {
      github: githubIcon,
      medium: mediumIcon,
      linkedin: linkedinIcon,
    };
  },
};
</script>
<style lang="scss" scoped>
.footer-wrapper {
  background-color: #008753;
  opacity: 63%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.socials {
  display: flex;
  margin-right: 2rem;
}
.credit {
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: fit-content;
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
</style>
