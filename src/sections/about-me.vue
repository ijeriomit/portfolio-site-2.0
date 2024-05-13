<template>
  <div class="about-me-wrapper">
    <section-title>
      <template v-slot:section-title-content>
        <div class="section-title-title">AboutMe:</div>
        <div class="section-title-keyword-1">function()</div>
        <div class="section-title-line"></div>
        <div class="section-title-arrow"></div>
      </template>
    </section-title>
    <div class="content-section">
      <div class="text-boxes">
        <text-box class="desc-content">
          <template v-slot:text-slot>
            <div class="text lorem-ipsum-1"></div>
          </template>
        </text-box>
        <text-box class="skills-content">
          <template v-slot:text-slot>
            Recent Technologies: Javascript Python Java C# Vue ROS
          </template>
        </text-box>
      </div>
      <layered-frame
        :borderColor="'#4F3E3E'"
        :backgroundColor="'rgb(196, 196, 153)'"
        :horizontalOffset="2.5"
        :verticalOffset="3"
        :imageSrc="image"
        class="image-frame"
      ></layered-frame>
    </div>
  </div>
</template>
<script>
import layeredImageFrame from "@/components/layered-image-frame";
import sectionTitle from "@/components/section-title.vue";
import textBox from "@/components/text-box.vue";

import image from "@/assets/about-me-images/ij-floatin.png";
export default {
  name: "About-Me",
  data: function () {
    return {
      image: image,
    };
  },
  components: {
    "layered-frame": layeredImageFrame,
    "section-title": sectionTitle,
    "text-box": textBox,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$image-height: 31rem;
$image-width: 25rem;
$phone-image-width: 13rem;
$phone-image-height: 15rem;

.about-me-wrapper {
  width: 97.25%;
  height: 90%;
  margin-top: 3rem;
  font-family: $vs-code-font;
}

.content-section {
  display: flex;
  flex-flow: row wrap;
  height: 85%;
  align-items: flex-start;
  justify-content: space-around;
}
.desc-content {
  width: 30rem;
  height: 30rem;
  color: $dark-text-color;
  background-color: $primary-color;
  order: 0;
}
.text-boxes {
  display: flex;
  flex-flow: row wrap;
  width: 65%;
  justify-content: space-around;
}
.skills-content {
  width: 20rem;
  height: 12.5rem;
  color: $dark-text-color;
  order: 1;
}
.image-frame {
  order: 2;
  width: $image-width;
  height: $image-height;
}
@media screen and (max-width: $small-screen-width) {
  .content-section {
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }
  .text-content {
    width: 100%;
    max-height: 45%;
    overflow: scroll;
    word-break: break-word;
    text-align: center;
    margin-top: 0;
    font-size: $phone-text-size;
    order: 1;
  }
  .image-frame {
    align-self: center;
    width: $phone-image-width + 1rem;
    order: 0;
    height: $phone-image-height + 1rem;
  }
  .image-box {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: $phone-screen-width) {
}
</style>
