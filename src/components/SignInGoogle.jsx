import { useFirebase } from './Context/firebase';
import GoogleIcon from '../assets/google-icon-30.png';
import { useNavigate } from 'react-router-dom';

export function SignInGoogle() {
    const navigate= useNavigate();

    const firebase= useFirebase()
    const handleSignInWithGoogle=async (e)=>{
        e.preventDefault();
try {
    await firebase.signInUserWithGoogle();
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

