<template>
  <div>
    
    <h1>Work</h1>
    <div class="imageList">
        <div v-for="image in this.images" :key="image" @click="openLightbox(image)" class="flashImage">
            <Transition name="fade">
              <LazyImage :source="image"/>
            </Transition>
        </div>
    </div>
    <Transition name="fade">
    <Lightbox 
      :showLightbox="showLightbox" 
      :image="selectedImage" 
      @close="showLightbox=false"
      @next="nextImage()"
      @prev="prevImage()"
      ></Lightbox>
    </Transition>
    
  </div>
</template>

<script>
import {getImages} from '../firebase/storage';
import Lightbox from './Lightbox.vue';
import LazyImage from './LazyImage.vue';

export default {
    components: {
      Lightbox,
      LazyImage
    },
    data() {
      return {
        images: [],
        selectedImage: '',
        showLightbox: false,
        selectedIndex: 0,
        showList: false,
        imagesLoaded: {}
      }
    },
    async mounted() {
      this.images = await getImages('work');
      setTimeout(()=>{
        this.showList = true;
      }, 2000);
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
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.image__wrapper.loaded {
  opacity: 1;
  transition: opacity 1s ease;
}
.image__wrapper {
  opacity: 0;
}
</style>