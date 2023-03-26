// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5CDaXyggP3ywg5ZjVWlYyiMfAXpqqqzA",
  authDomain: "assign1-751dc.firebaseapp.com",
  projectId: "assign1-751dc",
  storageBucket: "assign1-751dc.appspot.com",
  messagingSenderId: "74608922370",
  appId: "1:74608922370:web:6dce2f79dc54d1856e7c1b",
  measurementId: "G-ZV5DFG6D5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);