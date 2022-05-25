// Import the functions you need from the SDKs you need
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;    

const db = getFirestore(app);
const colRef = collection(db, 'channels');

getDocs(colRef).then((snapshot) => {

  const data = snapshot.docs.map(doc => {
    return doc.data()
  })

  console.log(data)

}).catch((error) => {
  console.log(error.message)
})
