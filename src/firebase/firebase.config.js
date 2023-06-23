// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSEAGEINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBysMO5C_-Iy9eKwSkI5E0bKGTTZN2kqxA",
//   authDomain: "assignment10-chef-recipi-1b900.firebaseapp.com",
//   projectId: "assignment10-chef-recipi-1b900",
//   storageBucket: "assignment10-chef-recipi-1b900.appspot.com",
//   messagingSenderId: "673171514611",
//   appId: "1:673171514611:web:d86d28e98d65ef0417c386"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;