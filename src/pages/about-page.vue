<template>
  <img class="top-clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <section class="about-me-section">
      <h1 class="heading">
        <span>cout &lt;&lt; </span>
        <span>"About Me"</span>
        <span>;</span>
      </h1>
      <img class="headshot" src="@/assets/about-me-images/headshot.jpeg" />

      <p class="personal-desc" v-html="store.personalDesc"></p>
      <EndorsementCarousel class="endorsement-section"></EndorsementCarousel>
    </section>
    <section class="exp-section">
      <h1 class="heading">
        <span>print(</span>
        <span>"Experience"</span>
        <span>);</span>
      </h1>
      <div class="experiences">
        <div
          class="experience"
          v-for="experience of store.experiences"
          :key="experience.companyName"
        >
          <a
            :href="experience.companyUrl"
            target="_blank"
            class="experience-heading"
          >
            <h2>
              {{ experience.companyName }}
            </h2>
            <img
              class="company-logo"
              :src="
                require(`@/assets/work-experience-images/${experience.logoPath}`)
              "
            />
          </a>
          <p class="dates">
            {{ experience.startDate }} - {{ experience.endDate }}
          </p>
          <h3>{{ experience.jobTitle }}</h3>
          <p>{{ experience.description }}</p>
        </div>
      </div>
    </section>
    <section class="skills-section">
      <h1 class="heading">
        <span>console.log( </span>
        <span>"Skills"</span>
        <span>);</span>
      </h1>
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
      <NextPage
        class="next"
        message="See My Work!"
        :next-route="routes[2]"
      ></NextPage>
    </section>
    <FooterSection class="footer"></FooterSection>
  </div>
  <img class="bottom-clip-art" src="@/assets/clip-art-images/wires.png" />
</template>
<script setup>
import { store } from "@/data.js";
import { routes } from "@/main.js";

import EndorsementCarousel from "@/components/endorsement-carousel.vue";
import NextPage from "@/components/next-page.vue";
import FooterSection from "@/components/footer-section.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$aboutMe-height: 1400px;
$experience-height: 950px;
$skills-height: 1200px;
$footer-height: 100px;
$about-me-page-height: $header-height + $aboutMe-height + $experience-height +
  $skills-height + $footer-height;
