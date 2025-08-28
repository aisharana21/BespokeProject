
import './CSS/navbar.css';
import MenuImage from '../assets/menu.png';
import LogoImage from '../assets/logo.png';
import User from '../assets/user-24.png';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { useFirebase } from './Context/firebase';

// import{loi}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {user}= useFirebase();
  const emailFirstLetter= user?.email?.charAt(0).toUpperCase();
    // console.log();

const firebase= useFirebase();
  // function for active link class
//   const logout=async ()=>{
//     try {
//       await firebase.logOutUser();
//     } catch (error) {
//             alert(`Error: ${error.message}`);

//     }
// console.log("logout")
//   }
  const getNavColor = ({ isActive }) => {
    return isActive ? 'link-style active' : 'link-style';
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="brand-name">

          <span className='logo-image'>
            <img src={LogoImage} alt="logo" />
          </span>

          <NavLink to="/" className='link-style'>Bespoke</NavLink>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className='hamburger-text'>Menu</span>
          <img src={MenuImage} alt="menu" />
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={getNavColor}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={getNavColor}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/portfolio'
                className={getNavColor}
                onClick={handleLinkClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={getNavColor}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li > {firebase.user ? (<NavLink 
            className="user-acc-link" to="/useraccount"
            >

          
             <span>{emailFirstLetter}</span>
            </NavLink>
            
            ):(<NavLink  onClick={handleLinkClick} className="sign-in-link"
            to="/signin"
          >
            <img src={User} alt="" />
            <span>Sign In</span>
          </NavLink>)
          
          }
               
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
}
