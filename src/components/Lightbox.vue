<template>
    <div v-if="showLightbox" class='lightbox'>
        <svg id="close" @click="$emit('close')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
        <img :src="image" alt=""/>
        <svg id="next" @click="$emit('next')" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
        <svg id="prev" @click="$emit('prev')" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g></svg>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        showLightbox: Boolean
    }
}
</script>

<style scoped>
.lightbox {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0vh;
  left: 0vw;
  background-color: rgba(255, 228, 196, .95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
}
#close {
    scale: 1.5;
    position: absolute;
    top: 3vh;
    right: 3vw;
}
#next {
    position: absolute;
    right: 3vw;
}
#prev {
    transform: rotate(180deg);
    position: absolute;
    left: 3vw;
}
</style>