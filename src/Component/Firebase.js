import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDvf1ZHUoQhtpaTaZgUBnwp-8Pb23h-ySE",
    authDomain: "linkedin-clone-c7d9a.firebaseapp.com",
    projectId: "linkedin-clone-c7d9a",
    storageBucket: "linkedin-clone-c7d9a.appspot.com",
    messagingSenderId: "627363734415",
    appId: "1:627363734415:web:c3d86f7cec06f61c5fa1fa"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

export default db;
  
