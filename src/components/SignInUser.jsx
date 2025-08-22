import './CSS/sign-in-user.css';


export function SignInUser() {
  return (
    <>
      <h1>Sign In</h1>
      <div className="sign-in-container">



        <form className='sign-in-form' >
          <div className="sign-in-email sign-in-input">    
            <label>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <p className="error-message"></p></div>

          <div className="sign-in-password sign-in-input">
                <label>  Password</label>
          <input type="password" name="password" id="name" placeholder="Password" />
          <p className="error-message"></p>
          </div>
      



          <button type="submit">Sign In</button>
          <span>Don't have account?</span>
          <button>Create Account</button>
        </form>
      </div>
    </>
  )
}
