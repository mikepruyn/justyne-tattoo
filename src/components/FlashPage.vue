<template>
  <div>
    <h1>Flash</h1>
    <div class="imageList">
        <div v-for="image in images" :key="image.name">
            <img :src="image.url" class="flashImage"/>
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
  async beforeMount() {
    this.images = await getImages('flash');
  }
}
</script>

<style>
.flashImage {
  max-height: 60vh;
}
</style>