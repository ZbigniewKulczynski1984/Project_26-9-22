
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBST-SL-UvFhYs0VNithSmmXu3O8_TQsF4",
  authDomain: "zdfronpol13zk.firebaseapp.com",
  databaseURL: "https://zdfronpol13zk-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfronpol13zk",
  storageBucket: "zdfronpol13zk.appspot.com",
  messagingSenderId: "1003480703176",
  appId: "1:1003480703176:web:fe61dcc5f9e0aeb8a405fd",
  measurementId: "G-0RFSQ5JSDV"
};


export const app = initializeApp(firebaseConfig);
