<template>
  <div class="testimonial-wrapper">
    <h2>Testimonials</h2>
    <Carousel
      class="testimonials"
      @mouseenter="autoplaySpeed = 0"
      @mouseleave="autoplaySpeed = defaultAutoPlaySpeed"
      :autoplay="autoplaySpeed"
      :items-to-show="3"
      :wrap-around="true"
    >
      <Slide v-for="(slide, index) of slides" :key="index">
        <div class="carousel__item testimonial">
          <div class="testimonial-heading">
            <div class="profile-photo"></div>
            <h3 class="name">{{ slide.name }}</h3>
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

const slides = ref(store.testimonials);
const defaultAutoPlaySpeed = ref(2500);
const autoplaySpeed = ref(defaultAutoPlaySpeed.value);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$testimonial-width: 400px;
$testimonial-height: 375px;
$testimonials-gap: 50px;
$testimonial-padding: 50px;
$testimonials-width: calc(
  $testimonial-width * 3 + ($testimonials-gap * 2) + ($testimonial-padding * 6)
);

.carousel__slide {
  padding: 10px;
}

.testimonial-wrapper {
  display: flex;
  flex-flow: column nowrap;
}
.testimonial-wrapper h2 {
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
}
.testimonials {
  width: $testimonials-width;
  align-self: center;
}
.testimonial {
  border-radius: 15%;
  padding: $testimonial-padding;
  padding-top: calc($testimonial-padding - 20px);
  color: $quaternary-color;
  background-color: $secondary-color;
  width: $testimonial-width;
  height: $testimonial-height;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  box-shadow: 5px 10px 10px grey;
}
.carousel__slide--active .testimonial {
  background-color: $primary-color;
  height: calc($testimonial-height + 25px);
  font-weight: bold;
}
.testimonial-heading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
}
.profile-photo {
  background-color: gray;
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
}
@media screen and (max-width: $phone-screen-width) {
  .carousel__slide--active .testimonial {
    width: calc($testimonial-width/1.25);
    text-align: left;
    height: 325px;
    padding: calc($testimonial-padding/1.25);
  }
  .testimonial {
    background-color: $primary-color;
    padding: calc($testimonial-padding/1.25);
    width: calc($testimonial-width/1.25);
    height: 325px;
  }
  .profile-photo {
    width: 70px;
    height: 70px;
  }
  .testimonial-wrapper h2 {
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
