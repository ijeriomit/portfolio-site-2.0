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
      <!-- <project-grid></project-grid> -->
    </div>
  </div>
</template>
<script>
import sectionTitle from "@/components/section-title.vue";

export default {
  name: "projects-section",
  components: {
    "section-title": sectionTitle,
  },
  data: function () {
    return {};
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
