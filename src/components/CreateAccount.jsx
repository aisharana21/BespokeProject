import { useState } from 'react';
import './CSS/DefaultStyle/user-account.css';
import { auth } from './Context/firebase';
import { useFirebase } from './Context/firebase';
import { useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
export function CreateAccount() {
const navigate= useNavigate();

  const firebase = useFirebase();
    const [inputValues, setInputValues] = useState({
        username: "", email: "", password: ""
    })
    const [checkErros, setCheckErros] = useState({})


    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value })
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        const validateErrors = validate();
        setCheckErros(validateErrors)
  if (Object.keys(validateErrors).length === 0) {
           
            setInputValues({
                username: "",
                email: "",
                password: "",
              
            });
        }
      accountCreation();
    }
    const validate = () => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!inputValues.username) {
            errors.username = "Enter username";
        }
        if (!inputValues.email) {
            errors.email = "Enter Email"
        }
        else if (!regex.test(inputValues.email)) {
            errors.email = "Enter Valid Email"

        }
        if (inputValues.password) {
            if (inputValues.password.length < 8) {
                errors.password = "Password must be atleast of 8 characters"
            }

        }
        else {
            errors.password = "Enter Password";
        }
        return errors;
    }
    const accountCreation= async ()=>{
        try {
       
  await firebase.createUserAccount( inputValues.email,inputValues.password)
   const user = auth.currentUser;
 navigate("/")
   console.log(user);  
    }
         catch (error) {
            alert(error.message)
        }
     

        
    }
    return (
        <>
            <h1>Create Account</h1>
            <div className="create-account-container
       account-container">
                <div className="create-account-form-container
 account-container-form">


                    <form onSubmit={handleSubmit}
                        className='create-account-form
         account-form' >
                        <div className="sign-in-username account-input">
                            <label>Username</label>
                            <input
                                type="name" name="username" id="name"
                                placeholder="Your Full Name"
                                value={inputValues.username}
                                onChange={handleInput}
                            />
                            <p className="error-message">{checkErros.username}</p></div>
                        <div className="create-account-email 
          account-input">
                            <label>Email</label>
                            <input

                                type="email" name="email"
                                id="email" placeholder="Email"
                                value={inputValues.email}
                                onChange={handleInput}
                            />
                            <p className="error-message">{checkErros.email}</p></div>

                        <div className="create-account-password
           account-input">
                            <label>Password</label>
                            <input
                                maxLength={10}
                                type="password"
                                name="password" id="password"
                                placeholder="Password"
                                value={inputValues.password}
                                onChange={handleInput}
                            />
                            <p className="error-message">{checkErros.password}</p>
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
