import './CSS/footer.css'
import './CSS/DefaultStyle/popup.css';

import LogoImage from '../assets/logo-black.png';
import InstagramLogo from '../assets/instagram.png';
import FacebookLogo from '../assets/facebook.png';
import LinkedInLogo from '../assets/linkedinlogo.png';
import YoutubeLogo from '../assets/youtubelogo.png';
import XLogo from '../assets/xLogo.png';
import { NavLink } from "react-router-dom";
import { projectDetailData } from './data/projectDetailData.js';
import { useState } from "react";

export function Footer() {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <div className="logo-name">
          <span className='logo-image-black'><img src={LogoImage} alt="" /></span>Bespoke
        </div>

        <div className="social-links-container">
          <div className="follow-instruction">Follow us</div>
          <div className="social-links">
            <img src={FacebookLogo} alt="Facebook" />
            <img src={InstagramLogo} alt="Instagram" />
            <img src={LinkedInLogo} alt="LinkedIn" />
            <img src={YoutubeLogo} alt="YouTube" />
          </div>
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-link">
          <div className="footer-link-heading"><h3>Quick Links</h3></div>
          <div className="link-list">
            <ul>
              <li><NavLink className='link-style' to="/">Home</NavLink></li>
              <li><NavLink className='link-style' to="/service">Services</NavLink></li>
              <li><NavLink className='link-style' to="/portfolio">Portfolio</NavLink></li>
              <li><NavLink className='link-style' to="/contactus">Contact Us</NavLink></li>
              <li><NavLink className='link-style' to="/values">Values</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="footer-link">
          <div className="footer-link-heading"><h3>Services</h3></div>
          <div className="link-list">
            <ul>
              {projectDetailData.map(project => (
                <li key={project.id}>
                  <NavLink
                    className="link-style"
                    to={`/portfolio/${project.id}`}
                  >
                    {project.catagory}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>




        <div className="footer-link">
          <div className="footer-link-heading"><h3>Info</h3></div>
          <div className="link-list">
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/search/fantech+labs+address/@30.8206463,73.4382355,14z"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address: 123 Creative Street, Lahore, Pakistan
                </a>
              </li>

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

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=rana.ayesha590@gmail.com"
                  target="_blank"
                  className="link-style"
                >
                  Email: hello@bespoke.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
