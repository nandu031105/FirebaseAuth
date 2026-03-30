// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlkZe-OI7ozU-h9ggX485DXMVQ5wYxVs4",
//   authDomain: "auth-f77ef.firebaseapp.com",
//   projectId: "auth-f77ef",
//   storageBucket: "auth-f77ef.firebasestorage.app",
//   messagingSenderId: "843368083966",
//   appId: "1:843368083966:web:14868ed623857a8f37d0af"
// };

// const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPG0W3ndsgn1ozpAITycXptxuyieK_aGE",
  authDomain: "authexample-19c32.firebaseapp.com",
  projectId: "authexample-19c32",
  storageBucket: "authexample-19c32.firebasestorage.app",
  messagingSenderId: "621589089847",
  appId: "1:621589089847:web:f03c45ee3010416c8af9b2",
  measurementId: "G-Q0Q7Y37G0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
