<template>
  <div>
      <draggable>
          <div v-for="image in images" :key="image.name">
              <img :src="image.url"  class="draggable-image"/>
          </div>
      </draggable>
  </div>
</template>

<script>
import { storage, ref, listAll, getDownloadURL  } from '../firebase'
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
    data: function () {
        return {
            name: 'ManageFlash',
            images: [
            ],
            totalImages: null,
        }
    },
    methods : {
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
        },
        async loadFlashInOrder () {
            const configRef = ref(storage, 'flash/flashConfig.json');
            const configRes = await fetch(await getDownloadURL(configRef));
            const configBlob = await configRes.blob();
            const blobText = await configBlob.text();
            const configObject = await JSON.parse(blobText);
            console.log('config', configObject);

            const flashOrder = configObject.flashOrder;
            for (const imgName of flashOrder) {
                console.log(imgName);
                const imgRef = ref(storage, 'flash/'+imgName);
                const downloadUrl = await getDownloadURL(imgRef);
                this.images.push({
                    name: imgName,
                    url: downloadUrl
                })
            }
        }
    },
    mounted() {
        // this.loadImagesFromFirebase();
        this.loadFlashInOrder();
    }
}
</script>

<style>
.draggable-image {
    height: 200px;
    /* width: auto; */
}
</style>