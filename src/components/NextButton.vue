<template>
  <div class='container' v-on:click="$emit('clicked')">
        <span class="button-text">
            {{buttonText}}
        </span>
        <svg class='oval' height="40" width="80">
            <ellipse cx="40" cy="20" rx="40" ry="20" />
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
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: grid;
    justify-content: center;
    align-content: center;
}
.oval {
    /* position: relative; */
    /* top: 0;
    left: 0; */
    grid-row: 1;
    grid-column: 1;
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
    grid-row: 1;
    grid-column: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.container:hover ellipse {
    /* stroke-width:2; */
    fill: #2c3e50;
}

.container:hover .button-text{
    color: #e1e5cc;
}
</style>