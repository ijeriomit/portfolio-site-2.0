<template>
  <div class="projects-wrapper">
    <section-title>
      <template v-slot:section-title-content>
        <div class="section-title-operator">(</div>
        <div class="section-title-title">Projects</div>
        <div class="section-title-operator">)</div>
        <div style="width: 15%" class="section-title-line"></div>
        <div class="section-title-arrow"></div>
        <div class="section-title-operator">{</div>
        <div class="section-title-keyword-1">Projects</div>
        <div class="section-title-operator">}</div>
      </template>
    </section-title>
    <div class="content-section">
      <project-grid :gridData="projectsSections"></project-grid>
    </div>
  </div>
</template>
<script>
import sectionTitle from "@/components/section-title.vue";
import imageProcessingIcon from "@/assets/project-images/section-images/vision-logo.png";
import unityIcon from "@/assets/project-images/section-images/unity.png";
import webDevIcon from "@/assets/project-images/section-images/coding-icon-2.png";
import codingIcon from "@/assets/project-images/section-images/coding-icon.jpg";

import BitComponents from "@/assets/project-images/project-images/bit-components-image.png";
import Epoch from "@/assets/project-images/project-images/player-jumping.png";
import Lab from "@/assets/project-images/project-images/LAB.png";
import MasterMind from "@/assets/project-images/project-images/mastermind-image.png";
import ColorPicker from "@/assets/project-images/project-images/color-picker.png";
import ImageManip from "@/assets/project-images/project-images/image-manip.png";
import Ros from "@/assets/project-images/project-images/ROS.png";

import projectGrid from "@/components/project-grid";

export default {
  name: "projects-section",
  components: {
    "section-title": sectionTitle,
    "project-grid": projectGrid,
  },
  data: function () {
    return {
      projectsSections: [
        {
          title: "Web Dev",
          icon: webDevIcon,
          projects: [
            {
              desc: "",
              title: "Bit Components",
              languages: ["Vue, Node"],
              image: BitComponents,
            },
            {
              desc: "",
              title: "File Tree",
              languages: ["Vue, Node"],
              image: BitComponents,
            },
            {
              desc: "",
              title: "Portfolio-Site",
              languages: ["Vue, Node, Chai, SASS"],
              image: BitComponents,
            },
          ],
        },
        {
          title: "Game Dev",
          icon: unityIcon,
          projects: [
            {
              desc: "",
              title: "Epoch",
              languages: ["Unity3D, C#, Krita, Spriter"],
              image: Epoch,
            },
            {
              desc: "",
              title: "Lab",
              languages: ["Unity3D, C#, Paint3D"],
              image: Lab,
            },
            {
              desc: "",
              title: "MasterMind",
              languages: ["Java, Swing"],
              image: MasterMind,
            },
          ],
        },
        {
          title: "Image/Video ProcessinG",
          icon: imageProcessingIcon,
          projects: [
            {
              desc: "",
              title: "ROS-Video-Recorder",
              languages: ["Python, ROS, PyTest"],
              image: Ros,
            },
            {
              desc: "",
              title: "Image Manipulator",
              languages: ["Python, OpenCV, PyTest"],
              image: ImageManip,
            },
            {
              desc: "",
              title: "Color Picker",
              languages: ["Python, OpenCV"],
              image: ColorPicker,
            },
          ],
        },
        {
          title: "Python and Etc.",
          icon: codingIcon,
          projects: [
            {
              desc: "",
              title: "Advent of Code",
              languages: ["Python", "PyTest"],
              image: codingIcon,
            },
            {
              desc: "",
              title: "Rubix-Cube-Solver",
              languages: ["Python, OpenCV"],
              image: codingIcon,
            },
            {
              desc: "",
              title: "SeleniumDemo",
              languages: ["SeleniumWebDrvier, Python, Vue"],
              image: webDevIcon,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.projects-wrapper {
  width: 90%;
  align-self: center;
}
.content-section {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  height: 75%;
}
.folder {
  display: flex;
  display: none;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 300px;
  font-size: 1.25rem;
  font-weight: bold;
  height: 200px;
  font-family: Consolas, monaco, monospace;
  background-color: #008753cf;
  border-radius: 30px;
}
.button {
  width: 80px;
}
</style>
