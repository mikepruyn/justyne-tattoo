<template>
  <div>
    <h1>Flash</h1>
    <div class="imageList">
        <div v-for="image in this.images" :key="image">
            <img :src="image" class="flashImage"/>
        </div>
    </div>
  </div>
</template>

<script>
import {getImages} from '../firebase/storage';

export default {
  data() {
    return {
      images: []
    }
  },
  beforeMount() {
    getImages('flash').then(images => {
      this.images = images;
    })
  }
}
</script>

<style>
.flashImage {
  max-height: 60vh;
}
</style>