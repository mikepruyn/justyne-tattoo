<template>
  <div class='container' v-on:click="$emit('clicked')">
      <div class="buttonText">
          {{buttonText}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'NextButton',
    data: function () {
        return {
            
        }
    },
    props: {
        buttonText: String
    }
}
</script>

<style>
.container {
    width: 80px;
    height: 24px;
    border: 1px solid black;
    box-sizing: border-box;
    user-select: none;
}
.container:hover{
    border: 2px solid black;
}
</style>