.page {
  grid-template-rows: $header-height $aboutMe-height $experience-height $skills-height $footer-height;
  height: $about-me-page-height;
  overflow-y: hidden;
  background-image: linear-gradient(
    rgba(29, 173, 118, 0.5),
    rgba(29, 173, 118, 0.25),
    rgba(29, 173, 118, 0)
  );
}
.top-clip-art {
  position: absolute;
  width: 60vw;
  grid-row: 3 / 3;
  right: 0;
  top: 15vh;
  transform: rotate(180deg);
}
.bottom-clip-art {
  position: absolute;
  // order: 5;
  bottom: 0;
}
.heading {
  height: 100px;
  font-weight: bold;
  gap: 10px;
  font-size: 3rem;
  padding: 0 10vw;
  margin: 0px;
  letter-spacing: normal;
  font-family: $heading-font;
  display: flex;
  justify-self: center;
  align-self: center;
  align-items: center;
  z-index: 2;
  background-color: $quaternary-color;
  color: $secondary-color;
  grid-column: 1 / 3;
  grid-row: 1;
  width: fit-content;
  // max-width: 60%;
  span:first-child {
    color: $highlight-color;
  }
  span:last-child {
    color: $highlight-color;
  }
}
.about-me-section {
  @extend .page-section;
  grid-row: 2;
  justify-content: center;
  align-self: center;
  display: grid;
  z-index: 2;
  grid-template-columns: 45% 50%;
  grid-template-rows: 150px 600px 600px;
  .endorsement-section {
    grid-row: 3;
    grid-column: 1 / 3;
  }
  .personal-desc {
    font-size: 1.75rem;
    max-width: 700px;
    font-family: $text-font;
    max-height: 700px;
    overflow-y: auto;
    grid-column: 1;
    grid-row: 2;
    align-self: center;
    justify-self: center;
  }
  .headshot {
    width: 500px;
    height: 500px;
    grid-column: 2;
    grid-row: 2;
    justify-self: center;
    align-self: center;
  }
}
.exp-section {
  @extend .page-section;
  max-height: $experience-height;
  grid-row: 3;
  align-self: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px 600px;
  .heading {
    align-self: start;
  }
  .experiences {
    grid-row: 2/3;
    grid-column: 1/3;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 2.5%;
  }
  .experience {
    width: 25%;
    height: 600px;
    padding: 10px 50px;
    transition: background-color 0.3s ease-in-out;
  }
  .experience:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .experience h2 {
    font-size: 2rem;
    font-family: $text-font;
  }
  .experience .dates,
  h3 {
    font-size: $text-size;
    font-family: $text-font;
  }
  .experience p {
    font-family: $text-font;
    font-size: $small-text-size;
  }
  .company-logo {
    width: 75px;
  }
  .experience-heading {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 5%;
    cursor: pointer;
    color: black;
  }
}
.skills-section {
  @extend .page-section;
  grid-row: 4;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 200px 600px 300px;
  max-height: $skills-height;
  column-gap: 2.5%;
  .skills {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
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
    font-family: $heading-font;
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
    z-index: 2;
    margin-top: 5%;
    h3 {
      font-size: $text-size;
      font-family: $heading-font;
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
    z-index: 2;
    margin-top: 5%;
    h3 {
      font-size: $text-size;
      font-weight: bold;
      font-family: $heading-font;
    }
    .skill-block {
      background-color: $light-primary-color;
    }
  }
  .next {
    grid-row: 3/3;
    grid-column: 2/2;
    justify-self: center;
    align-self: start;
    z-index: 2;
  }
}
.footer {
  grid-row: 5;
  grid-column: 1 / 3;
  align-self: start;
}

@media screen and (max-width: $small-screen-width) {
  .headshot {
    grid-row: 1 / 2;
    width: 400px;
    height: 500px;
    grid-column: 1 / 2;
    justify-self: end;
    align-self: center;
  }
  .top-clip-art {
    top: -15vh;
    width: 60vw;
  }
  .bottom-clip-art {
    bottom: -5vh;
  }

  .about-me-section {
    align-self: center;
    justify-self: center;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100px 700px 600px;
    max-height: 100%;
    width: 95vw;
    overflow: hidden;
    justify-self: center;
  }
  .personal-desc {
    width: 90%;
    justify-self: end;
    margin: 0;
    font-size: 1.5rem;
    padding-top: 5%;
    align-self: center;
  }

  .heading {
    font-size: 2.5rem;
    height: 75px;
    margin: 0;
    padding: 0;
    align-self: center;
    width: 60vw;
    justify-content: center;
    justify-self: center;

    span:first-child {
      margin-left: 50px;
    }
    span:last-child {
      margin-right: 50px;
    }
  }

  .endorsement-section {
    width: 90%;
    justify-self: center;
  }
  .page {
    grid-template-rows: 125px 1450px 1000px 1200px;
    row-gap: 0;
    height: unset;
    grid-template-columns: 100vw;
  }
  .exp-section {
    grid-template-rows: 100px 900px;
    max-height: 1000px;
    align-self: start;
    .heading {
      margin: 0;
      padding: 0;
      align-self: center;
      width: 60vw;
      justify-content: center;
      justify-self: center;
      grid-column: 1 / 3;
    }
    h3 {
      height: 65px;
    }
    .experiences {
      flex-flow: row nowrap;
      padding: 0px 10px;
      align-items: center;
      .experience {
        width: 30%;
        height: 775px;
        padding: 10px 20px;
      }
    }
  }
  .experience-heading {
    height: 125px;
  }
  .dates {
    height: 65px;
  }

  .skills-section {
    grid-template-rows: 175px 450px 475px;
    height: 1100px;
    column-gap: 0%;
    .heading {
      justify-self: center;
      width: 55vw;
    }
    .programming-languages {
      row-gap: 10%;
      justify-content: flex-start;
      .skill-row.middle {
        width: 600px;
      }
    }
    .skill-row {
      justify-content: center;
    }

    .skill-row.middle .skill-block,
    .skill-row.bottom .skill-block,
    .skill-row.top .skill-block {
      flex-basis: 140px;
      height: 3.5rem;
      font-size: 1.5rem;
    }
    .next {
      align-self: end;
      grid-row: 3 / 3;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $phone-title-height: 325px;
  .headshot {
    width: 225px;
    height: 300px;
    margin-top: 50px;
  }
  .about-me-section {
    display: flex;
    flex-flow: column nowrap;
    max-height: 1325px;
    max-height: none;
    align-self: flex-start;
    justify-content: flex-start;
    .heading {
      width: 90%;
    }
  }
  .title-section {
    max-height: 500px;
    height: 100%;
  }
  .title-section-background {
    height: 100%;
  }
  .matrix-background {
    height: 100%;
  }
  .page {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1%;
    height: 5000px;
  }
  .personal-desc {
    order: 3;
    font-size: 1.25rem;
    align-self: center;
    text-align: center;
    width: 80%;
    margin: 5%;
  }
  .heading {
    order: 1;
    height: 60px;
    align-self: center;
    font-size: 1.5rem;

    span:nth-child(2) {
      font-size: 1.85rem;
    }
  }
  .headshot {
    order: 2;
    margin-top: 0;
  }
  .endorsement-section {
    order: 4;
    align-self: center;
  }
  .exp-section {
    flex-flow: column nowrap;
    display: flex;
    max-height: 1650px;
    .heading {
      width: 90%;
      align-self: center;
      order: 1;
      flex-shrink: 0;
    }
    .experiences {
      order: 2;
      display: flex;

      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;
    }
  }
  .experience-heading {
    flex-flow: column nowrap;
    width: 90%;
    margin: 10px 0;
    align-items: center;
    .company-logo {
      order: 1;
      text-align: center;
    }
    h2 {
      order: 2;
      font-size: 1.5rem;
    }
  }
  .experience {
    width: 90%;
    height: 500px;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    display: flex;
    margin: 10px 0;
    h3 {
      text-align: center;
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      height: 50px;
    }
    p {
      text-align: center;
      margin: 0;
      font-size: 1.25rem;
    }
    .dates {
      font-size: 1.25rem;
      margin: 0;
      display: flex;
      max-height: 60px;
      align-items: center;
    }
  }
  .next {
    order: 4;
    right: 0;
    height: fit-content;
    align-self: center;
    p {
      right: unset;
    }
    .arrow {
      width: 50px;
      transform: none;
    }
  }

  .skills-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100vw;
    row-gap: 20px;
    max-height: 1450px;
    height: unset;
    .heading {
      order: 1;
      align-self: center;
      width: 90vw;
      margin: 0;
      flex-shrink: 0;
    }

    .dev-tools {
      align-items: center;
      width: 100vw;
    }
    .programming-languages {
      text-align: center;
      order: 3;
      width: 100vw;
      justify-content: flex-start;
    }

    .skill-row {
      justify-content: center;
    }
    .arrow {
      widows: 150px;
    }
    .skill-row.middle .skill-block,
    .skill-row.bottom .skill-block,
    .skill-row.top .skill-block {
      flex-basis: 75px;
      height: 2.5rem;
      font-size: 1rem;
    }
    .dev-tools {
      font-size: 1.25rem;
      order: 2;
      h3 {
        font-size: 1.5rem;
      }
    }
    .programming-languages {
      font-size: 1.25rem;
      order: 2;
      h3 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
