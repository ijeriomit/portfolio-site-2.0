<template>
  <img class="top-clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <floating-header class="header"></floating-header>
    <section class="about-me-section">
      <h1 class="heading">
        <span>cout &lt;&lt; </span>
        <span>"About Me"</span>
        <span>;</span>
      </h1>
      <img class="headshot" src="@/assets/about-me-images/headshot.jpeg" />

      <p class="personal-desc" v-html="store.personalDesc"></p>
    </section>
    <EndorsementCarousel class="endorsement-section"></EndorsementCarousel>
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
          <div class="skill-row middle">
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
    </section>
    <section class="bottom-section">
      <NextPage
        class="next"
        message="See My Work!"
        :next-route="routes[2]"
      ></NextPage>
      <FooterBar class="footer"></FooterBar>
    </section>
  </div>
  <img class="bottom-clip-art" src="@/assets/clip-art-images/wires.png" />
</template>
<script setup>
import { store } from "@/data.js";
import { routes } from "@/main.js";

import FloatingHeader from "@/components/floating-header.vue";
import EndorsementCarousel from "@/components/endorsement-carousel.vue";
import NextPage from "@/components/next-page.vue";
import FooterBar from "@/components/footer-bar.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$aboutMe-height: 750px;
$endorsements-height: 650px;
$experience-height: 950px;
$skills-height: 800px;
$bottom-section-height: 500px;
.page {
  grid-template-rows: $header-height $aboutMe-height $endorsements-height $experience-height $skills-height $bottom-section-height;
  grid-template-columns: 100%;
}
.top-clip-art {
  position: absolute;
  width: 45vw;
  right: 0;
  top: 5vh;
  display: none;
}
.bottom-clip-art {
  position: absolute;
  width: 40vw;
  transform: rotate(180deg);
  right: 0;
  z-index: 1;
  bottom: 0;
}
.heading {
  margin: 0px;
  gap: 10px;
  background-color: $quaternary-color;
  color: $secondary-color;
  grid-column: 1 / 3;
  grid-row: 1;
  span:first-child {
    color: $highlight-color;
  }
  span:last-child {
    color: $highlight-color;
  }
}
.header {
  grid-row: 1;
  height: $header-height;
}
.about-me-section {
  @extend .page-section;
  padding-top: 75px;
  grid-row: 2;
  justify-content: center;
  align-self: center;
  display: grid;
  z-index: 2;
  grid-template-columns: 40vw 40vw;
  grid-template-rows: 150px 600px;
  .personal-desc {
    font-size: $text-size;
    max-width: 650px;
    font-family: $text-font;
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
.endorsement-section {
  @extend .page-section;
  grid-row: 3;
  grid-template-columns: 100%;
}
.exp-section {
  @extend .page-section;
  max-height: $experience-height;
  grid-row: 4;
  align-self: center;
  display: grid;
  grid-template-columns: 50vw 50vw;
  row-gap: 5%;
  grid-template-rows: 175px 600px;
  padding-top: 25px;

  .experiences {
    grid-row: 2/3;
    grid-column: 1/3;
    max-width: 87.5%;
    height: fit-content;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
    overflow-y: hidden;
    gap: 2.5%;
  }
  .experience {
    flex: 1 0 450px;
    height: 500px;
    padding: 20px 35px;
    background-color: $secondary-color-transparent;
    transition: background-color 0.3s ease-in-out;
    font-family: $text-font;
    h2 {
      font-size: $sub-heading-text-size;
    }
    .dates {
      font-style: italic;
      font-size: $sub-text-size;
    }
    h3 {
      font-size: $text-size;
    }
    p {
      overflow-y: auto;
      overflow-x: hidden;
      font-size: $sub-text-size;
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
  .experience:hover {
    color: $secondary-color;
    background-color: rgba(0, 0, 0, 0.8);

    .experience-heading {
      color: $highlight-color;
    }
  }
}
.skills-section {
  @extend .page-section;
  grid-row: 5;
  display: grid;
  grid-template-columns: 40vw 40vw;
  grid-template-rows: 200px 600px;
  max-height: $skills-height;
  column-gap: 2.5%;
  row-gap: 2.5%;
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
    font-size: $sub-text-size;
    font-family: $heading-font;
    text-align: center;
    align-items: center;
    height: 3.25rem;
    p {
      height: fit-content;
      margin: 0;
    }
  }
  .dev-tools,
  .programming-languages {
    grid-row: 2/2;
    align-self: start;
    justify-self: center;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100px 375px;
    row-gap: 25px;
    align-items: center;
    justify-items: center;
    h3 {
      font-size: $sub-heading-text-size;
      font-weight: bold;
      font-family: $heading-font;
    }
  }
  .dev-tools {
    grid-column: 1/2;
    .skill-block {
      background-color: $quaternary-color;
    }
  }
  .programming-languages {
    grid-column: 2/2;

    .skill-block {
      background-color: $primary-color-light;
    }
  }
}
.bottom-section {
  @extend .page-section;
  grid-row: 6;
  display: grid;
  grid-template-rows: 300px 125px;
  row-gap: 2.5%;
  grid-template-columns: 30vw 30vw 30vw;
  .footer {
    grid-column: 2 / 2;
    grid-row: 2;
    align-self: center;
    justify-self: center;
    height: 125px;
  }
  .next {
    grid-row: 1;
    grid-column: 3;
    justify-self: start;
    align-self: start;
  }
}

@media screen and (max-width: $laptop-screen-width) {
  $aboutMe-height: 625px;
  $endorsements-height: 600px;
  $experience-height: 800px;
  $skills-height: 650px;
  $bottom-section-height: 500px;
  .page {
    grid-template-rows: $header-height-laptop-screen $aboutMe-height $endorsements-height $experience-height $skills-height $bottom-section-height;
  }
  .about-me-section {
    grid-template-rows: 125px 500px;
    .personal-desc {
      font-size: $text-size-laptop-screen;
      max-width: 600px;
    }
    .headshot {
      width: 400px;
      height: 400px;
    }
  }
  .heading {
    font-size: $heading-text-size-laptop-screen;
    height: 90px;
  }
  .exp-section {
    grid-template-rows: 150px 600px;
    row-gap: 2.5%;

    .experiences {
      max-width: 92%;
    }
    .experience {
      flex: 1 0 390px;
      height: 450px;
      h2 {
        font-size: $sub-heading-text-size-laptop-screen;
      }
      .dates {
        font-size: $sub-text-size-laptop-screen;
      }
      h3 {
        font-size: $text-size-laptop-screen;
      }
      p {
        font-size: $sub-text-size-laptop-screen;
      }
    }
  }
  .skills-section {
    row-gap: 0.5%;
    grid-template-rows: 150px 500px;

    .skill-row {
      gap: 1.5%;
    }
    .skill-row.top .skill-block {
      width: 150px;
    }
    .skill-row.middle .skill-block {
      width: 125px;
    }
    .skill-row.bottom .skill-block {
      width: 150px;
    }
    .skill-block {
      font-size: $sub-text-size-laptop-screen;
    }
    .dev-tools,
    .programming-languages {
      row-gap: 15px;
      h3 {
        text-align: center;
        max-width: 400px;
        font-size: $sub-heading-text-size-laptop-screen;
      }
    }
  }
}

@media screen and (max-width: $small-screen-width) {
  $aboutMe-height: 600px;
  $endorsements-height: 600px;
  $experience-height: 700px;
  $skills-height: 650px;
  $bottom-section-height: 500px;
  .page {
    grid-template-rows: $header-height-small-screen $aboutMe-height $endorsements-height $experience-height $skills-height $bottom-section-height;
  }
  .heading {
    font-size: $heading-text-size-small-screen;
    height: 75px;
    margin: 0;
    padding: 0;
    width: 60vw;
    justify-content: center;

    span:first-child {
      margin-left: 50px;
    }
    span:last-child {
      margin-right: 50px;
    }
  }
  .about-me-section {
    align-self: center;
    justify-self: center;
    grid-template-rows: 100px 450px;
    .personal-desc {
      max-width: 550px;
      font-size: $text-size-small-screen;
    }
    .headshot {
      width: 350px;
      height: 400px;
    }
  }

  .exp-section {
    grid-template-rows: 100px 550px;
    row-gap: 3%;

    .experiences {
      max-width: 95%;
      .experience {
        flex: 1 0 320px;
        height: 425px;
        .company-logo {
          width: 50px;
        }
        h2 {
          font-size: $sub-heading-text-size-small-screen;
        }
        .dates {
          font-size: $sub-text-size-small-screen;
        }
        h3 {
          font-size: $text-size-small-screen;
        }
        p {
          font-size: $sub-text-size-small-screen;
        }
      }
    }
  }
  .skills-section {
    grid-template-rows: 150px 450px;

    .skill-row.top .skill-block {
      width: 125px;
    }
    .skill-row.middle .skill-block {
      width: 115px;
    }
    .skill-row.bottom .skill-block {
      width: 125px;
    }
    .skill-block {
      font-size: $sub-text-size-small-screen;
    }
    .dev-tools,
    .programming-languages {
      h3 {
        max-width: 350px;
        font-size: $sub-heading-text-size-small-screen;
      }
    }
  }
  .bottom-section {
    .next {
      justify-self: center;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $phone-title-height: 325px;

  .top-clip-art {
    top: 10vh;
    width: 100vw;
    height: unset;
  }
  .about-me-section {
    display: flex;
    flex-flow: column nowrap;
    max-height: unset;
    height: 1450px;
    max-width: unset;
    width: 100vw;
    gap: 30px;
    margin-top: 100px;
    align-self: flex-start;
    justify-content: flex-start;
    .heading {
      width: 100%;
    }
    .headshot {
      width: 50%;
      height: 300px;
      margin-top: 0;
      align-self: center;
      order: 2;
    }
    .personal-desc {
      order: 3;
      align-self: center;
      text-align: center;
      width: 80%;
      font-size: $text-size-phone-screen;
      margin: 0;
      padding: 0;
    }
    .endorsement-section {
      order: 4;
      align-self: center;
    }
  }
  .page {
    display: flex;
    flex-flow: column nowrap;
    row-gap: 1%;
    align-items: center;
  }

  .heading {
    order: 1;
    height: 60px;
    align-self: center;
    font-size: $heading-text-size-phone-screen;

    span:nth-child(2) {
      font-size: 1.85rem;
    }
  }

  .exp-section {
    flex-flow: column nowrap;
    display: flex;
    max-height: 1800px;
    max-width: 100vw;
    .heading {
      width: 100%;
      align-self: center;
      order: 1;
      flex-shrink: 0;
    }
    .experiences {
      order: 2;
      display: flex;
      padding: 0;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: flex-start;
      height: 1800px;
      gap: 1%;
      .experience {
        width: 95%;
        padding: 10px;
        gap: 0;
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
          width: 90%;
        }
        .dates {
          font-size: 1.25rem;
          margin: 0;
          display: flex;
          max-height: 60px;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .experience-heading {
      flex-flow: row nowrap;
      width: 90%;
      margin: 0;
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      .company-logo {
        order: 1;
        text-align: center;
        width: 50px;
      }
      h2 {
        order: 2;
        font-size: 1.75rem;
        margin: 0;
      }
    }
  }

  .skills-section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100vw;
    row-gap: 0;
    max-height: 1300px;
    height: unset;
    .heading {
      order: 1;
      align-self: center;
      width: 100vw;
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
  }
  .footer {
    align-self: center;
    margin-top: 7.5%;
  }
}
</style>
