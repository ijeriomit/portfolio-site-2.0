<template>
  <section class="about-me-wrapper">
    <img class="headshot" src="@/assets/about-me-images/headshot.jpeg" />
    <!-- <img
        class="headshot-2"
        src="@/assets/about-me-images/headshot-transparent.png"
      /> -->
    <div class="about-me-content">
      <div class="button-row">
        <button
          @click="buttonSelected($event)"
          id="about"
          :class="{ active: aboutMeSelected }"
        >
          ABOUT ME
        </button>
        <button
          @click="buttonSelected($event)"
          id="exp"
          :class="{ active: experienceSelected }"
        >
          EXPERIENCE
        </button>
        <button
          @click="buttonSelected($event)"
          id="skills"
          :class="{ active: skillsSelected }"
        >
          SKILLS
        </button>
      </div>
      <!-- <div class="point" :style="{ left: pointPos }"></div> -->
      <h1 class="heading">
        <span>print(</span>
        <span v-if="aboutMeSelected" class="typewriter-animation"
          >"About Me"</span
        >
        <span v-else-if="experienceSelected" class="typewriter-animation"
          >"Experience"</span
        >
        <span v-else-if="skillsSelected" class="typewriter-animation"
          >"Skills"</span
        >
        <span>);</span>
      </h1>
      <p v-if="aboutMeSelected" class="tab-content">
        {{ store.personalDesc }}
      </p>
      <div v-else-if="experienceSelected" class="tab-content">
        <div
          v-for="experience of store.experiences"
          :key="experience.companyName"
        >
          <span class="company-title">
            <h2>{{ experience.companyName }}</h2>
            <p>{{ experience.startDate }} - {{ experience.endDate }}</p>
          </span>
          <h3 class="job-title">{{ experience.jobTitle }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
      <div v-else-if="skillsSelected" class="tab-content">
        <h3>Programming Languages & Frameworks:</h3>
        <div class="skill-row">
          <div
            v-for="(language, index) of store.programmingLanguages"
            :key="index"
            class="skill-block"
          >
            {{ language }}
          </div>
        </div>
        <h3>Dev Tools:</h3>
        <div class="skill-row">
          <div
            v-for="(tool, index) of store.devTools"
            :key="index"
            class="skill-block"
          >
            {{ tool }}
          </div>
        </div>
      </div>
    </div>
    <testimonialCarousel class="testimonials"></testimonialCarousel>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { store } from "@/data.js";
import testimonialCarousel from "@/components/testimonial-carousel.vue";

const aboutMeSelected = ref(true);
const experienceSelected = ref(false);
const skillsSelected = ref(false);
const pointPos = ref("90px");

function buttonSelected(event) {
  switch (event.target.id) {
    case "about":
      aboutMeSelected.value = true;
      experienceSelected.value = false;
      skillsSelected.value = false;
      pointPos.value = "90px";
      break;
    case "exp":
      aboutMeSelected.value = false;
      experienceSelected.value = true;
      skillsSelected.value = false;
      pointPos.value = "310px";
      break;
    case "skills":
      aboutMeSelected.value = false;
      experienceSelected.value = false;
      skillsSelected.value = true;
      pointPos.value = "530px";
      break;
  }
}
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$image-height: 31rem;
$image-width: 25rem;
$phone-image-width: 13rem;
$phone-image-height: 15rem;

.about-me-wrapper {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2.5%;
  grid-template-rows: 900px 500px;
  max-width: 80%;
  max-height: 90%;
  font-family: $vs-code-font;
  justify-content: center;
  align-self: center;
}
.about-me-content {
  display: flex;
  flex-flow: column nowrap;
  width: 800px;
  grid-column: 2 / 3;
  grid-row: 1 / 1;
}
.testimonials {
  grid-row: 2/3;
  grid-column: 1 / 3;
}
.tab-content {
  font-size: 1.5rem;
  max-width: 700px;
  font-family: Roboto, Roboto Mono, monospace;
  max-height: 700px;
  display: flex;
  overflow-y: auto;
  position: relative;
  bottom: 5px;
  flex-flow: row wrap;
}
.tab-content::-webkit-scrollbar {
  width: 8px;
  height: 90%;
}

/* Track */
.tab-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 8px;
  border-radius: 8px;
}

