<template>
  <div class="page">
    <section class="title-section">
      <div class="title-section-background"></div>
      <img src="@/assets/white-matrix-background.png" />
      <PageGreeting></PageGreeting>
    </section>
    <section class="about-me-section">
      <img class="headshot" src="@/assets/about-me-images/headshot.jpeg" />
      <h1 class="heading">
        <span>print(</span>
        <span class="typewriter-animation">"About Me"</span>
        <span>);</span>
      </h1>
      <p class="personal-desc">
        {{ store.personalDesc }}
      </p>
      <TestimonialCarousel class="testimonial-section"></TestimonialCarousel>
    </section>
    <section class="exp-section">
      <h1 class="heading">
        <span>cout &lt;&lt; </span>
        <span class="typewriter-animation">"Experience"</span>
        <span>;</span>
      </h1>
      <div class="experiences">
        <div
          v-for="experience of store.experiences"
          :key="experience.companyName"
        >
          <!-- <span class="company-title"> -->
          <h2>{{ experience.companyName }}</h2>
          <p class="dates">
            {{ experience.startDate }} - {{ experience.endDate }}
          </p>
          <!-- </span> -->
          <h3>{{ experience.jobTitle }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </section>
    <section class="skills-section">
      <h1 class="heading">
        <span>console.log( </span>
        <span class="typewriter-animation">"Skills"</span>
        <span>);</span>
      </h1>
      <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
      <div class="dev-tools">
        <h3>Dev Tools & Technology:</h3>
        <div class="skills">
          <div class="skill-row top">
            <div
              v-for="(tool, index) of store.devTools.slice(0, 3)"
              :key="index"
              class="skill-block"
            >
              <p>{{ tool }}</p>
            </div>
          </div>
          <div class="skill-row middle">
            <div
              v-for="(tool, index) of store.devTools.slice(3, 7)"
              :key="index"
              class="skill-block"
            >
              <p>{{ tool }}</p>
            </div>
          </div>
          <div class="skill-row bottom">
            <div
              v-for="(tool, index) of store.devTools.slice(7, 11)"
              :key="index"
              class="skill-block"
            >
              <p>{{ tool }}</p>
            </div>
          </div>
          <div class="skill-row bottom">
            <div
              v-for="(tool, index) of store.devTools.slice(
                11,
                store.devTools.length
              )"
              :key="index"
              class="skill-block"
            >
              <p>{{ tool }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="programming-languages">
        <h3>Programming Languages & Frameworks:</h3>
        <div class="skills">
          <div class="skill-row top">
            <div
              v-for="(language, index) of store.programmingLanguages.slice(
                0,
                3
              )"
              :key="index"
              class="skill-block"
            >
              <p>{{ language }}</p>
            </div>
          </div>
          <div class="skill-row middle">
            <div
              v-for="(language, index) of store.programmingLanguages.slice(
                3,
                7
              )"
              :key="index"
              class="skill-block"
            >
              <p>{{ language }}</p>
            </div>
          </div>
          <div class="skill-row bottom">
            <div
              v-for="(language, index) of store.programmingLanguages.slice(
                7,
                store.programmingLanguages.length
              )"
              :key="index"
              class="skill-block"
            >
              <p>{{ language }}</p>
            </div>
          </div>
        </div>
      </div>
      <NextPage class="next" message="See My Work!"></NextPage>
    </section>
  </div>
</template>
<script setup>
import { store } from "@/data.js";
import TestimonialCarousel from "@/components/testimonial-carousel.vue";
import PageGreeting from "@/components/page-greeting.vue";
import NextPage from "@/components/next-page.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$title-height: 600px;
$aboutMe-height: 1500px;
$experience-height: 900px;
$skills-height: 1300px;
$about-me-page-height: $title-height + $aboutMe-height + $experience-height +
  $skills-height;
