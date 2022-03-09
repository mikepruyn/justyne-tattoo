<template>
  <div class='container' v-on:click="$emit('clicked')">
        <div class="button-text">
            {{buttonText}}
        </div>
        <svg class='oval' height="40" width="80">
            <ellipse cx="40" cy="12" rx="40" ry="20" />
        </svg>
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

<style scoped>
.container {
    width: auto;
    height: auto;
    /* border: 1px solid black; */
    /* box-sizing: border-box; */
    user-select: none;
    position: relative;
}
.oval {
    position: relative;
    top: 0;
    left: 0;
}
svg {
    overflow: visible;
}
ellipse {
    fill: transparent;
    stroke: #2c3e50;
    stroke-width: 1;
    transition: fill 0.5s 
}
.button-text {
    z-index: 100;
    position: absolute;
    height: 100%;
    width: 100%;
}
.container:hover ellipse {
    /* stroke-width:2; */
    fill: #2c3e50;
}

.container:hover .button-text{
    color: #e1e5cc;
}
</style>