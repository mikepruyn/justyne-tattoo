<template>
  <div id="app">
    <h1>Justyne's Admin Page</h1>
    <ManageFlash/>
  </div>
</template>

<script>
import ManageFlash from '../components/ManageFlash.vue';
// import Home from '../components/Home.vue';

export default {
  components: {
    ManageFlash
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Cardinal";
  src: local("Cardinal"),
   url(../assets/fonts/cardinal/Cardinal.ttf) format("truetype");
}

html {
  cursor: url('../assets/imgs/wand1.png'), auto;
}
body {
  background-color: #e1e5cc;
}
button {
  cursor: inherit;
}

#app {
  font-family: "Cardinal", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;
}
h1 {
  font-size: 64px;
  font-weight: normal;
}
</style>
