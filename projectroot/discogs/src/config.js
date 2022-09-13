// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBf_yxJ_9xvnpZX5G2yraWCCSS8Y9J3euU",
  authDomain: "discogsapi-555a2.firebaseapp.com",
  projectId: "discogsapi-555a2",
  storageBucket: "discogsapi-555a2.appspot.com",
  messagingSenderId: "148924592319",
  appId: "1:148924592319:web:09e8afa49f67d760f5560a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
