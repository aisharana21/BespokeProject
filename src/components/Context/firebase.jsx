// Import the functions you need from the SDKs you need
import { createContext, useContext ,useEffect,useState} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCFJpbmrAzPHHUNEC06aT59c_E36_q13P0",
  authDomain: "bespoke-693a6.firebaseapp.com",
  projectId: "bespoke-693a6",
  storageBucket: "bespoke-693a6.firebasestorage.app",
  messagingSenderId: "882937773913",
  appId: "1:882937773913:web:5b7788698815f55a241648",
  measurementId: "G-0E2T4BVT0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const FireBaseContext = createContext(null)
//he used firestore

export const useFirebase =()=>{
  return  useContext(FireBaseContext);
}

export const FirebaseProvider =(({children})=>{
const [user, setUser]= useState(false);
useEffect(()=>{
onAuthStateChanged(auth , (user)=>{
    if(user){
      
        setUser(user)
          console.log("user is signed in")
    }
    else{setUser(false)}
},[])
})

const createUserAccount = (email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const logOutUser= ()=>{
    return signOut(auth);
}


return(
<FireBaseContext.Provider value = {{createUserAccount, user,logOutUser}  }>
    {children}
</FireBaseContext.Provider>
);
})