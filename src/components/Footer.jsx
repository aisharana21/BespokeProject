import './CSS/footer.css'
import LogoImage from '../assets/logo-black.png'; 
import InstagramLogo from '../assets/instagram.png'; 
import FacebookLogo from '../assets/facebook.png'; 
import LinkedInLogo from '../assets/LinkedInLogo.png'; 
import YoutubeLogo from '../assets/YoutubeLogo.png'; 
import XLogo from '../assets/XLogo.png'; 
import { NavLink } from "react-router-dom";

export function Footer(){
    return (<div className="footer-container">
<div className="footer-logo-container">
<div className="logo-name">
    <span className='logo-image-black'><img src={LogoImage} alt="" /></span>Bespoke
</div>

<div className="social-links-container"><div className="follow-instruction">
    Follow us
</div>
<div className="social-links">
<img src={FacebookLogo} alt="" />
<img src={InstagramLogo} alt="" />
<img src={LinkedInLogo} alt="" />
<img src={YoutubeLogo} alt="" />
</div></div>

</div>
<div className="footer-links-container">
<div className="footer-link">
    <div className="footer-link-heading">
     <h3>Services</h3>
    </div>
    <div className="link-list">
        <ul>
            <li>UI/UX</li>
            <li>Web Development</li>
            <li>Brand Identity</li>
            <li>Development</li>
            <li>Design Consultation</li>
        </ul>
    </div>
</div>
<div className="footer-link">
    <div className="footer-link-heading">
       <h3>Quick Links</h3>
    </div>
    <div className="link-list">
        <ul>
           <li>
                         <NavLink 
                           className='link-style' 
                           to="/" 
                         >
                           Home
                         </NavLink>
                       </li>
                       <li>
                         <NavLink 
                           className='link-style' 
                           to="/service" 
                         >
                           Services
                         </NavLink>
                       </li>
                       <li>
                         <NavLink 
                           to='/portfolio' 
                           className='link-style'
                         >
                           Portfolio
                         </NavLink>
                       </li>
                       <li>
                         <NavLink 
                           className='link-style' 
                           to="/contactus"
                         >
                           Contact Us
                         </NavLink>
                       </li>
        </ul>
    </div>
</div>
<div className="footer-link">
    <div className="footer-link-heading">
   <h3>Info</h3>
    </div>
    <div className="link-list">
        <ul>
            <li>Address: Bespoke Creations 123 Creative Street, Lahore, Pakistan</li>
            <li>Phone: +92 300 1234567</li>
            <li>Email: hello@bespoke.com</li>
        </ul>
    </div>
</div>

</div>
    </div>

    ) ;  
}