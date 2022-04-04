// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";



import { getAuth, GoogleAuthProvider,signOut }from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWguwyungNvii2pxu4dhT-_xFLW8D23RQ",
  authDomain: "keeper-app-a067a.firebaseapp.com",
  projectId: "keeper-app-a067a",
  storageBucket: "keeper-app-a067a.appspot.com",
  messagingSenderId: "654502102616",
  appId: "1:654502102616:web:38b0f1c2bfd4c403c3ec2d",
  measurementId: "G-16MV4SR94P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);          //using this you can use various features of firebase 


export const auth = getAuth(app);



export const provider = new GoogleAuthProvider();


export const signOutFromGoogle=()=>{
  signOut(auth).then(()=>{window.location.reload(true)}).catch((error)=>console.error());
}
