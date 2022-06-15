import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD5N_THC5bk8xGJI3BTe4XEJGJV_2tI2Dk",
  authDomain: "backendreactcoder.firebaseapp.com",
  projectId: "backendreactcoder",
  storageBucket: "backendreactcoder.appspot.com",
  messagingSenderId: "1066165968262",
  appId: "1:1066165968262:web:f30f69cc34f70489896007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);