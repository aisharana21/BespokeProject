
import './CSS/DefaultStyle/user-account.css';

export function CreateAccount() {
  return (
      <>
      <h1>Create Account</h1>
      <div className="create-account-container account-container">
<div className="create-account-form-container account-container-form">


        <form className='create-account-form account-form' >
          <div className="sign-in-username account-input">    
            <label>Username</label>
            <input
             type="name" name="name" id="name" 
             placeholder="Your Full Name" />
            <p className="error-message"></p></div>
          <div className="create-account-email account-input">    
            <label>Email</label>
            <input
            
             type="email" name="email" id="email" placeholder="Email" />
            <p className="error-message"></p></div>

          <div className="create-account-password account-input">
                <label>Password</label>
          <input  
            
           type="password"
            name="password" id="password"
             placeholder="Password" />
          <p className="error-message"></p>
          </div>
      



          <button className='create-account-button account-button'
           type="submit">Create Account</button>
        
        </form>
    <div className="create-account-options">
 <span>Or</span>
      <span>Sign In with Google</span>
   </div>
        </div> 
      </div>
    </>
  )
}
