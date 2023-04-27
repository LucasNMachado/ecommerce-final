 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwQkEVhUkkorPuhyQQ71IMtx0WqOPa_Cs",
  authDomain: "posters-7a6f7.firebaseapp.com",
  projectId: "posters-7a6f7",
  storageBucket: "posters-7a6f7.appspot.com",
  messagingSenderId: "647400006808",
  appId: "1:647400006808:web:fe17b41af8ea89e66a5ced"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

