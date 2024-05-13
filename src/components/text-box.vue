<template>
  <div class="text-box" :class="animate ? 'animation' : ''">
    <slot name="text-slot"></slot>
  </div>
</template>
<script>
export default {
  name: "text-box",
  props: {
    animate: Boolean,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.text-box {
  background-color: grey;
  border-radius: 30px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 15px rgba(25, 25, 25, 0.1);
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  font-size: $text-size;
}
.text {
  width: 90%;
  height: 90%;
  overflow: hidden;
}
</style>
