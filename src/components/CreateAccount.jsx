import { useState } from 'react';
import './CSS/DefaultStyle/user-account.css';
// import { auth } from './Context/firebase';
import { useFirebase } from './Context/firebase';
import { useNavigate } from 'react-router-dom';
import { SignInGoogle } from './SignInGoogle';
import { auth,db } from './Context/firebase';
import { setDoc,doc } from 'firebase/firestore';
export function CreateAccount() {
const navigate= useNavigate();

  const firebase = useFirebase();
    const [inputValues, setInputValues] = useState({
        username: "", email: "", password: ""
    })
    const [checkErros, setCheckErros] = useState({})
const [showPassword, setShowPassword]= useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value })
    }




    const handleSubmit = (event) => {
        event.preventDefault();
        const validateErrors = validate();
        setCheckErros(validateErrors)
  if (Object.keys(validateErrors).length === 0) {
                 accountCreation();
           
        }
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
//    const user = auth.currentUser;
//    console.log(user);  
    navigate("/");
    const user = auth.currentUser;
    // user.displayName= inputValues.username;
    if(user){
        await setDoc(doc(db, "UserAccountInformation", user.uid),{
            email: inputValues.email,
            username:inputValues.username
        });
    }
console.log(user);
    }
         catch (error) {
       
            error.message="Email is already in use"
setCheckErros((prevError) => ({ ...prevError, error: error.message }));
           console.log(error)
        }
     

        
    }
    return (
        <>
            <div className="create-account-container
       account-container">
                    <h1>Create Account</h1>

                <div className="create-account-form-container
 account-container-form">


                    <form onSubmit={handleSubmit} noValidate
                        className='create-account-form
         account-form' >
                        <div className="sign-in-username account-input account-input-username">
                            <label>Username</label>
                            <input
                                type="name" name="username" id="name"
                                placeholder="Your Full Name"
                                value={inputValues.username}
                                onChange={handleInput}
                            />
                            <p className="error-message">{checkErros.username}</p></div>
                        <div className="create-account-email 
          account-input account-input-email">
                            <label>Email</label>
                            <input

                                type="email" name="email"
                                id="email" placeholder="Email"
                                value={inputValues.email}
                                onChange={handleInput}
                            />
                            <p className="error-message">{checkErros.email ? checkErros.email : checkErros.error}</p></div>

                        <div className="create-account-password
           account-input account-input-password">
                            <label>Password</label>
                            <input
                                maxLength={10}
                                 type={showPassword ? "text" : "password"}
                                name="password" id="password"
                                placeholder="Password"
                                value={inputValues.password}
                                onChange={handleInput}
                            />
                           <div className="show-password">
                               <input
                              
                               type="checkbox" name="checkbox" id="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>ShowPassword</span>
                           </div>
                            <p className="error-message">{checkErros.password}</p>
                        </div>

                          {/* <p className='error-message'>{checkErros.error}</p> */}


                        <button className='create-account-button account-button'
                            type="submit">Create Account</button>

                    </form>
                    <SignInGoogle/>
                </div>
            </div>
        </>
    )
}
