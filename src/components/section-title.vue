<template>
  <div class="section-title">
    <slot name="section-title-content"> </slot>
    <!-- <div class="brackets" style="order: 4;">{</div> -->
  </div>
</template>
<script>
export default {
  name: "section-title",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

$title-top-offset: 2rem;
$title-bottom-padding: 2rem;
$title-text-size: 3rem;

.section-title {
  font-size: $title-text-size;
  align-self: center;
  padding-top: $title-top-offset;
  padding-bottom: $title-bottom-padding;
  font-weight: normal;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  color: black;
  font-family: Consolas, monaco, monospace;
  justify-content: center;
  // background-color: ;

  .spacing {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .section-title-line {
    background-color: $primary-color;
    height: 0.2rem;
    width: 30%;
    margin-left: 20px;
  }
  .section-title-arrow {
    @extend .spacing;
    color: $primary-color;
    position: relative;
    bottom: 3px;
    align-self: center;
    &:after {
      content: ">";
    }
  }
  .section-title-keyword-1 {
    @extend .spacing;

    color: $quinary-color;
  }
  .section-title-keyword-2 {
    @extend .spacing;

    color: $quaternary-color;
  }
  .section-title-operator {
    @extend .spacing;

    color: $quinary-color;
  }
  .section-title-title {
    @extend .spacing;

    font-weight: bold;
  }
  .section-title-keyword-1-alt {
    @extend .section-title-keyword-1;
    color: $senary-color;
  }
  .section-title-keyword-2-alt {
    @extend .section-title-keyword-2;

    color: $secondary-color;
  }
  .section-title-title-alt {
    @extend .section-title-title;

    color: $tertiary-color;
  }
  .section-title-operator-alt {
    @extend .section-title-operator;
    color: $possible-grey-color;
  }
}
@media screen and (max-width: $small-screen-width) {
  .section-title {
    font-size: $large-text-size;
    flex-flow: column nowrap;
  }
  .section-title-line {
    display: none;
  }
  .section-title-arrow {
    display: none;
  }
  .section-title-keyword-2 {
    display: none;
  }
  .section-title-keyword-1 {
    display: none;
  }
  .section-title-operator {
    display: none;
  }
  .spacing {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
