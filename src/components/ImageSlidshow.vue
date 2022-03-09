<template>
  <div class="slidshowContainer">
      <div class='slideshow-controls'>
        <NextButton 
            buttonText="Prev"
            v-on:clicked="prevImg"
        ></NextButton>
        <div class="pageCounter">
          {{currentImage+1}} / {{totalImages}}
        </div>
        <NextButton 
            buttonText="Next"
            v-on:clicked="nextImg"
        ></NextButton>
      </div>
      <img :src="currentImagePath" />
  </div>
</template>

<script>
import NextButton from './NextButton.vue'
export default {
    components: {
        NextButton
    },
    data: function () {
        return {
            images: [
                'IMG_0077.png',
                'IMG_0078.png',
                'IMG_0081.png',
                'IMG_0082.png',
                'IMG_0083.png',
                'IMG_0084.png',
            ],
            totalImages: null,
            counter: 0,
        }
    },
    computed: {
        currentImage () {
            return this.counter % this.images.length
        },
        currentImagePath () {
            return require('../assets/flash/' + this.images[this.currentImage])
        }
    },
    mounted () {
        this.totalImages = this.images.length;
    },
    methods: {
        prevImg () {
            if (this.counter <=0) {
                this.counter = this.totalImages -1
            } else {
                this.counter = this.counter - 1;
            }
            
        },
        nextImg () {
            this.counter = this.counter + 1;
        }
    }
}
</script>

<style>
.pageCounter {
    padding-left: 12px;
    padding-right: 12px;
}
.slideshow-controls {
    margin-bottom: 50px;
}
</style>
