import './CSS/copyright.css'
import { NavLink } from 'react-router-dom';

export function Copyright(){
    return (
        <div className="copyright-container">

            <div className="copyright-text">
                <p>                &copy; 2040 Copyright. All Rights Reserved.
</p>
            </div>
            <div className="policies">
                <ul>
                    <li><NavLink className='link-style'
                                    to="/privacypolicy" 
                                    
                                  >
                                   Privacy Policy
                                  </NavLink></li>
                    <li><NavLink className='link-style'
                                    to="/termsandcondition" 
                                    
                                  >
                                 Terms and Condition
                                  </NavLink></li>
                </ul>
          
            </div>
        </div> 
    );
}