// import './CSS/navbar.css';
// import MenuImage from '../assets/Menu.png'; 
// import LogoImage from '../assets/logo.png'; 
// import { NavLink } from "react-router-dom";

// export function Navbar() {
//   const getNavColor = ({isActive}) => {
//     return {
//       color: isActive ? '#FF6C2D' : 'white',
//     };
//   };

//   return (
//     <div className="nav-container">
//       <div className="nav">
//         <div className="brand-name">
//           <span className='logo-image'><img src={LogoImage} alt="" /></span>  
//           Bespoke
//         </div>
//         <div className="menu">
//           <ul>
//             <li>
//               <NavLink 
//                 className='link-style' 
//                 to="/" 
//                 style={getNavColor}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 className='link-style' 
//                 to="/service" 
//                 style={getNavColor}
//               >
//                 Services
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 to='/portfolio' 
//                 className='link-style'
//                 style={getNavColor}
//               >
//                 Portfolio
//               </NavLink>
//             </li>
//             <li>
//               <NavLink 
//                 className='link-style' 
//                 to="/contactus"
//                 style={getNavColor}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
// import './CSS/navbar.css';
// import MenuImage from '../assets/Menu.png'; 
// import LogoImage from '../assets/logo.png'; 
// import { NavLink } from "react-router-dom";
// import { useState } from 'react';

// export function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const getNavColor = ({isActive}) => {
//     return {
//       color: isActive ? '#FF6C2D' : 'white',
//     };
//   };

//   const handleLinkClick = () => setMenuOpen(false);

//   return (
//     <div className="nav-container">
//       <div className="nav">

//         <div className="brand-name">
//           <span className='logo-image'><img src={LogoImage} alt="" /></span>  
//           Bespoke
//         </div>

//         {/* Hamburger Icon (only visible on mobile) */}
//         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
//           <img src={MenuImage} alt="menu" />
//         </div>

//         {/* Menu */}
//         <div className={`menu ${menuOpen ? "open" : ""}`}>
//           <ul>
//             <li><NavLink className='link-style' to="/" style={getNavColor} onClick={handleLinkClick}>Home</NavLink></li>
//             <li><NavLink className='link-style' to="/service" style={getNavColor} onClick={handleLinkClick}>Services</NavLink></li>
//             <li><NavLink className='link-style' to="/portfolio" style={getNavColor} onClick={handleLinkClick}>Portfolio</NavLink></li>
//             <li><NavLink className='link-style' to="/contactus" style={getNavColor} onClick={handleLinkClick}>Contact Us</NavLink></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import './CSS/navbar.css';
import MenuImage from '../assets/menu.png';
import LogoImage from '../assets/logo.png';
import User from '../assets/user-30.png';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // function for active link class
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
          </ul>


        </div>
        <div className="sign-in">
          <NavLink
            to="/signin"
          >
            <img src={User} alt="" />
          </NavLink>

        </div>
      </div>
    </div>
  );
}
