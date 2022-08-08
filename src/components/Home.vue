<template>
  <div>
      <H1>friedgummyworm!</H1>
      <ImageSlideshow />
  </div>
  
</template>

<script>
import ImageSlideshow from './ImageSlidshow.vue'

export default {
  name: 'Home',
  components: {
    ImageSlideshow
  }
}
</script>

<style>
img {
  max-width: 90vw;
  max-height: 90vh;
}
.slideshow-controls {
  display: flex;
  justify-content: center;
}

</style>