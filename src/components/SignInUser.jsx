import { NavLink } from 'react-router-dom';
import './CSS/DefaultStyle/user-account.css';

import { useState } from 'react';

export function SignInUser() {
const [inputValues, setInputValues]= useState({email:"",password:""})
const handleValues=(event)=>{
const {name, value}= event.target;

setInputValues({...inputValues ,[name]:value});
console.log(inputValues);
}


  return (
    <>
      <h1>Sign In</h1>
      <div className="sign-in-container account-container">
<div className="sign-in-form-container account-container-form">


        <form className='sign-in-form account-form' >
          <div className="sign-in-email account-input">    
            <label>Email</label>
            <input onChange={handleValues}
            value={inputValues.email}
             type="email" name="email" id="email" placeholder="Email" />
            <p className="error-message"></p></div>

          <div className="sign-in-password account-input">
                <label>  Password</label>
          <input  onChange={handleValues}
            value={inputValues.password}
           type="password"
            name="password" id="password"
             placeholder="Password" />
          <p className="error-message"></p>
          </div>
      



          <button className='sign-in-button account-button'
           type="submit">Sign In</button>
        
        </form>
   <div className="create-account-options">
 <span>Don't have account?</span>
      <NavLink className="create-account-link" 
      to="/createaccount">Create Account</NavLink>
   </div>
        </div> 
      </div>
    </>
  )
}
