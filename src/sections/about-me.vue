<template>
  <section class="about-me-wrapper">
    <img class="headshot" src="@/assets/about-me-images/headshot.jpeg" />
    <!-- <img
      class="headshot-2"
      src="@/assets/about-me-images/headshot-transparent.png"
    /> -->
    <div>
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
      <div class="point" :style="{ left: pointPos }"></div>
      <h1 class="heading">
        <span>print(</span>
        <span v-if="aboutMeSelected">"About Me"</span>
        <span v-else-if="experienceSelected">"Experience"</span>
        <span v-else-if="skillsSelected">"Skills"</span>
        <span>);</span>
      </h1>
      <p
        v-if="aboutMeSelected"
        class="about-me-content"
        :style="{
          position: 'relative',
          top: '10px',
        }"
      >
        {{ store.personalDesc }}
      </p>
      <div v-else-if="experienceSelected" class="about-me-content">
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
      <div v-else-if="skillsSelected" class="about-me-content">
        <h4>Programming Languages & Frameworks:</h4>
        <div class="skill-row">
          <div
            v-for="(language, index) of store.programmingLanguages"
            :key="index"
            class="skill-block"
          >
            {{ language }}
          </div>
        </div>
        <h4>Dev Tools:</h4>
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
  </section>
</template>
<script setup>
import { ref } from "vue";
import { store } from "@/data.js";
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
  display: flex;
  flex-flow: row;
  max-width: 80%;
  max-height: 90%;
  margin-top: 3rem;
  gap: 5%;
  font-family: $vs-code-font;
  justify-content: center;
}
.about-me-wrapper > div {
  width: 800px;
}
.about-me-content {
  font-size: 1.5rem;
  max-width: 700px;
  font-family: Roboto, Roboto Mono, monospace;
  max-height: 700px;
  overflow-y: auto;
  position: relative;
  bottom: 5px;
}
.about-me-content::-webkit-scrollbar {
  width: 8px;
  height: 90%;
}

/* Track */
.about-me-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 8px;
  border-radius: 8px;
}

/* Handle */
.about-me-content::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 8px;
  background: #8f9391;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.about-me-content::-webkit-scrollbar-thumb:window-inactive {
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
}
.button-row button.active {
  background-color: $quaternary-color;
  color: $secondary-color;
}
.button-row button:hover:not(.active) {
  transition: all 0.1s ease-in;
  background-color: $secondary-color;
  color: $quaternary-color;
}
.headshot {
  width: 700px;
  height: 900px;
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
  align-self: flex-end;
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
