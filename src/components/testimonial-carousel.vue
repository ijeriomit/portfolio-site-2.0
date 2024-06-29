<template>
  <div>
    <div class="slideshow-container">
      <!-- Full-width images with number and caption text -->
      <div
        v-for="(slide, index) in slideShow"
        :key="index"
        v-show="slide.show"
        :style="{
          width: photoWidth + sizeType,
          height: photoHeight + sizeType,
        }"
        class="fade"
      >
        <img :src="slide.image" style="width: 100%" />
        <div class="text">{{ slide.text }}</div>
      </div>

      <!-- Next and previous buttons -->
      <a class="prev" @click="slideLeft()">&#10094;</a>
      <a class="next" @click="slideRight()">&#10095;</a>
    </div>
    <br />

    <!-- The dots/circles -->
    <div style="text-align: center">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="dot"
        @click="setSlide(index)"
      ></span>
    </div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
const currentSlideIndex = ref(0);
const slideShow = ref([]);
const props = defineProps([
  "slides",
  "descriptions",
  "photoHeight",
  "photoWidth",
  "sizeType",
]);
function slideRight() {
  setSlide(currentSlideIndex.value++);
}
function slideLeft() {
  setSlide(currentSlideIndex.value--);
}
function setSlide(slideIndex) {
  if (slideIndex >= slideShow.value.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slideShow.value.length - 1;
  }

  slideShow.value[currentSlideIndex.value].show = false;
  slideShow.value[slideIndex].show = true;
  currentSlideIndex.value = slideIndex;
}
function createSlideShowObject() {
  let defaultDescription = "";
  let description = defaultDescription;
  for (let i = 0; i < props.slides.length; i++) {
    if (props.descriptions.length > i) {
      description = props.descriptions[i];
    } else {
      description = defaultDescription;
    }
    slideShow.value.push({
      image: props.slides[i],
      text: description,
      show: false,
    });
  }
  this.slideShow[currentSlideIndex.value].show = true;
}
onBeforeMount(() => {
  createSlideShowObject();
});
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
