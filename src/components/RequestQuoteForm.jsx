import './CSS/request-quote-form.css'
import './CSS/DefaultStyle/error-message.css';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState,useEffect } from 'react';
export function RequestQuoteForm() {
    const [formInput, setFormInput] = useState({
        username: "", email: "", phone: "", company: "", projecttype: "",
        budget: "", timeline: "", details: ""
    });
    const [error, setErrors] = useState({});
    const [submit, setSubmit]= useState(false);
    const [formSubmitMessage,setFormSubmitMessage]=useState('');
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
        console.log(formInput)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(formInput));
        setSubmit(true);
    }

 useEffect(() => {
   if (Object.keys(error).length === 0 && submit) {
    requestQuoteInput();
      setFormSubmitMessage("Form is Submitted Successfully");
      setTimeout(() => {
              setFormSubmitMessage("");
}, 1000);
   setFormInput({
      username: "",
      email: "",
      phone: "",
      company: "",
      projecttype: "",
      budget: "",
      timeline: "",
      details: ""
    });
    }
    else{
              setFormSubmitMessage("");

    }
}, [error,submit])

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
        if (!input.budget) {
            errors.budget = "Enter your budget"
        }
        if (!input.projecttype) {
            errors.projecttype = "Enter your project type"
        }
       if (input.phone) {
    if (Number(input.phone) && input.phone.length < 11) {
        errors.phone = "Phone number must be at least 11 digits";
    } else if (!/^\d+$/.test(input.phone)) {
        errors.phone = "Phone number must contain only digits";
    }
}

        return errors;
    }

const requestQuoteInput = async ()=>{
await addDoc(collection(db, 'userRequestQuote'),{
     username: formInput.username,
      email: formInput.email,
      phone: formInput.phone,
      company: formInput.company,
      projecttype: formInput.projecttype,
      budget: formInput.budget,
      timeline: formInput.timeline,
      details: formInput.details
})
}

    return (
        <div className="request-quote-form-container">
            <div className="request-quote">
                <form onSubmit={handleSubmit}
                    className="request-quote-form">
                    <div className="feild">
                        <label>
                            Full Name (Required)
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder='Enter your Full Name'
                            value={formInput.username}
                            onChange={handleChange}


                        />

                    </div>
                    <p className="error-message">{error.username}</p>
                    <div className="feild">
                        <label>
                            Email Address (Required)
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Your Email'

                            onChange={handleChange}
                            value={formInput.email}

                        />

                    </div>
                    <p className="error-message">{error.email}</p>
                    <div className="feild">
                        <label>
                            Phone Number (Required)
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='Phone Number'
                            onChange={handleChange}
                            value={formInput.phone}
                            maxLength={11}

                        />
                    </div>
                    <p className="error-message">{error.phone}</p>
                    <div className="feild">
                        <label>
                            Company Name (Required)
                        </label>
                        <input
                            onChange={handleChange}

                            type="text"
                            name="company"
                            placeholder='Your Company Name'
                            value={formInput.company}
                        />

                    </div>
                    <div className="feild">
                        <label>
                            Project Type (Required)
                        </label>
                        <select
                            name="projecttype"
                            onChange={handleChange}
                            value={formInput.projecttype}
                        >
                            <option disabled value="">Select a type</option>
                            <option value="Product Design">Product Design</option>
                            <option value="Branding">Branding</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    <p className="error-message">{error.projecttype}</p>
                    <div className="feild">
                        <label>
                            Budget Range (Required)
                        </label>
                        <select
                            name="budget"
                            value={formInput.budget}
                            onChange={handleChange}



                        >
                            <option disabled>Select budget</option>
                            <option >$1,000-$5,000</option>
                            <option >$5,000-$10,000</option>
                            <option>Above $10,000</option>
                        </select>
                    </div>
                    <p className="error-message">{error.budget}</p>
                    <div className="feild">

                        <label>
                            Timeline (Optional)
                        </label>
                        <select
                            name="timeline"

                            value={formInput.timeline}
                            onChange={handleChange}

                        >
                            <option disabled value="">Select timeline</option>
                            <option value="2 weeks">2 weeks</option>
                            <option value="1 month">1 month</option>
                            <option value="3 months">3 months</option>
                        </select>
                    </div>

                    <div className="feild">
                        <label>
                            Project Details / Description (Optional)
                        </label>
                        <textarea
                            name="details"
                            rows="5"
                            value={formInput.details}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="feild">
                        <label>
                            File Upload (Optional)
                        </label>
                        <input
                            type="file"
                            name="file"

                            accept=".jpg,.jpeg,.png,.pdf"
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
               <div className="form-submit-message">
                {formSubmitMessage}
               </div>
               
            </div>
        </div>
    );
}