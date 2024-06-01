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
    <div class="button-row">
      <button class="resume-button">RESUME</button>
      <a class="social-link">
        <img src="@/assets/link-images/linkedin.svg" />
      </a>
      <a class="social-link">
        <img src="@/assets/link-images/github.svg" />
      </a>
      <a class="social-link">
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
  width: 70%;
  height: 90%;
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
  margin: 5px 10px 5px 30px;
}
.resume-button {
  background-color: $primary-color;
  color: $secondary-color;
  width: 125px;
  margin-right: 20px;
  height: 60px;
  border-radius: 15%;
  border: none;
  cursor: pointer;
  font-family: $text-font;
  font-size: 20px;
}
.social-link {
  margin: 10px;
  cursor: pointer;
}
.social-link img {
  width: 40px;
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
  font-size: 1.5rem;
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
  .button-row {
    grid-column: 1/3;
    grid-row: 3/3;
    margin-left: 0px;
    align-items: center;
    justify-content: flex-start;
  }
  .title {
    font-size: 1.3rem;
    margin-left: 10px;
    margin-bottom: 5px;
  }
  .subtitle {
    font-size: 1rem;
    margin-left: 10px;
    margin-top: 5px;
  }
  .home-wrapper {
    grid-template-columns: 30% 70%;
    grid-template-rows: 60px 75px 60px;
  }
  .social-link img {
    width: 25px;
  }
  .social-link {
    grid-column: 2/3;
    right: 0;
    cursor: pointer;
  }
  .resume-button {
    width: 80px;
    height: 40px;
    font-size: 16px;
    margin-left: 20px;
    cursor: pointer;
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
