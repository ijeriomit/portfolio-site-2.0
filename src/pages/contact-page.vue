<template>
  <img class="clip-art" src="@/assets/clip-art-images/wires.png" />
  <div class="page">
    <floating-header class="header"></floating-header>
    <section class="hire-section">
      <h1 class="heading">Contact Me</h1>
      <h2 class="tagline">Work With Me! Let's build something together.</h2>
    </section>
    <section class="contact-section">
      <form @submit="sendEmail" ref="form" class="contact-form">
        <div class="field">
          <label for="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            class="field-input"
          />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            class="field-input"
          />
        </div>
        <div class="field">
          <label for="subject">Subject Line</label>
          <input
            id="subject"
            name="subject"
            placeholder="Subject of your message"
            class="field-input"
          />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Hi, I have a position open for Company X. Would you be interested?"
            class="field-input"
          ></textarea>
        </div>
        <input type="submit" class="submit-button" value="Submit" />
      </form>
    </section>
    <FooterBar class="footer"></FooterBar>
  </div>
</template>
<script setup>
import FooterBar from "@/components/footer-bar.vue";
import FloatingHeader from "@/components/floating-header.vue";
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const form = ref(null);
const sendEmail = function () {
  emailjs
    .sendForm("service_jxeg3ml", "template_jtpz3xi", form.value, {
      publicKey: "TLQ0czcoVVqBfXDZf",
    })
    .then(
      (result) => {
        console.log("Success", result);
      },
      (error) => {
        console.error("Failed... ", error);
      }
    );
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

$hiring-height: 20%;
$contact-height: 55%;
.page {
  display: flex;
  flex-flow: column nowrap;
  z-index: 2;
  height: 100vh;
  gap: 10px;
  overflow-y: auto;
  scroll-snap-type: none;
}
.header {
  grid-row: 1;
}

.memoji {
  grid-row: 1;
  grid-column: 2;
  justify-self: end;
  align-self: end;
  width: 100px;
}
.hire-section {
  grid-row: 2;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: $header-height;
  height: 15vh;
  .heading {
    color: $quaternary-color;
    background-color: transparent;
    gap: 30px;
    font-family: $heading-font;
    font-size: $heading-text-size;
    font-weight: bold;
    margin: 0;
    height: fit-content;
    margin: 10px;
  }
  .tagline {
    font-family: $heading-font;
    font-size: $text-size;
    font-weight: bold;
    height: fit-content;
    text-align: center;
    margin: 5px;
    font-style: italic;
  }
  .roles {
    display: flex;
    flex-flow: row nowrap;
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
  grid-row: 3;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  display: grid;
  align-self: center;
  height: 55vh;
  .contact-form {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
    justify-self: center;
    display: flex;
    flex-flow: column nowrap;
    row-gap: 2.5%;
    padding: 20px 10px;
    align-items: center;
    justify-content: center;
    font-size: $sub-text-size;
    width: 30%;
    height: 90%;
    border-radius: 15px;
    background-color: $quaternary-color;
    color: $secondary-color;

    .submit-button {
      font-size: $sub-text-size;
      font-family: $heading-font;
      align-self: center;
      height: 40px;
      flex-shrink: 0;
      width: 110px;
      border-radius: 10px;
      font-weight: bold;
      background-color: $highlight-color;
      cursor: pointer;
      margin: 10px 0px;
    }
    .submit-button:hover {
      color: $secondary-color;
      transition: all 0.1s ease-in;
    }
    .field {
      display: flex;
      flex-flow: column nowrap;
      font-family: $text-font;
      height: fit-content;
      width: 90%;
      font-size: $text-size;
      input {
        font-size: $sub-text-size;
        font-family: $text-font;
        padding: 5px;
        height: 25px;
      }
      textarea {
        font-size: $sub-text-size;
        font-family: $text-font;
        padding: 5px;
        height: 100px;
      }
      label {
        font-size: $sub-text-size;
        margin: 5px 0;
        font-family: $heading-font;
        &:after {
          content: "*";
        }
      }
    }
  }
}

.footer {
  grid-row: 4;
  grid-column: 1;
  align-self: center;
  margin-top: 30px;
}
.clip-art {
  width: 1000px;
  position: absolute;
  top: 15vh;
  z-index: 1;
}
@media screen and (max-width: $laptop-screen-width) {
  .page {
    grid-template-rows: 10% 20% 60% 10%;
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
    .contact-form {
      font-size: $text-size-laptop-screen;

      .submit-button {
        font-size: $sub-heading-text-size-laptop-screen;
        width: 150px;
        height: 100px;
      }
    }
    // .footer {
    //   align-self: start;
    // }
  }
}
@media screen and (max-width: $small-screen-width) {
  // $hiring-height: 400px;
  // $contact-height: 750px;
  .page {
    grid-template-rows: 10% 15% 68% 7%;
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

  .contact-section {
    .contact-form {
      font-size: $text-size-small-screen;
      height: 85%;
      width: 35%;

      .submit-button {
        font-size: $sub-heading-text-size-small-screen;
        height: 50px;
        width: 100px;
      }
      .field {
        font-size: $text-size-small-screen;
        input,
        textarea {
          height: 25px;
          font-size: $sub-text-size-small-screen;
          padding: 2.5px;
        }
        textarea {
          height: 50px;
        }
      }
    }
  }
}
@media screen and (max-width: $phone-screen-width) {
  $phone-form-height: 750px;
  .page {
    gap: 10px;
  }
  .heading {
    font-size: $heading-text-size-phone-screen;
    align-self: center;
    margin: 0;
  }
  .hire-section {
    gap: 25px;
    padding-top: 5%;
    justify-content: flex-start;
    .tagline {
      width: 90%;
    }
  }
  .contact-section {
    height: 65%;
    margin: 0;
    display: flex;
    justify-content: center;
    .contact-form {
      align-self: center;
      display: flex;
      flex-flow: column nowrap;
      width: 80%;
      padding: 0px;
      justify-content: space-evenly;
      gap: 0%;
      .field {
        height: fit-content;
        overflow: hidden;
        width: 90%;
        align-self: center;
        justify-self: center;
        font-size: $text-size-phone-screen;

        input,
        textarea {
          font-size: $sub-text-size-phone-screen;
          padding: 10px;
        }
        textarea {
          height: 75px;
        }
        input {
          height: fit-content;
        }
      }
      .submit-button {
        height: 45px;
        width: 125px;
        font-size: $text-size-phone-screen;
        justify-self: center;
      }
    }
  }
  .footer {
    align-self: center;
    height: 5%;
    justify-content: space-evenly;
    width: 70%;
  }
}
</style>
