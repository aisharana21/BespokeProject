import './CSS/contact-us.css';
import './CSS/DefaultStyle/error-message.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
 import { ContactUsFrom } from './ContactUsForm';
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
<ContactUsFrom/>
      </div>
    </div>
  );
}
