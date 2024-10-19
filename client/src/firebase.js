// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "hightechsgyan-26dfc.firebaseapp.com",
  projectId: "hightechsgyan-26dfc",
  storageBucket: "hightechsgyan-26dfc.appspot.com",
  messagingSenderId: "919941189248",
  appId: "1:919941189248:web:73a8358a55da4e8ed3e065",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
