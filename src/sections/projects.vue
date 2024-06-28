<template>
  <div class="projects-wrapper">
    <div class="content-section">
      <!-- <project-grid></project-grid> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "projects-section",
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
