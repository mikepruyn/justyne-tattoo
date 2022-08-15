<template>
  <div>
    <h1>Work</h1>
    <div class="imageList">
        <div v-for="image in this.images" :key="image" @click="openLightbox(image)">
            <img :src="image" class="flashImage"/>
        </div>
    </div>
    <div v-if="showLightbox" class='lightbox'>
      <img :src="selectedImage" alt=""/>
      <button @click="showLightbox=false;">Close</button>
    </div>
  </div>
</template>

<script>
import {getImages} from '../firebase/storage';
export default {
    components: {
    },
    data() {
      return {
        images: [],
        selectedImage: '',
        showLightbox: false
      }
    },
    async mounted() {
      this.images = await getImages('work');
    },
    methods: {
      openLightbox(image) {
        this.selectedImage = image;
        this.showLightbox = true;
      }
    }
}
</script>

<style scoped>
.imageList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.flashImage {
  object-fit: cover;
  width: 30vw;
  height: 30vw;
}
.lightbox {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0vh;
  left: 0vw;
  background-color: bisque;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
}
</style>