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
              :src="
                slide.imageSrc ||
                require('@/assets/about-me-images/profile-icon.png')
              "
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
import { ref, onMounted } from "vue";
import { store } from "@/data.js";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const slidesToShow = ref(3);
onMounted(() => {
  if (window.innerWidth < 800) {
    slidesToShow.value = 1;
  }
});
const slides = ref(store.endorsements);
const defaultAutoPlaySpeed = ref(0);
const autoplaySpeed = ref(defaultAutoPlaySpeed.value);
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
$endorsement-width: 450px;
$endorsement-height: 450px;
$endorsements-gap: 25px;
$endorsement-padding: 50px;
$endorsements-width: calc(
  $endorsement-width * 3 + ($endorsements-gap * 2) + ($endorsement-padding * 6)
);
h2 {
  font-family: $heading-font;
  font-size: $sub-heading-text-size;
}
.carousel__slide {
  padding: 10px;
}

.endorsement-wrapper {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.endorsement-wrapper h2 {
  align-self: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: $sub-heading-text-size;
}
.endorsements {
  width: $endorsements-width;
  align-self: center;
  justify-self: center;
}
.endorsement {
  padding: $endorsement-padding;
  padding-top: calc($endorsement-padding - 20px);
  color: $quaternary-color;
  background-color: $secondary-color;
  width: $endorsement-width;
  height: $endorsement-height;
  font-size: $text-size;
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  transition: all 1s ease-in-out;
}
.carousel__slide--active .endorsement {
  background-color: $quaternary-color-transparent;
  color: $secondary-color;

  height: calc($endorsement-height + 10px);
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
  gap: 2%;
  font-family: $text-font;
  max-width: 100%;
  max-height: 30%;
}
.profile-photo {
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
}

.text {
  width: 100%;
  max-height: 250px;
  overflow: hidden;
  font-family: $text-font;
  text-align: left;
  font-size: $sub-text-size;
}
.person {
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  justify-content: space-around;
  height: 80%;
  margin: 0 20px;
  .name {
    font-size: $text-size;
    margin: 0;
  }
  .title {
    // width: 175px;
    font-size: $sub-text-size - 0.1rem;
    margin: 0;
  }
}
@media screen and (max-width: $laptop-screen-width) {
  .endorsements {
    width: 1650px;
  }
  .endorsement-wrapper h2 {
    font-size: $sub-heading-text-size;
  }
  .endorsement {
    width: $endorsement-width - 20px;
    height: $endorsement-height - 20px;
    font-size: $text-size-laptop-screen;
  }
  .carousel__slide--active .endorsement {
    width: $endorsement-width;
    height: $endorsement-height;
  }
  .text {
    font-size: $sub-text-size-laptop-screen;
  }
  .person {
    .name {
      font-size: $text-size-laptop-screen;
    }
    .title {
      font-size: $sub-text-size-laptop-screen - 0.1rem;
    }
  }
}
@media screen and (max-width: $small-screen-width) {
  .endorsement-wrapper h2 {
    font-size: $sub-heading-text-size-small-screen;
  }
  .endorsement {
    width: calc($endorsement-width - 40px);
    height: $endorsement-height - 60px;
    font-size: $text-size-small-screen;
    padding: 20px;
    .endorsement-heading {
      .profile-photo {
        width: 80px;
        height: 80px;
      }
    }
  }
  .carousel__slide--active .endorsement {
    width: calc($endorsement-width - 40px);
    height: $endorsement-height - 60px;
  }
  .text {
    font-size: $sub-text-size-small-screen;
  }
  .person {
    .name {
      font-size: $text-size-small-screen;
    }
    .title {
      font-size: $sub-text-size-small-screen - 0.1rem;
    }
  }
  .endorsements {
    width: 90vw;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .carousel__slide--active .endorsement {
    width: 85vw;
    text-align: left;
    justify-content: center;
    height: 95%;
    padding: calc($endorsement-padding/1.25);
  }
  .endorsement {
    background-color: $quaternary-color;
    padding: calc($endorsement-padding/1.25);
    width: 85vw;
    height: 95%;
  }

  .profile-photo {
    width: 80px;
    height: 80px;
  }
  .endorsement-wrapper h2 {
    font-size: $sub-heading-text-size-phone-screen;
    margin: 10px 0;
  }

  .text {
    font-size: $text-size-phone-screen;
    text-align: center;
    height: 175px;
  }
  .person {
    align-items: center;
    .name {
      font-size: $text-size-phone-screen;
    }
    .title {
      font-size: $sub-text-size-phone-screen - 0.1rem;
      text-align: center;
    }
  }
}
</style>
