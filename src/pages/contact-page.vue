<template>
  <text-box class="contact-me-wrapper">
    <template v-slot:text-slot>
      <form>
        <div
          style="
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
          "
        >
          <div class="field" style="width: 45%">
            <div class="field-title">Name</div>
            <input class="field-input" />
          </div>
          <div class="field" style="width: 45%">
            <div class="field-title">Email</div>
            <input class="field-input" />
          </div>
        </div>
        <div class="field" style="width: 100%">
          <div class="field-title">Subject Line</div>
          <input class="field-input" />
        </div>
        <div class="field" style="width: 100%">
          <div class="field-title">Message</div>
          <input class="message field-input" />
        </div>
      </form>
    </template>
  </text-box>
</template>
<script>
import textBox from "@/components/text-box.vue";

export default {
  name: "contact-me",
  components: {
    "text-box": textBox,
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

.contact-me-wrapper {
  height: 75%;
  width: 75%;
  align-self: center;
  background-color: $tertiary-color;
  color: $secondary-color;
  font-size: $text-size;
}
form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 80%;
  width: 85%;
}
.title {
  font-size: 3.5rem;
  color: $secondary-color;
}

.field {
  display: flex;
  flex-flow: column nowrap;
  // width: 100%;
  justify-content: flex-start;
  font-family: $vs-code-font;
}
.field-input {
  width: 100%;
  height: 50px;
  padding: 15px;
  box-sizing: border-box;
}
.message {
  height: 200px;
  overflow-y: scroll;
}
.field-title {
  &:after {
    content: "*";
  }
}
</style>
