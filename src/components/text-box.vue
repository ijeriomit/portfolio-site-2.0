<template>
  <div class="text-box" :class="animate ? 'animation' : ''">
    <slot name="text-slot"></slot>
  </div>
</template>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.text-box {
  background-color: $quaternary-color;
  border-radius: 30px;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  font-size: $text-size;
}
</style>
