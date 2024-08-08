<template>
  <RouterLink class="logo" :to="routes[0]">
    <img class="logo-icon" src="@/assets/clip-art-images/ijeri-logo-icon.png" />
    <img class="logo-text" src="@/assets/clip-art-images/ijeri-logo-text.png" />
  </RouterLink>
</template>
<script setup>
import { RouterLink } from "vue-router";
import { routes } from "@/main.js";
</script>
<style scoped lang="scss"></style>
