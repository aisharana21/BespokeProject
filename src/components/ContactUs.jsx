import './CSS/contact-us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function ContactUs() {
  return (
    <div className="contact-page-main">
      <div className="contact-container">
        <div className="contact-info">
          <div className="page-context">
            <h2>We're Here to Bring Your Vision to Life</h2>
            <p>
              At Bespoke, your ideas matter. Whether you're ready to start your custom project or simply have a question, our team is here to guide you every step of the way. Get in touch and let's create something extraordinary together.
            </p>
          
          </div>

          <div className="contact-options">
            <div className="contact-sources">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: "#EF8E36" }} size="xl" />
              </div>
              <div className="contact-context">
                Bespoke Creations
 123 Creative Street, Lahore, Pakistan

              </div>
            </div>

            <div className="contact-sources">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#EF8E36" }} size="xl" />
              </div>
              <div className="contact-context">+92 300 1234567
</div>
            </div>


            <div className="contact-sources">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#EF8E36" }} size="xl" />
              </div>
              <div className="contact-context">hello@bespoke.com
</div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Get In Touch</h2>
          <div className="contact-form">
            <form className='contact-us-form'>
              <label>Full Name (Required)</label>
              <input type="text" name="name" id="name" required  placeholder="Name" />
              <label>Email (Required)</label>
              <input type="email" name="email"  required id="email" placeholder="Email" />
              <label>Phone Number (Optional)</label>
              <input type="number" name="phone" id="phone" placeholder="Phone" />
              <label>Your Message (Required)</label>
              <textarea id="message" name="message" rows="5" cols="40" required placeholder="Message"></textarea>
              <button className="send-button" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
