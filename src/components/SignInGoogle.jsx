import { useFirebase } from './Context/firebase';
import GoogleIcon from '../assets/google-icon-30.png';
import { useNavigate } from 'react-router-dom';
import { setDoc, doc, getDoc } from "firebase/firestore";
import {  db } from "./Context/firebase";

export function SignInGoogle() {
    const navigate= useNavigate();

    const firebase= useFirebase()
    const handleSignInWithGoogle=async ()=>{
try {
  const userCredential=  await firebase.signInUserWithGoogle();
const user = userCredential.user;
const docRef = doc(db, "UserAccountInformation", user.uid);
    const docSnap = await getDoc(docRef);
     if (!docSnap.exists()) {
      // If new user, store data like your email sign-up format
      await setDoc(docRef, {
        email: user.email,
        username: user.displayName,  
      
        provider: "google"           
      });
    }
     navigate("/");

} catch (error) {
    console.log(error);
}
    }
  return (
    <div className='sign-in-with-google'>
     <p>Or Sign In with</p>
     <button onClick={handleSignInWithGoogle} className="sign-in-option-btn">  
         <img src={GoogleIcon} alt="" /></button>

    </div>
  )
}

