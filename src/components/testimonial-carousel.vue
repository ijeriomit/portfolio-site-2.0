<template>
  <div class="testimonial-section">
    <h2>Testimonials</h2>
    <Carousel
      class="testimonials"
      @mouseenter="autoplay = 0"
      @mouseleave="autoplay = 5000"
      :autoplay="autoplay"
      :items-to-show="3"
      :wrap-around="true"
    >
      <Slide v-for="(slide, index) of slides" :key="index">
        <div class="carousel__item testimonial">
          <div class="testimonial-heading">
            <div class="profile-photo"></div>
            <h3 class="name">{{ slide.name }}</h3>
          </div>
          <p>
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
const autoplay = ref(5000);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$testimonial-width: 425px;
$testimonial-height: 400px;
$testimonials-gap: 50px;
$testimonial-padding: 50px;
$testimonials-width: calc(
  $testimonial-width * 3 + ($testimonials-gap * 2) + ($testimonial-padding * 6)
);

.carousel__slide {
  padding: 10px;
}

.testimonial-section {
  display: flex;
  flex-flow: column nowrap;
}
.testimonial-section h2 {
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
  gap: 20px;
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
</style>
