import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, listAll, getDownloadURL, uploadBytes, deleteObject  } from "firebase/storage";

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

const storage = getStorage();

export {
    storage, 
    ref, 
    listAll, 
    getDownloadURL,
    uploadBytes,
    deleteObject
}