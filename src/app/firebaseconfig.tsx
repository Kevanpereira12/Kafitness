
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU0QbielqmnunwiUnthHjE7e7eXFuZyAM",
  authDomain: "kafitbase.firebaseapp.com",
  projectId: "kafitbase",
  storageBucket: "kafitbase.appspot.com",
  messagingSenderId: "739254734353",
  appId: "1:739254734353:web:9ba7b7876ccf941f59ebb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);