// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAHo1j1TKxjFSkjHfn0AMEnXm_xW0dXIKE",
//   authDomain: "online-bookshelf-94741.firebaseapp.com",
//   projectId: "online-bookshelf-94741",
//   storageBucket: "online-bookshelf-94741.appspot.com",
//   messagingSenderId: "646347579401",
//   appId: "1:646347579401:web:3746fe0b73f263321a58d8",
//   measurementId: "G-R4D4LBEYLB",
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

console.log(firebaseConfig)

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
