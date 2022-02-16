import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHQKk3l_U7Uk9BQFvpMuq2xUcUkm3K1kM",
  authDomain: "justyne-tattoo-site.firebaseapp.com",
  projectId: "justyne-tattoo-site",
  storageBucket: "justyne-tattoo-site.appspot.com",
  messagingSenderId: "281291192439",
  appId: "1:281291192439:web:fd23dc505408bc488d2e72",
  measurementId: "G-9HKPLDDFWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);