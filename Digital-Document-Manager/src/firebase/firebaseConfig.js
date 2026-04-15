// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDAtQUnpaaKzQBV_O5Xicr79iBjr3SDOUY",
    authDomain: "my-digital-project-b8826.firebaseapp.com",
    databaseURL: "https://my-digital-project-b8826-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-digital-project-b8826",
    storageBucket: "my-digital-project-b8826.firebasestorage.app",
    messagingSenderId: "398459936032",
    appId: "1:398459936032:web:367f1aaa3e675320d64b45",
    measurementId: "G-DCS7WEK5M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);