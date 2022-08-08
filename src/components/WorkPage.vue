<template>
  <div>
    <h1>Work</h1>
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
    components: {
    },
    data() {
      return {
        images: []
      }
    },
    async mounted() {
      this.images = await getImages('work');
    }
}
</script>

<style>

</style>