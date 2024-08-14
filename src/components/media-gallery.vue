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
      <div class="gallery-buttons">
        <button
          v-for="(media, index) in props.mediaArray"
          :key="index"
          :class="{ active: media == previewMedia }"
          @click="setPreview(media)"
        ></button>
      </div>
    </div>
    <div class="modal" v-if="showPreview">
      <span class="close" @click="showPreview = false"> &times; </span>
      <img
        v-if="!isVideo(previewMedia)"
        class="media"
        :src="previewMedia"
        alt="Preview"
      />
      <video v-else :key="previewMedia" class="media" controls>
        <source :src="previewMedia" type="video/mp4" />
      </video>
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
function setPreview(media) {
  previewMedia.value = media;
}
</script>
<style>
.image-container {
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: space-between;
}

.media {
  cursor: pointer;
  height: 85%;
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
}

.modal .media {
  margin: auto;
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
}
.gallery-buttons button {
  border-radius: 100%;
  border: none;
  height: 20px;
  width: 20px;
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
</style>
