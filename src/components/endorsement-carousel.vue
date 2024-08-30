<template>
  <div class="endorsement-wrapper">
    <h2>Endorsements</h2>
    <Carousel
      class="endorsements"
      @mouseenter="autoplaySpeed = 0"
      @mouseleave="autoplaySpeed = defaultAutoPlaySpeed"
      :autoplay="autoplaySpeed"
      :items-to-show="slidesToShow"
      :wrap-around="true"
    >
      <Slide v-for="(slide, index) of slides" :key="index">
        <div class="carousel__item endorsement">
          <div class="endorsement-heading">
            <img
              class="profile-photo"
              color="white"
              src="@/assets/about-me-images/profile-icon.png"
            />
            <div class="person">
              <h3 class="name">{{ slide.name }}</h3>
              <h4 class="title">{{ slide.title }}</h4>
            </div>
          </div>
          <p class="text">
            {{ slide.text }}
          </p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { store } from "@/data.js";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const slidesToShow = ref(3);
const slides = ref(store.endorsements);
const defaultAutoPlaySpeed = ref(7500);
const autoplaySpeed = ref(defaultAutoPlaySpeed.value);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$endorsement-width: 400px;
$endorsement-height: 400px;
$endorsements-gap: 50px;
$endorsement-padding: 50px;
$endorsements-width: calc(
  $endorsement-width * 3 + ($endorsements-gap * 2) + ($endorsement-padding * 6)
);
h2 {
  font-family: $heading-font;
}
.carousel__slide {
  padding: 10px;
}

.endorsement-wrapper {
  display: flex;
  flex-flow: column nowrap;
}
.endorsement-wrapper h2 {
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.endorsements {
  width: $endorsements-width;
  align-self: center;
}
.endorsement {
  padding: $endorsement-padding;
  padding-top: calc($endorsement-padding - 20px);
  color: $quaternary-color;
  background-color: $secondary-color;
  width: $endorsement-width;
  height: $endorsement-height;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  transition: all 1s ease-in-out;
}
.carousel__slide--active .endorsement {
  background-color: $quaternary-color;
  color: $secondary-color;

  height: calc($endorsement-height + 25px);
  .endorsement-heading {
    font-weight: bold;
  }
  .name {
    color: $highlight-color;
  }
  .title {
    color: $secondary-color;
  }
}
.endorsement-heading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  font-family: $text-font;
}
.profile-photo {
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.text {
  width: 100%;
  height: 200px;
  overflow: hidden;
  font-family: $text-font;
  text-align: left;
  // color: white;
  font-size: $small-text-size;
}
.person {
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  justify-content: center;
  margin: 0 20px;
  .name {
    font-size: $text-size;
    margin: 1.5rem 0 0 0;
  }
  .title {
    font-size: 1.25rem;
    margin: 0.75rem 0;
  }
}
@media screen and (max-width: $small-screen-width) {
  .endorsement {
    width: calc($endorsement-width - 25px);
  }
  .endorsements {
    $endorsements-width: calc(
      ($endorsement-width - 25px) * 3 + ($endorsements-gap * 2) +
        ($endorsement-padding * 6)
    );
  }
  .endorsements {
    height: 500px;
    justify-self: center;
    grid-column: 1/3;
    grid-row: 3/4;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .carousel__slide--active .endorsement {
    width: 85vw;
    text-align: left;
    height: 375px;
    padding: calc($endorsement-padding/1.25);
  }
  .endorsement {
    background-color: $primary-color;
    padding: calc($endorsement-padding/1.25);
    width: 85vw;
    height: 375px;
  }

  .profile-photo {
    width: 80px;
    height: 80px;
  }
  .endorsement-wrapper h2 {
    font-size: 1.75rem;
    margin: 10px 0;
  }
  .name {
    font-size: 1.5rem;
  }
  .title {
    text-align: center;
  }
  .text {
    font-size: 1.25rem;
    text-align: center;
    height: 175px;
  }
  .person {
    align-items: center;
  }
  .endorsements {
    height: 375px;
  }
}
</style>
