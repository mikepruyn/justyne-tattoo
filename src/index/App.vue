<template>
  <div id="app">
    <!-- <Home/> -->
    <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
/* @font-face {
  font-family: "Prince Valient";
  src: local("Prince Valient"),
   url(./assets/fonts/prince-valiant/Prince-Valiant.ttf) format("truetype");
}
@font-face {
  font-family: "Baldur";
  src: local("Baldur"),
   url(./assets/fonts/baldur/Baldur.ttf) format("truetype");
} */
@font-face {
  font-family: "Cardinal";
  src: local("Cardinal"),
   url(../assets/fonts/cardinal/Cardinal.ttf) format("truetype");
}
/* @font-face {
  font-family: "Teutonic";
  src: local("Teutonic"),
   url(./assets/fonts/teutonic/teutonic1.ttf) format("truetype");
} */

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
