<template>
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 17L14 17"
      :stroke="color ?? '#FFFFFF'"
      stroke-width="1"
      stroke-linecap="round"
    />
    <path
      d="M4 12L18 12"
      :stroke="color ?? '#FFFFFF'"
      stroke-width="1"
      stroke-linecap="round"
    />
    <path
      d="M4 7L22 7"
      :stroke="color ?? '#FFFFFF'"
      stroke-width="1"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  name: "menu-svg",
  props: {
    color: {
      type: String,
    },
  },
};
</script>
