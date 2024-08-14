<template>
  <div class="endorsement-wrapper">
    <h2>Endorsements</h2>
    <Carousel
      class="endorsements"
      @mouseenter="autoplaySpeed = 0"
      @mouseleave="autoplaySpeed = defaultAutoPlaySpeed"
      :autoplay="autoplaySpeed"
      :items-to-show="3"
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

const slides = ref(store.endorsements);
const defaultAutoPlaySpeed = ref(2500);
const autoplaySpeed = ref(defaultAutoPlaySpeed.value);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$endorsement-width: 400px;
$endorsement-height: 375px;
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
  border-radius: 15%;
  padding: $endorsement-padding;
  padding-top: calc($endorsement-padding - 20px);
  color: $quaternary-color;
  background-color: $secondary-color;
  width: $endorsement-width;
  height: $endorsement-height;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  box-shadow: 5px 10px 10px grey;
}
.carousel__slide--active .endorsement {
  background-color: $primary-color;
  height: calc($endorsement-height + 25px);
  .endorsement-heading {
    font-weight: bold;
  }
  .text {
    font-weight: 400;
  }
}
.endorsement-heading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  font-family: $heading-font;
}
.profile-photo {
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
.name {
  margin: 0 10px;
}
.text {
  width: 300px;
  height: 200px;
  overflow: hidden;
  font-family: $text-font;
  text-align: left;
  font-size: 1.5rem;
  // font-weight: bold;
}
.person {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  h3 {
    margin-top: 1.5rem;
  }
  h4 {
    font-size: 1.25rem;
    margin: 0.75rem 0;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .carousel__slide--active .endorsement {
    width: calc($endorsement-width/1.25);
    text-align: left;
    height: 325px;
    padding: calc($endorsement-padding/1.25);
  }
  .endorsement {
    background-color: $primary-color;
    padding: calc($endorsement-padding/1.25);
    width: calc($endorsement-width/1.25);
    height: 325px;
  }
  .profile-photo {
    width: 70px;
    height: 70px;
  }
  .endorsement-wrapper h2 {
    font-size: 1.5rem;
  }
  .name {
    font-size: 1.25rem;
  }
  .text {
    width: 250px;
    font-size: 1.1rem;
    height: 175px;
  }
}
</style>
