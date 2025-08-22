import { useState } from 'react';
import './CSS/contact-us.css';
import './CSS/DefaultStyle/error-message.css';
import { db } from './Context/firebase';
import { collection , addDoc} from 'firebase/firestore';
// import { col } from 'framer-motion/client';
export function ContactUsFrom() {

    const [formInput, setFormInput] = useState({
        username: "", email: "", phone: "", message: ""
    });
    const [error, setErrors] = useState({});

 
    const [formSubmitMessage, setFormSubmitMessage] = useState('');
    const handleChange = (event) => {
        
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });

    }
    const handleSubmit = (e) => {
        e.preventDefault();
         const validateErrors = validate(formInput);
  setErrors(validateErrors);
 
      if (Object.keys(validateErrors).length === 0) {
            setFormSubmitMessage("Your Message is Submitted Successfully");
            contactFormInput();
            setTimeout(() => {
                setFormSubmitMessage("");
            }, 2000);
            setFormInput({
                username: "",
                email: "",
                phone:"",
                message: "",
            });
        }
        else {
            setFormSubmitMessage("");

        }
    }

   
    const validate = (input) => {
        console.log(input);
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!input.username) {
            errors.username = "Enter Username"
        }
        if (!input.email) {
            errors.email = "Enter Email"
        }
        else if (!regex.test(input.email)) {
            errors.email = "Enter Valid Email"

        }
              if (input.phone) {
    if (Number(input.phone) && input.phone.length < 11) {
        errors.phone = "Phone number must be at least 11 digits";
    } else if (!/^\d+$/.test(input.phone)) {
        errors.phone = "Phone number must contain only digits";
    }
}
        if (!input.message) {
            errors.message = "Enter your message!";
        }
        return errors;
    }
    const contactFormInput=async ()=>{
     await addDoc(collection(db, 'userMessages'),{
             username: formInput.username,
              email: formInput.email,
               phone: formInput.phone,
                message: formInput.message
        })
    }
    return (
        <div className="contact-form-container">
            <h2>Get In Touch</h2>
            <div className="contact-form">
                <form className='contact-us-form' onSubmit={handleSubmit}>
                    <label>Full Name (Required)</label>
                    <input type="text" name="username" id="name"
                     value={formInput.username} 
                     onChange={handleChange} placeholder="Name" />
                     
                    <p className="error-message">{error.username}</p>
                    <label>Email (Required)</label>
                    <input type="email" 
                    name="email" onChange={handleChange}
                     value={formInput.email} id="email" placeholder="Email" />
                    <p className="error-message">{error.email}</p>
                    <label>Phone Number (Optional)</label>
                    <input type="number"
                     onChange={handleChange}
                      maxLength={12}
                       name="phone" id="phone" value={formInput.phone} placeholder="Phone" />
                    <p className="error-message">{error.phone}</p>

                    <label>Your Message (Required)</label>
                    <textarea id="message" name="message" rows="5" cols="40" value={formInput.message} onChange={handleChange} placeholder="Message"></textarea>
                    <p className="error-message">{error.message}</p>

                    <button className="send-button" type="submit">SEND</button>
                </form>
                <div className="form-submit-message">
                    {formSubmitMessage}
                </div>
            </div>
        </div>
    );
}