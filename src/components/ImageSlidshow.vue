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

import { storage, ref, listAll, getDownloadURL  } from '../firebase'

export default {
    components: {
        NextButton
    },
    data: function () {
        return {
            images: [
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
            return this.images[this.currentImage]
        }
    },
    mounted () {
        this.loadImagesFromFirebase();
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
        },
        loadImagesFromFirebase() {
            console.log('loading images from firebase...')
            // Create a reference under which you want to list
            const listRef = ref(storage, 'flash');

            listAll(listRef)
                .then((res) => {
                    console.log('res', res);
                    this.totalImages = res.items.length;
                    res.items.forEach(async (itemRef) => {
                        console.log('item ref', itemRef)
                        let imageUrl = await getDownloadURL(itemRef)
                        // All the items under listRef.
                        this.images.push(imageUrl);
                    });
                }).catch((error) => {
                    // Uh-oh, an error occurred!
                    console.log('error:', error)
                });
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
