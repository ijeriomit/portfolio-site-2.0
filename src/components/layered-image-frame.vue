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
<script>
export default {
  name: "layered-image-frame",
  props: {
    borderColor: {
      type: String,
      required: false,
      default: () => {
        return "red";
      },
    },
    backgroundColor: {
      type: String,
      required: false,
      default: () => {
        return "red";
      },
    },
    horizontalOffset: {
      type: Number,
      required: false,
      default: () => {
        return 1;
      },
    },
    verticalOffset: {
      type: Number,
      required: false,
      default: () => {
        return 1;
      },
    },
    animation: String,
    imageSrc: String,
  },
  methods: {
    convertUnit: function (value) {
      return value + "rem";
    },
  },
  mounted: function () {
    let layers = this.$refs["wrapper"].childNodes;
    // this.$refs["bg"].style = this.backgroundColor;
    // this.$refs["frame"].style = this.frameColor;

    for (let i = 0; i < layers.length; i++) {
      layers[i].style.marginBottom = this.convertUnit(
        this.verticalOffset * (i - 1)
      );
      layers[i].style.marginRight = this.convertUnit(
        this.horizontalOffset * (i - 1)
      );
    }
  },
};
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
