<template>
  <figure v-lazyload class="image__wrapper">
    <img
      class="image__item"
      :data-url="source"
      @load="$emit('load')"
    >
  </figure>
</template>

<script>
export default {
    name: 'LazyImage',
    props: {
        source: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.image__wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
}
.image__item {
  height: 100% !important;
  width: 100%;
  object-fit: cover;
}
</style>