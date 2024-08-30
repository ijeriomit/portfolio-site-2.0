<template>
  <div class="page">
    <h1 class="heading">
      <span>&lt;div&gt;</span>
      <span> Contact Me </span>
      <span>&lt;/div&gt;</span>
    </h1>
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
    <FooterSection class="footer"></FooterSection>
  </div>
</template>
<script setup>
import FooterSection from "@/components/footer-section.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";

$hiring-height: 350px;
$title-height: 150px;
$form-height: 1100px;
$contact-page-height: $header-height + $title-height + $hiring-height +
  $form-height + $footer-height;
.page {
  grid-template-rows: $header-height $title-height $hiring-height $form-height $footer-height;
  grid-template-columns: 100vw;
  // height: $contact-page-height;
  background-image: linear-gradient(
    rgba(29, 173, 118, 0.5),
    rgba(29, 173, 118, 0.25),
    rgba(29, 173, 118, 0)
  );
}
.hire-section {
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: end;
  justify-self: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 2;
}

.heading {
  color: $quaternary-color;
  justify-self: center;
  align-self: center;
  grid-column: 1 / 3;
  grid-row: 2;
  z-index: 2;
  font-family: $heading-font;
  font-size: 3rem;
  font-weight: bold;
  span:first-child,
  span:last-child {
    color: $secondary-color;
  }
}
.footer {
  grid-row: 5;
  justify-self: center;
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
  grid-row: 2;
  height: 700px;
  padding: 50px;
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
  z-index: 2;
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
  grid-column: 1 / 3;
  grid-row: 4;
  grid-template-rows: 320px 800px;
  display: grid;
  grid-template-columns: 7.5% 85% 7.5%;
  position: relative;
  bottom: 15%;
}
.memoji {
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  padding: 0 10%;
  z-index: 2;
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
  grid-row: 1/2;
  position: absolute;
  z-index: 1;
}
@media screen and (max-width: $small-screen-width) {
  $small-title-height: 300px;
  $small-page-height: $small-title-height + $hiring-height + $form-height;
  .page {
    grid-template-rows: 125px 200px 300px 1000px 100px;
    height: $small-page-height;
  }
  .clip-art {
    width: 800px;
  }
  .title-section {
    max-height: $small-title-height;
  }
  .title-section-background {
    height: $small-title-height;
  }
  .matrix-background {
    height: $small-title-height;
  }
  .sub-heading {
    font-size: 1.25rem;
    width: 90%;
    justify-self: start;
  }
  .roles {
    justify-self: start;
  }
  .footer {
    align-self: end;
  }
  .job-type {
    font-size: 1.25rem;
    img {
      width: 50px;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $phone-title-height: 150px;
  $phone-form-height: 750px;
  $phone-page-height: 100px + 300px + 600px + 100px;
  .page {
    grid-template-rows: 100px 100px 300px 800px 100px;
    height: unset;
  }
  .title-section {
    max-height: $phone-title-height;
  }
  .title-section-background {
    height: $phone-title-height;
  }
  .matrix-background {
    height: $phone-title-height;
  }
  .heading {
    font-size: 1.75rem;
    align-self: center;
    margin: 0;
    span:first-child,
    span:last-child {
      font-size: 1.25rem;
    }
  }
  .hire-section {
    justify-content: flex-start;
    height: 90%;
  }
  .contact-section {
    height: 100%;
    bottom: -5%;
    grid-template-rows: 160px 750px;
  }
  .contact-form {
    width: 100%;
    height: 550px;
    grid-template-columns: 90%;
    grid-template-rows: 75px 75px 75px 125px 50px;
    padding: 0px;
    column-gap: 0;
    row-gap: 2.5%;
  }
  .field {
    height: 25px;
    width: 90%;
    align-self: center;
    justify-self: center;
    font-size: 1.25rem;

    input,
    textarea {
      font-size: 1rem;
      padding: 10px;
    }
  }
  .name-field {
    @extend .field;
    grid-column: 1;
    grid-row: 1;
  }
  .email-field {
    @extend .field;
    grid-column: 1;
    grid-row: 2;
  }
  .subject-field {
    @extend .field;
    grid-column: 1;
    grid-row: 3;
  }
  .message-field {
    @extend .field;
    grid-column: 1;
    grid-row: 4;
    height: 80%;
  }
  .memoji {
    width: 175px;
  }
  .submit-button {
    grid-row: 5;
    width: 125px;
    height: 50px;
    font-size: 1.25rem;
    justify-self: center;
  }
  .memoji {
    justify-self: center;
  }
  .footer {
    align-self: center;
  }
}
</style>
