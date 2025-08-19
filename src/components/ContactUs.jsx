import './CSS/contact-us.css';
import './CSS/DefaultStyle/error-message.css';
import './CSS/DefaultStyle/popup.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
 import { ContactUsFrom } from './ContactUsForm';
export function ContactUs() {

  const [showPhonePopup, setShowPhonePopup] = useState(false); 

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
           <a
           className='contact-link'
                  href="https://www.google.com/maps/search/fantech+labs+address/@30.8206463,73.4382355,14z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address: 123 Creative Street, Lahore, Pakistan
                </a>
              </div>
            </div>

            <div className="contact-sources">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#EF8E36" }} size="xl" />
              </div>
              <div className="contact-context">
                <ul>
                <li onClick={() => setShowPhonePopup(true)}>Phone: +92 300 1234567</li>            
              {showPhonePopup && (
                <div className={`popup-overlay ${showPhonePopup ? "show" : ""}`}>
                  <div className="popup-content">
                    <h3>Call +92 300 1234567?</h3>
                    <div className="popup-buttons">
                      <button className="call-btn">Call</button>
                      <button 
                        className="close-btn" 
                        onClick={() => setShowPhonePopup(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
              </ul>
</div>
            </div>


            <div className="contact-sources">
              <div className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#EF8E36" }} size="xl" />
              </div>
              <div className="contact-context">
            <a className="contact-link"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rana.ayesha590@gmail.com"
                  target="_blank"
                  
                >
                  Email: hello@bespoke.com
                </a>
</div>
            </div>
          </div>
        </div>
<ContactUsFrom/>
      </div>
    </div>
  );
}
