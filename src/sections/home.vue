<template>
  <section class="home-wrapper">
    <img
      class="memoji"
      src="@/assets/clip-art-images/memoji-wave.svg"
      alt="cartoon waving"
    />
    <h1 class="title">
      <div class="typewriter">HI, I AM</div>
      <div class="delay typewriter">IJERI OMITOGUN!</div>
    </h1>
    <p class="subtitle">Frontend Developer / Software Engineer / UX Designer</p>
    <a
      class="resume-button"
      href="https://yellow-anabal-39.tiiny.site/"
      target="_blank"
    >
      <button>RESUME</button>
    </a>
    <div class="button-row">
      <a
        class="social-link"
        href="https://www.linkedin.com/in/ijeri-omitogun/"
        target="_blank"
      >
        <img src="@/assets/link-images/linkedin.svg" />
      </a>
      <a
        class="social-link"
        href="https://github.com/ijeriomit"
        target="_blank"
      >
        <img src="@/assets/link-images/github.svg" />
      </a>
      <a
        class="social-link"
        href="https://medium.com/@jeri-omit"
        target="_blank"
      >
        <img src="@/assets/link-images/medium.svg" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "home-section",
};
</script>
<style lang="scss" scoped>
@import "@/scss/variables.scss";
.home-wrapper {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 175px 200px 75px;
  max-width: 70%;
  max-height: 90%;
  align-self: center;
}
.memoji {
  order: 1;
  width: 320px;
  position: relative;
  grid-column: 1/1;
  grid-row: 1/3;
  align-self: center;
  justify-self: end;
  margin: 0 10px;
}
.button-row {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  grid-column: 2/2;
  grid-row: 2/2;
  align-self: end;
  max-width: fit-content;
  justify-self: start;
  position: relative;
  left: 175px;
  gap: 10px;
}
.resume-button {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  align-self: end;
  max-width: fit-content;
  margin-left: 25px;
}
.resume-button > button {
  background-color: $primary-color;
  color: $secondary-color;
  width: 125px;
  height: 60px;
  border-radius: 15%;
  border: none;
  cursor: pointer;
  font-family: $text-font;
  font-size: 20px;
}
.resume-button > button:hover {
  background-color: #025e3b;
  width: 130px;
  height: 62.5px;
  font-weight: 400;
  transition: all 0.1s ease-in;
}
.social-link {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  align-self: end;
  margin: 0 15px;
  cursor: pointer;
  max-width: fit-content;
}
.social-link img {
  width: 50px;
}
.title {
  color: $quaternary-color;
  font-family: $vs-code-font;
  font-weight: bold;
  font-size: 3rem;
  grid-column: 2/2;
  grid-row: 1/1;
  align-self: end;
  margin: 0 0 0 30px;
}
.title div {
  max-width: fit-content;
  margin-left: 0;
  margin-right: 0;
}
.subtitle {
  color: $primary-color;
  font-family: $vs-code-font;
  font-weight: bold;
  font-size: 2rem;
  grid-column: 2/2;
  grid-row: 2/2;
  align-self: start;
  margin-left: 30px;
  max-width: fit-content;
}

.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid transparent; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3s steps(40, end), blink-caret 0.5s step-end 3;
}

.delay {
  // width: 0;
  animation: hide 1.9s steps(1, end), typing 3s steps(40, end) 1.5s,
    blink-caret 0.5s step-end 1.5s 7;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
    border-color: transparent;
  }
}

@keyframes hide {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(250, 250, 250);
  }
}

@media screen and (max-width: $phone-screen-width) {
  $left-side-padding: 20px;
  .button-row {
    grid-column: 2 / 3;
    grid-row: 3 / 3;
    margin-left: $left-side-padding;
    align-items: center;
    justify-content: flex-start;
    justify-self: start;
    left: 0px;
  }
  .title {
    font-size: 1.3rem;
    margin-left: $left-side-padding;
    margin-bottom: 5px;
  }
  .subtitle {
    font-size: 1rem;
    margin-left: $left-side-padding;
    margin-top: 5px;
  }
  .home-wrapper {
    grid-template-columns: 30% 70%;
    grid-template-rows: 60px 75px 60px;
  }
  .social-link img {
    width: 35px;
  }
  .social-link {
    grid-column: 2/3;
    margin: 0 15px;
    cursor: pointer;
  }
  .social-link:first-child {
    margin-left: 0px;
  }
  .resume-button > button {
    width: 80px;
    height: 40px;
    font-size: 16px;
    margin: 0 15px 0 15px;
    cursor: pointer;
  }
  .resume-button {
    grid-column: 1 / 2;
    grid-row: 3 / 3;
    align-self: end;
    justify-self: center;
    margin: 0;
  }
  .memoji {
    align-self: baseline;
    margin: 0;
    width: 120px;
    justify-self: start;
  }
}
@media screen and (max-width: $small-screen-width) {
  .home-wrapper {
    width: 100%;
  }
}
</style>
