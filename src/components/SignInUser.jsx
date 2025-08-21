import './CSS/sign-in-user.css';


export function SignInUser() {
  return (
    <div className="sign-in-container">
   <form >


     <form className='sign-in-form' >
                    <label>Full Name</label>
                    <input type="text" name="username" id="name"  placeholder="Name" />
                    <p className="error-message"></p>
                    <label>Email (Required)</label>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <p className="error-message"></p>
             

                   

                    <button className="send-button" type="submit">Sign In</button>
                </form>

   </form>
    </div>
  )
}
