<template>
  <div id="app">
    <div class="center-container">
      <!-- <div id="menu">
        <router-link class='menu-item' to="/">home</router-link>
        <router-link class='menu-item' to="/flash">flash</router-link>
        <router-link class='menu-item' to="/work">work</router-link>
        <a class='menu-item' href="https://friedgummyworm.bigcartel.com/" target="blank">shop</a>
        <router-link class='menu-item' to="/booking">book!</router-link>
        <router-link class='menu-item' to="/about">about</router-link>
        <div class='menu-item'>policies/F.A.Q.</div>
      </div> -->
      <ComingSoon></ComingSoon>
    </div>
    
    
    <!-- <router-view/> -->
    
  </div>
</template>

<script>
import ComingSoon from '../components/ComingSoon.vue';

export default {
  name: 'App',
  components: {
    ComingSoon
  },
  data() {
    return {
      images: []
    }
  },
  mounted() {
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
  margin: 0;
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
  font-size: 20px;
}
h1 {
  font-size: 64px;
  font-weight: normal;
}
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
#menu {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  max-width: 800px;
}
.menu-item {
  text-decoration: none;
  font-size: 24px;
  padding: 12px;
  cursor: inherit;
  transition: 0.3s;
  color: inherit;
}
.menu-item:hover {
  text-decoration: none;
  transform: scale(1.2);
  transition: 0.3s;
  cursor: inherit;
}
</style>
