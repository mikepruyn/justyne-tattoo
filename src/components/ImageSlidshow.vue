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

import { storage, ref, getDownloadURL  } from '../firebase'

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
            return this.images[this.currentImage].url
        }
    },
    mounted () {
        this.loadFlashInOrder();
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
        // loadImagesFromFirebase() {
        //     console.log('loading images from firebase...')
        //     // Create a reference under which you want to list
        //     const listRef = ref(storage, 'flash');

        //     listAll(listRef)
        //         .then((res) => {
        //             console.log('res', res);
        //             this.totalImages = res.items.length;
        //             res.items.forEach(async (itemRef) => {
        //                 console.log('item ref', itemRef)
        //                 let imageUrl = await getDownloadURL(itemRef)
        //                 // All the items under listRef.
        //                 this.images.push(imageUrl);
        //             });
        //         }).catch((error) => {
        //             // Uh-oh, an error occurred!
        //             console.log('error:', error)
        //         });
        // },
        async loadFlashInOrder () {
            const configRef = ref(storage, 'flash/flashConfig.json');
            const configRes = await fetch(await getDownloadURL(configRef));
            const configBlob = await configRes.blob();
            const blobText = await configBlob.text();
            this.configObject = await JSON.parse(blobText);
            console.log('config', this.configObject);

            const flashOrder = this.configObject.flashOrder;
            for (const imgName of flashOrder) {
                console.log(imgName);
                const imgRef = ref(storage, 'flash/'+imgName);
                const downloadUrl = await getDownloadURL(imgRef);
                this.images.push({
                    name: imgName,
                    url: downloadUrl
                })
            }
            this.totalImages = this.images.length;
        },
    }
}
</script>

<style>
.pageCounter {
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
}
.slideshow-controls {
    margin-bottom: 50px;
}
</style>
