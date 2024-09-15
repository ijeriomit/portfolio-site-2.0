<template>
  <main>
    <RouterView />
  </main>
</template>
<script setup></script>
<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$page-height: 6000px;

body {
  margin: 0;
  overflow: hidden;
}
</style>
