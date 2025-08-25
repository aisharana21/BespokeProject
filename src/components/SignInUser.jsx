import { NavLink } from 'react-router-dom';
import './CSS/DefaultStyle/user-account.css';
import { useFirebase } from './Context/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInGoogle } from './SignInGoogle';

export function SignInUser() {
  const navigate= useNavigate();

  const firebase = useFirebase();
const [inputValues, setInputValues]= useState({email:"",password:""})
const [errorMessage, setErrorMessage]= useState({});
const [showPassword, setShowPassword]= useState(false);

const handleValues=(event)=>{
const {name, value}= event.target;

setInputValues({...inputValues ,[name]:value});
validate();
}

const handleSubmit= (e)=>{
  e.preventDefault();
const validateErrors= validate();
setErrorMessage(validateErrors);
  if (Object.keys(validateErrors).length === 0) {
             signIn();

            setInputValues({
                email: "",
                password: "",
              
            });
        }
}
const validate=()=>{
  const errors={};
  if(!inputValues.email){
    errors.email="Enter Email";
  }
  if(!inputValues.password){
  errors.password="Enter Password";
  }
      return errors;

  
}
const signIn=async ()=>{



  try{
    await firebase.signInUser(inputValues.email, inputValues.password);
     navigate("/")

  }catch(error){
  
 setErrorMessage((prevError)=>({...prevError, error:error.message}));
  }

}
  return (
    <>
      <h1>Sign In</h1>
      <div className="sign-in-container account-container">
<div className="sign-in-form-container account-container-form">


        <form className='sign-in-form account-form' onSubmit={handleSubmit} >
          <div className="sign-in-email account-input">    
            <label>Email</label>
            <input onChange={handleValues}
            value={inputValues.email}
             type="email" name="email" id="email" placeholder="Email" />
            <p className="error-message">{errorMessage.email}</p></div>

          <div className="sign-in-password account-input">
                <label>  Password</label>
          <input  onChange={handleValues}
            value={inputValues.password}
                                 type={showPassword ? "text" : "password"}
            name="password" id="password"
             placeholder="Password" />
              <div className="show-password">
                               <input
                              
                               type="checkbox" name="checkbox" id="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>ShowPassword</span>
                           </div>
          <p className="error-message">{errorMessage.password}</p>
         
         
          </div>
      
<p className='error-message'>{errorMessage.error}</p>


          <button className='sign-in-button account-button'
           type="submit">Sign In</button>
        
        </form>
   <div className="create-account-options">
 <span>Don't have account?</span>
      <NavLink className="create-account-link" 
      to="/createaccount">Create Account</NavLink>
   </div>
   <SignInGoogle/>
        </div> 
      </div>
    </>
  )
}
