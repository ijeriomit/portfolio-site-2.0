<template>
  <div class="work-experience-wrapper">
    <section-title style="width: 90%">
      <template v-slot:section-title-content>
        <div style="color: #ffffff" class="section-title-keyword-1">
          function()
        </div>
        <div style="color: #ffffff" class="section-title-operator">{</div>
        <div style="color: #00ff9d" class="section-title-keyword-2">return</div>
        <div class="section-title-title">WorkExperience</div>
        <div style="color: #ffffff" class="section-title-operator">}</div>
      </template>
    </section-title>
    <text-box class="content-section">
      <template v-slot:text-slot>
        <div class="company-list">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            @click="selectExperience(experience)"
            :class="[
              experience == selectedExperience ? 'selected-experience' : '',
            ]"
          >
            {{ experience.company }}
          </div>
        </div>
        <div class="text-box-content-section">
          <div class="experience-text-section">
            <div class="text-section-title">
              <h2>
                <span>{{ selectedExperience.jobTitle }}</span> @
                <a
                  :href="selectedExperience.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="company-title"
                  >{{ selectedExperience.company }}</a
                >
              </h2>
              <h3>
                {{ selectedExperience.startDate }} —
                {{ selectedExperience.endDate }}
              </h3>
            </div>
            <ul class="description-bullet-points">
              <li
                class="bullet"
                v-for="(task, index) in selectedExperience.tasks"
                :key="index"
              >
                {{ task }}
              </li>
            </ul>
          </div>
          <img class="image-section" :src="selectedExperience.logo" />
        </div>
      </template>
    </text-box>
  </div>
</template>
<script>
// import imageCarousel from "@/components/image-carousel.vue";
import hmiImg from "@/assets/work-experience-images/HMI.png";
import googleImg from "@/assets/work-experience-images/google-logo.png";
import sectionTitle from "@/components/section-title.vue";
import textBox from "@/components/text-box.vue";

export default {
  name: "work-experience",
  components: {
    // "image-carousel": imageCarousel,
    "section-title": sectionTitle,
    "text-box": textBox,
  },
  beforeMount: function () {
    this.selectedExperience = this.experiences[0];
  },
  data: function () {
    return {
      experiences: [
        {
          company: "Houston Mechatronics",
          tasks: [
            "aid odda dadfda ida jai odjf dua ajd a daio ijuaddaj iodjia jad ",
            "oiadioahif a jdfio ajdfadoifaj oidfja ad adf ad fad fa fca dagQEGRGHA FSAGA DZV ",
            "oiajdfioad adjoiadfjai adodjfioadf ioajdf ZDF AFGA  ASDF AsaDE AFGA adxsfd ",
          ],
          jobTitle: "Software Engineer",
          startDate: "04/2019",
          endDate: "06/2021",
          logo: hmiImg,
          link: "https://www.houstonmechatronics.com/",
        },
        {
          company: "Google",
          tasks: [
            "oiadioahif a jdfio ajdfadoifaj oidfja dauajnh fiaj adiojnvn danub aba suedw  iue nai wuh ah auhd uiad a uadma ija oja a a aa d",
            "aid odda dadfda ida jai odjf aud a q2uw nwnsa- wiwi ka,. osos ehe ;sapo  ao9d fqqyue o ewiu  ,z, x id diw iaoa afna ",
            "oiajdfioad adjoiadfjai adodjfioadf ioajdf ad ajio  dfodoqq3hd najki ni wkm iuen uiajk dikdfkimam ccud odadjf apodgifj ;mfifj ja ddjfdi",
          ],
          jobTitle: "Front End Developer",
          startDate: "11/2021",
          endDate: "Current",
          logo: googleImg,
          link: "https://about.google/",
        },
      ],
      selectedExperience: null,
    };
  },
  methods: {
    selectExperience: function (exp) {
      this.selectedExperience = exp;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

$image-height: 20rem;
$image-width: 20.5rem;
$image-reel-square-height: $image-width * 0.15;
$image-reel-square-width: $image-width * 0.15;

.work-experience-wrapper {
  width: 97.5%;
  height: 90%;
  font-family: $vs-code-font;
}

.company-list {
  font-size: 25px;
  // order: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 90%;
  // align-self: flex-start;
}
.company-title {
  color: $senary-color;
}
.text-box-content-section {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  width: 100%;
}
.company-list > div {
  cursor: pointer;
  padding: 5px;
}
.company-list > div:hover {
  background-color: $quinary-color;
  color: $senary-color;
}

.image-section {
  order: 3;
  padding-left: 25px;
  max-height: 20rem;
  max-width: 25rem;
  overflow: hidden;
  padding-right: 25px;
}
.selected-experience {
  background-color: $quinary-color;
  color: $dark-text-color;
  font-weight: bold;
}
li > div {
  cursor: pointer;
  display: block;
  padding: 20px 25px;
}
.description-bullet-points {
  max-width: 90%;
}
.bullet {
  padding: 10px 0px;
  text-align: left;
}
li > div:hover {
  background-color: $quinary-color;
}
.content-section {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  // align-items: center;
  align-self: center;
  width: 80rem;
  height: 30rem;
  color: $light-text-color;
  background-color: $tertiary-color;
}
.experience-text-section {
  padding-left: 15px;
  padding-right: 50px;
  order: 2;
  text-align: center;
  width: 55%;
}
</style>
