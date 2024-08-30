<template>
  <div>
    <div class="image-container">
      <img
        v-if="!isVideo(previewMedia)"
        class="media"
        :src="previewMedia"
        alt="Image"
        @click="showPreview = true"
      />
      <video
        v-else
        :key="previewMedia"
        class="media"
        alt="Video"
        @click="showPreview = true"
      >
        <source :src="previewMedia" type="video/mp4" />
      </video>
      <div v-show="props.mediaArray.length != 1" class="gallery-buttons">
        <button @click="prevMedia()" class="prev">
          <img src="@/assets/clip-art-images/chevron_black.svg" />
        </button>
        <button
          class="media-slide"
          v-for="(media, index) in props.mediaArray"
          :key="index"
          :class="{ active: media == previewMedia }"
          @click="setPreview(media)"
        ></button>
        <button @click="nextMedia()" class="next">
          <img src="@/assets/clip-art-images/chevron_black.svg" />
        </button>
      </div>
    </div>
    <div class="modal" v-if="showPreview">
      <span class="close" @click="showPreview = false"> &times; </span>
      <button
        v-show="props.mediaArray.length != 1"
        @click="prevMedia()"
        class="prev"
      >
        <img src="@/assets/clip-art-images/chevron_white.svg" />
      </button>
      <img
        v-if="!isVideo(previewMedia)"
        class="media"
        :src="previewMedia"
        alt="Preview"
      />
      <video v-else :key="previewMedia" class="media" controls>
        <source :src="previewMedia" type="video/mp4" />
      </video>
      <button
        v-show="props.mediaArray.length != 1"
        @click="nextMedia()"
        class="next"
      >
        <img src="@/assets/clip-art-images/chevron_white.svg" />
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(["mediaArray"]);
const previewMedia = ref(props.mediaArray[0]);
const showPreview = ref(false);

function isVideo(media) {
  return media.endsWith(".mp4") || media.endsWith(".mov");
}
function prevMedia() {
  const prevMediaIndex =
    props.mediaArray.indexOf(previewMedia.value) == 0
      ? props.mediaArray.indexOf(previewMedia.value)
      : props.mediaArray.indexOf(previewMedia.value) - 1;
  setPreview(props.mediaArray[prevMediaIndex]);
}
function nextMedia() {
  const newMediaIndex =
    props.mediaArray.indexOf(previewMedia.value) == props.mediaArray.length - 1
      ? props.mediaArray.indexOf(previewMedia.value)
      : props.mediaArray.indexOf(previewMedia.value) + 1;
  setPreview(props.mediaArray[newMediaIndex]);
}
function setPreview(media) {
  previewMedia.value = media;
}
</script>
<style lang="scss">
@import "@/scss/variables.scss";
@import "@/scss/styles.scss";

.image-container {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
}

.media {
  cursor: pointer;
  max-height: 90%;
  max-width: 100%;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  .prev {
    background-color: transparent;
    border-radius: 0;
    width: 125px;
    border: none;
    cursor: pointer;
    align-self: center;
  }
  .prev:hover {
    width: 130px;
  }
  .next {
    @extend .prev;
    transform: rotate(180deg);
  }
}

.modal .media {
  margin: 50px;
  display: block;
  max-width: 80%;
  max-height: 80%;
}
.gallery-buttons {
  display: flex;
  flex-flow: row nowrap;
  max-width: 100%;
  justify-content: center;
  gap: 2.5%;
  max-height: 5%;
  align-items: center;
  .prev {
    background-color: transparent;
    border-radius: 0;
    width: 50px;
    border: none;
    cursor: pointer;
  }
  .prev:hover {
    width: 55px;
  }
  .next {
    @extend .prev;
    transform: rotate(180deg);
  }
}
.media-slide {
  border-radius: 100%;
  border: none;
  height: 15px;
  width: 15px;
  cursor: pointer;
}
.active {
  background-color: darkgray;
}

.close {
  color: #fff;
  position: absolute;
  top: 100px;
  right: 100px;
  padding: 20px;
  font-size: 100px;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: #ccc;
  text-decoration: none;
  cursor: pointer;
}
.gallery-buttons {
  margin-top: 10px;
}
@media screen and (max-width: $small-screen-width) {
  .image-container {
    height: fit-content;
  }
}
</style>
