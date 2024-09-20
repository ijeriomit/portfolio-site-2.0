<template>
  <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <floating-header class="header"></floating-header>
    <section class="hire-section">
      <h1 class="heading">
        <span>&lt;div&gt;</span>
        <span> Contact Me </span>
        <span>&lt;/div&gt;</span>
      </h1>
      <h2 class="tagline">
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

      <form
        action="https://public.herotofu.com/v1/285cfd30-671d-11ef-a47e-99b828684d15"
        method="post"
        accept-charset="UTF-8"
        class="contact-form"
      >
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
      <FooterBar class="footer"></FooterBar>
    </section>
  </div>
</template>
<script setup>
import FooterBar from "@/components/footer-bar.vue";
import FloatingHeader from "@/components/floating-header.vue";
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$hiring-height: 500px;
$contact-height: 850px;
.page {
  grid-template-rows: $header-height $hiring-height $contact-height + $footer-height;
  grid-template-columns: 100vw;
  row-gap: 2.5%;
  z-index: 2;
}
.header {
  grid-row: 1;
  height: $header-height;
}

.hire-section {
  @extend .page-section;
  grid-row: 2;
  width: 100vw;
  padding-top: 75px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .heading {
    color: $quaternary-color;
    background-color: transparent;
    gap: 30px;
    font-family: $heading-font;
    font-size: $heading-text-size;
    font-weight: bold;
    span:first-child,
    span:last-child {
      color: $secondary-color;
    }
  }
  .tagline {
    font-family: $heading-font;
    font-size: $text-size;
    font-weight: bold;
    height: fit-content;
    text-align: center;
  }
  .job-type {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: $text-size;
    font-weight: bold;
    font-family: $heading-font;
    img {
      width: 75px;
    }
  }
}
.contact-section {
  @extend .page-section;
  grid-row: 3;
  grid-template-rows: 300px 700px $footer-height;
  display: grid;
  grid-template-columns: 7.5vw 85vw 7.5vw;
  margin-top: -12.5%;
  scroll-snap-align: end;
  .contact-form {
    width: 60%;
    grid-row: 2;
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
    row-gap: 2.5%;

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
      font-size: $sub-heading-text-size;
      font-family: $heading-font;
      align-self: center;
      width: 200px;
      height: 75px;
      border-radius: 15px;
      justify-self: center;
      font-weight: bold;
      background-color: $highlight-color;
      cursor: pointer;
    }
    .submit-button:hover {
      color: $secondary-color;
      transition: all 0.1s ease-in;
      width: 210px;
      height: 80px;
    }
    .field-input {
      height: 90%;
      font-family: $text-font;
      padding: 15px;
    }
    .field-title {
      font-family: $heading-font;
      &:after {
        content: "*";
      }
    }
  }
  .memoji {
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
    align-self: end;
    padding: 0 17.5%;
    width: 275px;
  }
  .footer {
    grid-row: 3;
    grid-column: 2;
    align-self: end;
  }
}

.field {
  display: flex;
  flex-flow: column nowrap;
  font-family: $text-font;
  height: 100%;
  width: 100%;
  font-size: $text-size;
  input,
  textarea {
    font-size: $text-size;
  }
}

.clip-art {
  width: 1000px;
  position: absolute;
  top: 15vh;
  z-index: 1;
}
@media screen and (max-width: $laptop-screen-width) {
  $hiring-height: 500px;
  $contact-height: 750px;
  .page {
    grid-template-rows: $header-height-laptop-screen $hiring-height $contact-height + $footer-height;
  }
  .hire-section {
    .heading {
      font-size: $heading-text-size-laptop-screen;
    }
    .tagline {
      font-size: $text-size-laptop-screen;
    }
    .job-type {
      font-size: $text-size-laptop-screen;
    }
  }
  .field {
    font-size: $text-size-laptop-screen;
    input,
    textarea {
      font-size: $text-size-laptop-screen;
    }
  }
  .contact-section {
    grid-template-rows: 300px 650px $footer-height;
    margin-top: -15%;

    .contact-form {
      font-size: $text-size-laptop-screen;

      grid-template-rows: 100px 100px 250px 75px;
      height: 525px;
      .submit-button {
        font-size: $sub-heading-text-size-laptop-screen;
        width: 175px;
        height: 60px;
      }
      .submit-button:hover {
        width: 185px;
        height: 70px;
      }
    }
    .footer {
      align-self: start;
    }
  }
}
@media screen and (max-width: $small-screen-width) {
  $hiring-height: 400px;
  $contact-height: 750px;
  .page {
    grid-template-rows: $header-height-small-screen $hiring-height $contact-height + $footer-height;
  }
  .hire-section {
    .heading {
      font-size: $heading-text-size-small-screen;
    }
    .tagline {
      font-size: $text-size-small-screen;
    }
    .job-type {
      font-size: $text-size-small-screen;
    }
  }
  .field {
    font-size: $text-size-small-screen;
    input,
    textarea {
      font-size: $text-size-small-screen;
    }
  }
  .contact-section {
    grid-template-rows: 300px 625px $footer-height;
    margin-top: -15%;

    .memoji {
      width: 215px;
      padding: 0 15%;
    }
    .contact-form {
      font-size: $text-size-small-screen;

      grid-template-rows: 80px 80px 225px 75px;
      height: 475px;
      .submit-button {
        font-size: $sub-heading-text-size-small-screen;
        width: 175px;
        height: 60px;
      }
      .submit-button:hover {
        width: 185px;
        height: 70px;
      }
    }
    .footer {
      align-self: start;
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $phone-form-height: 750px;
  $phone-page-height: 100px + 300px + 600px + 100px;
  .page {
    grid-template-rows: 100px 100px 300px 800px 100px;
    height: unset;
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
    grid-column: 1;
    grid-row: 1;
  }
  .email-field {
    grid-column: 1;
    grid-row: 2;
  }
  .subject-field {
    grid-column: 1;
    grid-row: 3;
  }
  .message-field {
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
