


import React from 'react'
import { useFirebase } from './Context/firebase';
import './CSS/user-info-page.css';
import { useNavigate } from 'react-router-dom';

export  function UserInfoPage() {
  const navigate= useNavigate();

    const firebase = useFirebase();
  const logout=async ()=>{
        try {
          await firebase.logOutUser();
          navigate('/signin')
        } catch (error) {
                alert(`Error: ${error.message}`);
    
        }
      }
   const {user}= useFirebase();
   const userEmail= user.email;
 

   console.log(userEmail)
  return (
 <div className='user-account-information-container'>
     <h2>WELCOME TO BESPOKE</h2>
       <div className='user-account-information'>
<div className='user'>
            <h4>Your Account  Information</h4>
            
              <p>Email:{userEmail}</p>
              
              <button 
              className='logout-button  account-button'
              onClick={logout}>
             Logout
                </button>
            </div>
      </div>
    </div>
  )
}



