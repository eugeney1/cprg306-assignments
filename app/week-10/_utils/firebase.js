import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDJhyonrFUClsWMpRHfLRXxDA--0rVlEuk",
  authDomain: "cprg306-assignments-25c8c.firebaseapp.com",
  projectId: "cprg306-assignments-25c8c",
  storageBucket: "cprg306-assignments-25c8c.appspot.com",  
  messagingSenderId: "27939345749",
  appId: "1:279393457497:web:2966615e7d138fdec9e848"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  
const db = getFirestore(app);  

export { auth, db };
