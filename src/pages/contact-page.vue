<template>
  <div id="contact" class="page">
    <section class="title-section">
      <div class="title-section-background"></div>
      <img
        class="matrix-background"
        src="@/assets/white-matrix-background.png"
      />
      <h1 class="heading">
        <span>&lt;div&gt;</span>
        <span> Contact Me </span>
        <span>&lt;/div&gt;</span>
      </h1>
    </section>
    <section class="hire-section">
      <h2 class="sub-heading">
        <div>Work With Me!</div>
        <br />
        <div>Currently accepting these roles:</div>
      </h2>
      <div class="roles">
        <div class="job-type">
          <img src="../assets/clip-art-images/check-mark.svg" /> Contract
        </div>
        <div class="job-type">
          <img src="../assets/clip-art-images/check-mark.svg" /> Full Time
        </div>
        <div class="job-type">
          <img src="../assets/clip-art-images/check-mark.svg" /> Freelance
        </div>
      </div>
    </section>
    <section class="contact-section">
      <img class="memoji" src="../assets/clip-art-images/memoji-laptop.svg" />
      <img class="clip-art" src="@/assets/clip-art-images/wires.png" />

      <form class="contact-form">
        <div class="name-field">
          <label for="name" class="field-title">Name</label>
          <input id="name" placeholder="Enter your name" class="field-input" />
        </div>
        <div class="email-field">
          <label for="email" class="field-title">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            class="field-input"
          />
        </div>
        <div class="subject-field">
          <label for="subject" class="field-title">Subject Line</label>
          <input
            id="subject"
            placeholder="Subject of your message"
            class="field-input"
          />
        </div>
        <div class="message-field">
          <label for="message" class="field-title">Message</label>
          <textarea
            id="message"
            placeholder="Hi, I have a position open for Company X. Would you be interested?"
            class="field-input"
          ></textarea>
        </div>
        <input type="submit" class="submit-button" value="Submit" />
      </form>
    </section>
  </div>
</template>
<script>
export default {
  name: "contact-me",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

$hiring-height: 450px;
$title-height: 400px;
$form-height: 1100px;
$contact-page-height: $title-height + $hiring-height + $form-height;
.page {
  grid-template-rows: $title-height $hiring-height $form-height;
  height: $contact-page-height;
  // row-gap: 7.5%;
}
.title-section {
  grid-row: 1/2;
  max-height: $title-height;
  display: grid;
  overflow: hidden;
  grid-template-columns: 100%;
  grid-template-rows: $title-height;
}
.title-section-background {
  z-index: 1;
  height: $title-height;
  background-color: $primary-color;
  width: 100%;
  opacity: 45%;
  grid-column: 1;
  grid-row: 1;
}
.hire-section {
  grid-row: 2;
  align-self: end;
  justify-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.matrix-background {
  grid-column: 1;
  grid-row: 1;
  width: 100%;
  height: 700px;
  position: relative;
  opacity: 40%;
}

.heading {
  color: $quaternary-color;
  justify-self: center;
  align-self: center;
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  font-family: $heading-font;
  font-size: 3rem;
  font-weight: bold;
}
.sub-heading {
  font-family: $heading-font;
  font-size: 1.5rem;
  font-weight: bold;
  height: fit-content;
  text-align: center;
  span {
    height: 2rem;
  }
}
.contact-form {
  width: 70%;
  height: 100%;
  padding: 75px;
  grid-row: 2;
  grid-column: 2;
  background-color: $quaternary-color;
  color: $secondary-color;
  font-size: $text-size;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 100px 100px 300px 100px;
  justify-self: center;
  justify-content: center;
  column-gap: 5%;
  row-gap: 5%;
  z-index: 1;
}
.field {
  display: flex;
  flex-flow: column nowrap;
  font-family: $vs-code-font;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  input,
  textarea {
    font-size: 1.5rem;
  }
}
.name-field {
  @extend .field;
  grid-column: 1;
  grid-row: 1;
}
.email-field {
  @extend .field;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
}
.subject-field {
  @extend .field;
  grid-column: 1/3;
  grid-row: 2;
}
.message-field {
  @extend .field;
  grid-column: 1/3;
  grid-row: 3;
}
.submit-button {
  grid-column: 1/3;
  grid-row: 4;
  font-size: 2rem;
  font-family: $heading-font;
  align-self: center;
  width: 250px;
  height: 100px;
  border-radius: 15px;
  justify-self: center;
  font-weight: bold;
  background-color: $highlight-color;
  cursor: pointer;
}
.submit-button:hover {
  background-color: $highlight-color;
  transition: all 0.1s ease-in;
  width: 270px;
  height: 110px;
}
.field-input {
  height: 90%;
  font-family: $vs-code-font;
  padding: 15px;
}
.field-title {
  &:after {
    content: "*";
  }
}
.contact-section {
  grid-row: 3;
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  grid-template-rows: 320px 700px;
  position: relative;
  bottom: 250px;
}
.memoji {
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  padding: 0 10%;
}

.job-type {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: $heading-font;
  img {
    width: 75px;
  }
}
.clip-art {
  width: 1000px;
  // grid-column: 1 / 3;
  grid-row: 1/2;
  position: absolute;
  z-index: 1;
}
</style>
