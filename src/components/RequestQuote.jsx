import './CSS/request-quote.css'
import './CSS/DefaultStyle/page-heading.css';

export function RequestQuote(){

  return (
    <div className="request-quote-container">       
          <div className="request-quote-description page-heading-description">
           <div className="request-quote-heading page-heading">
            <h2>Request a Quote
</h2>
            <h3>Your Vision, Our Expertise - Let's Create Together

</h3>
           </div>
           <div className="request-quote-subheading page-subheading">
            Tell us about your project and we'll prepare a tailored quote that suits your needs. At Bespoke, every creation is unique, so we'll work closely with you to bring your vision to life.


           </div>

            </div>


    <div className="request-quote-form-container">
      <div className="request-quote">
       <form className="request-quote-form">
     
      <label>
        Full Name (Required)
        </label>
        <input
          type="text"
          name="fullName"
          placeholder='Enter your Full Name'
         
          required
        />
      

      
      <label>
        Email Address (Required) 
         </label>
        <input
          type="email"
          name="email"
          placeholder='Your Email'

        
          required
        />
     

      <label>
        Phone Number (Optional)
         </label>
        <input
          type="tel"
          name="phone"
          placeholder='Phone Number'

        />
     

      <label>
        Company Name (Optional)
         </label>
        <input
          type="text"
          name="company"
         placeholder='Your Company Name'

        />
     


      <label>
        Project Type
          </label>
        <select
          name="projectType"
         
          required
        >
          <option value="">Select a type</option>
          <option value="Product Design">Product Design</option>
          <option value="Branding">Branding</option>
          <option value="Web Design">Web Design</option>
          <option value="Other">Other</option>
        </select>
    

    
      <label>
        Budget Range
          </label>
        <select
          name="budget"
       
          required
        >
          <option value="">Select budget</option>
          <option >$1,000-$5,000</option>
          <option v>$5,000-$10,000</option>
          <option>Above $10,000</option>
        </select>
    

     
      <label>
        Timeline
             </label>
        <select
          name="timeline"
         
          required
        >
          <option value="">Select timeline</option>
          <option value="2 weeks">2 weeks</option>
          <option value="1 month">1 month</option>
          <option value="3 months">3 months</option>
        </select>
 

    
      <label>
        Project Details / Description
         </label>
        <textarea
          name="details"
          rows="5"
        
          required
        ></textarea>
     

 
      <label>
        File Upload (Optional)
         </label>
        <input
          type="file"
          name="file"
         
          accept=".jpg,.jpeg,.png,.pdf"
        />
     

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
  );
}