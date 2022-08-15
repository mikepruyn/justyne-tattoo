<template>
  <div>
    <h1>Work</h1>
    <div class="imageList">
        <div v-for="image in this.images" :key="image" @click="openLightbox(image)">
            <img :src="image" class="flashImage"/>
        </div>
    </div>
    <Lightbox 
      :showLightbox="showLightbox" 
      :image="selectedImage" 
      @close="showLightbox=false"
      @next="nextImage()"
      @prev="prevImage()"
      ></Lightbox>
  </div>
</template>

<script>
import {getImages} from '../firebase/storage';
import Lightbox from './Lightbox.vue'

export default {
    components: {
      Lightbox
    },
    data() {
      return {
        images: [],
        selectedImage: '',
        showLightbox: false,
        selectedIndex: 0
      }
    },
    async mounted() {
      this.images = await getImages('work');
    },
    methods: {
      openLightbox(image) {
        this.selectedIndex = this.images.findIndex((img)=>img==image);
        this.selectedImage = image;
        this.showLightbox = true;
      },
      nextImage() {
        if (this.selectedIndex == (this.images.length - 1)) {
          this.selectedIndex = 0
        } else {
          this.selectedIndex += 1;
        }
        this.selectedImage = this.images[this.selectedIndex];
      },
      prevImage() {
        if (this.selectedIndex == 0) {
          this.selectedIndex = this.images.length - 1
        } else {
          this.selectedIndex -= 1;
        }
        this.selectedImage = this.images[this.selectedIndex];
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
</style>