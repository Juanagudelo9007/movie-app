import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJmo5yoLus3F7BJN1pWVlof7MznIqQIAw",
  authDomain: "movie-player-631ca.firebaseapp.com",
  projectId: "movie-player-631ca",
  storageBucket: "movie-player-631ca.firebasestorage.app",
  messagingSenderId: "50481535089",
  appId: "1:50481535089:web:f7d487953d7b211be8a3d0",
  measurementId: "G-7JYQ2CXYYM",
};

export const app = initializeApp(firebaseConfig);