:global(#app) {
  height: $about-me-page-height + $footer-height;
}
.page {
  grid-template-rows: $title-height $aboutMe-height $experience-height $skills-height;
  height: $about-me-page-height;
}
.title-section {
  overflow: hidden;
  grid-row: 1/2;
  max-height: $title-height;
  display: grid;
}
.about-me-section {
  grid-row: 2/3;
  justify-content: center;
  align-self: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 800px 600px;
  font-family: $vs-code-font;

  .heading {
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    background-color: $primary-color;
    color: $secondary-color;
    justify-self: start;
  }
  .heading span:first-child,
  span:last-child {
    color: $quaternary-color;
  }
}
.exp-section {
  max-height: $experience-height;
  grid-row: 3/4;
  // justify-content: center;
  align-self: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px 600px;

  .heading {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    background-color: $quaternary-color;
    color: $secondary-color;
    justify-self: end;
    box-shadow: -5px 5px 5px black;
  }
  .heading span:first-child,
  span:last-child {
    color: $highlight-color;
  }
}
.skills-section {
  grid-row: 4/5;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px 600px 400px;
  max-height: $skills-height;
  overflow: hidden;
  .heading {
    justify-self: start;
    grid-column: 2 / 2;
    grid-row: 1 / 1;
    background-color: $secondary-color;
    color: $highlight-color;
  }
  .heading span:first-child,
  span:last-child {
    color: $quaternary-color;
  }
}
.skills {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.clip-art {
  width: 1500px;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.experiences {
  grid-row: 2/3;
  grid-column: 1/3;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 5%;
  font-family: $text-font;
}
.experiences > div {
  width: 25%;
  height: 600px;
}
.experiences h2 {
  font-size: 2rem;
}
.experiences .dates,
h3 {
  font-size: 1.75rem;
}
.experiences p {
  font-size: 1.5rem;
}
.headshot {
  width: 700px;
  height: 700px;
  grid-column: 1 / 2;
  grid-row: 1 / 1;
  justify-self: center;
}
.headshot-2 {
  @extend .headshot;
}
.testimonial-section {
  grid-row: 2/3;
  grid-column: 1 / 3;
}
.personal-desc {
  font-size: 1.5rem;
  max-width: 700px;
  font-family: Roboto, Roboto Mono, monospace;
  max-height: 700px;
  overflow-y: auto;
  grid-column: 2 / 2;
  grid-row: 1 / 1;
  align-self: center;
  justify-self: center;
}

.heading {
  box-shadow: 5px 5px 5px black;
  width: 95%;
  height: 100px;
  border-radius: 25px;
  border: none;
  text-align: center;
  font-weight: bold;
  gap: 10px;
  font-size: 3rem;
  margin: 20px 0 30px 0;
  font-family: $text-font;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  justify-self: center;
}

.title-section-background {
  z-index: 1;
  height: 700px;
  background-color: $primary-color;
  width: 100%;
  opacity: 40%;
  grid-column: 1;
  grid-row: 1;
}

.title-section img {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 100%;
  height: 700px;
  opacity: 60%;
}

.job-title {
  font-size: 1.5rem;
}

.skill-row {
  display: flex;
  flex-flow: row nowrap;
  max-width: 900px;
  gap: 1.5%;
  margin: 1rem 0;
}
.skill-row.top .skill-block {
  width: 200px;
}
.skill-row.middle .skill-block {
  width: 175px;
}
.skill-row.bottom .skill-block {
  width: 175px;
}
.skill-block {
  display: flex;
  justify-content: center;
  color: $secondary-color;
  padding: 5px;
  font-size: 1.5rem;
  font-family: $text-font;
  text-align: center;
  align-items: center;
  height: 4rem;
  p {
    height: fit-content;
    margin: 0;
  }
}
.dev-tools {
  grid-row: 2/2;
  grid-column: 1/2;
  align-self: start;
  justify-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h3 {
    font-size: 1.75rem;
    font-family: $text-font;
    font-weight: bold;
  }
  .skill-block {
    background-color: $quaternary-color;
  }
}
.programming-languages {
  grid-row: 2/2;
  grid-column: 2/2;
  align-self: start;
  justify-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  height: 450px;
  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    font-family: $text-font;
  }
  .skill-block {
    background-color: $light-primary-color;
  }
}
.next {
  grid-row: 3/3;
  grid-column: 2/2;
  width: 600px;
  height: 300px;
  justify-self: center;
  align-self: center;
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
  .testimonials {
    width: 100vw;
    height: 500px;
    justify-self: center;
    grid-column: 1/3;
    grid-row: 3/4;
  }
}
@media screen and (max-width: $phone-screen-width) {
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
}
</style>