/* Handle */
.tab-content::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 8px;
  background: #8f9391;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.tab-content::-webkit-scrollbar-thumb:window-inactive {
  background: #5a5f5d;
}
.heading {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  gap: 10px;
  font-size: 3rem;
  margin: 20px 0 30px 0;
}
.heading span:first-child,
span:last-child {
  color: $tertiary-color;
}
.button-row {
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  height: fit-content;
  justify-content: flex-start;
}
.button-row button {
  width: 200px;
  height: 85px;
  border-radius: 15px;
  border: none;
  font-family: Roboto, Roboto Mono, monospace;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 30px;
  cursor: pointer;
  background-color: #8f9391;
  // box-shadow: 5px 10px 10px black;
}
.button-row button.active {
  background-color: $quaternary-color;
  color: $secondary-color;
  // box-shadow: 5px 10px 10px grey;
}
.button-row button:hover:not(.active) {
  transition: all 0.1s ease-in;
  background-color: $secondary-color;
  color: $quaternary-color;
}
.headshot {
  width: 700px;
  height: 900px;
  grid-column: 1 / 2;
  grid-row: 1 / 1;
}
.headshot-2 {
  @extend .headshot;
}
.point {
  position: relative;
  left: 90px;
  // top: 35px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid $quaternary-color;
  align-self: flex-start;
}
.company-title h2 {
  font-size: 1.75rem;
}
.company-title p {
  font-size: 1.5rem;
  margin-right: 20px;
}
.job-title {
  font-size: 1.5rem;
}
.company-title {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}
.skill-row {
  display: flex;
  flex-flow: row wrap;
  width: inherit;
  gap: 5px;
}
.skill-block {
  background-color: $quaternary-color;
  color: $secondary-color;
  width: fit-content;
  padding: 5px;
}
.typewriter-animation {
  width: fit-content;
  letter-spacing: normal;
  margin: 0 5px;
  max-width: fit-content;
}

@media screen and (max-width: $small-screen-width) {
  .about-me-wrapper {
    grid-template-rows: 550px 700px;
    max-width: 95%;
    max-height: none;
    margin-top: 0;
    gap: 0;
  }
  .headshot {
    grid-row: 1 / 2;
    width: 400px;
    height: 500px;
    grid-column: 1 / 3;
    justify-self: center;
  }
  .about-me-content {
    grid-row: 2/3;
    width: 90vw;
    justify-self: center;
    grid-column: 1 / 3;
    gap: 20px;
  }
  .testimonials {
    width: 100vw;
    height: 500px;
    justify-self: center;
    grid-column: 1/3;
    grid-row: 3/4;
  }
  .heading {
    justify-content: center;
    margin: 0;
  }
  .tab-content {
    align-self: center;
    text-align: justify;
    padding-right: 10px;
    max-height: 800px;
  }
  .button-row {
    justify-content: center;
    gap: 30px;
  }
}
@media screen and (max-width: $phone-screen-width) {
  .heading {
    font-size: 1.5rem;
  }
  .headshot {
    width: 225px;
    height: 300px;
    margin-top: 50px;
  }
  .about-me-wrapper {
    align-self: flex-start;
    align-self: flex-start;
    grid-template-rows: 400px 600px;
  }
  .about-me-content {
    width: 85vw;
    align-items: center;
  }
  .button-row button {
    width: 110px;
    height: 50px;
    font-size: 16px;
    text-align: center;
    text-wrap: wrap;
    overflow: hidden;
  }
  .button-row {
    gap: 10px;
    width: 90vw;
    margin-bottom: 20px;
  }
  .tab-content {
    font-size: 1rem;
    margin-top: 10px;
  }
  .tab-content h3 {
    text-align: left;
  }
  .tab-content::-webkit-scrollbar {
    display: none;
  }
  .company-title h2 {
    font-size: 1.25rem;
    width: 120px;
  }
  .company-title p {
    font-size: 1rem;
    margin: 0px;
    width: 120px;
  }
  .job-title {
    font-size: 1rem;
  }
}
</style>
