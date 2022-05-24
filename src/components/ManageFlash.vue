<template>
  <div>
      <draggable>
          <div v-for="image in images" :key="image">
              <img :src="image"  class="draggable-image"/>
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
        }
    },
    mounted() {
        this.loadImagesFromFirebase();
    }
}
</script>

<style>
.draggable-image {
    height: 200px;
    /* width: auto; */
}
</style>