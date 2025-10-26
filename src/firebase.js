import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCj_N3EOeOuk6GODE_X5_8ALTwnnZNelLg",
    authDomain: "intern-e300c.firebaseapp.com",
    projectId: "intern-e300c",
    storageBucket: "intern-e300c.appspot.com",
    messagingSenderId: "123503957275",
    appId: "1:123503957275:web:97b149e712d022ba6a6fbe",
    measurementId: "G-VKPJEY3TJ8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
