// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc8_x_OXMLd2UVgfjupjBSaLO_G6tE2Xk",
  authDomain: "costeye-falgun.firebaseapp.com",
  projectId: "costeye-falgun",
  storageBucket: "costeye-falgun.appspot.com",
  messagingSenderId: "656500970620",
  appId: "1:656500970620:web:16539a911a67d8a801a5f9",
  measurementId: "G-TVEJGFBDPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);