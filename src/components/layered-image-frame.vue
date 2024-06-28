<template>
  <div ref="wrapper" class="frame-wrapper">
    <div
      :style="{
        backgroundColor: backgroundColor,
      }"
      class="background-layer"
    ></div>
    <div class="image-layer">
      <img
        ref="img"
        :src="imageSrc"
        :style="{
          borderColor: borderColor,
        }"
      />
    </div>
    <div class="floating-frame-layer"></div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const props = defineProps([
  {
    borderColor: String,
    backgroundColor: String,
    horizontalOffset: Number,
    verticalOffset: Number,
    animation: String,
    imageSrc: String,
  },
]);
const wrapper = ref(null);
onMounted(() => {
  let layers = wrapper.value.childNodes;
  // this.$refs["bg"].style = this.backgroundColor;
  // this.$refs["frame"].style = this.frameColor;

  for (let i = 0; i < layers.length; i++) {
    layers[i].style.marginBottom = convertUnit(props.verticalOffset * (i - 1));
    layers[i].style.marginRight = convertUnit(props.horizontalOffset * (i - 1));
  }
});
function convertUnit(value) {
  return value + "rem";
}
//   methods: {
//     convertUnit: function (value) {
//       return value + "rem";
//     },
//   },
</script>
<style lang="scss" scoped>
.layer {
  height: inherit;
  width: inherit;
  position: absolute;
  border-radius: 10px;
}
.background-layer {
  @extend .layer;
  // border: 5px solid white;
  background-color: rgb(196, 196, 153);

  z-index: 0;
}
.image-layer {
  @extend .layer;
  z-index: 0;
}
.floating-frame-layer {
  @extend .layer;
  z-index: 1;
  border-style: solid;
  border-width: 10px;
  box-sizing: border-box;
}
.frame-wrapper {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
img {
  max-width: 100%;
  max-height: 100%;
  position: relative;
  // border-style: solid;
  border-width: 0.5px;
  // box-shadow: 10px 15px 20px rgba(25, 25, 25, 0.1);
  // border-radius: 20px;
}
</style>
