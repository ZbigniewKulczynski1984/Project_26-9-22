import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import {getDatabase} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

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

// named export
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);


