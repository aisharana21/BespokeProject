import './CSS/DefaultStyle/hero-section.css';

import WomenImage from '../assets/women.png'; 
import { ServiceOverview } from './ServiceOverview';
import { ServiceOverviewCard } from './ServiceOverviewCard';
import { DetailServiceOverview } from './DetailServiceOverview';
import { ChooseBespoke } from './ChooseBespoke';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
export function Service (){
    return(
        <div className="service-container">
<div 
  

className="hero-section">
<motion.div 

initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{  duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}   
className="section-description
 hero-section-description
">
<div className="section-heading hero-section-heading">
    <h2>We Create Designs That Connect <span className='highlight'>Emotionally</span> </h2>
</div>
<div className="section-subheading hero-section-subheading
">
    From idea to execution, Bespoke delivers innovative and impactful design solutions that inspire and engage.
</div>
<div className="view-work">
<button className='view-work-button'>
         <NavLink 
                to='/portfolio' 
                className='link-style'
               
              >
View Our Work              </NavLink></button></div>
</motion.div>
<div className="section-img hero-section-img">
    <img src={WomenImage} alt="" />
</div>
</div>
<ServiceOverview/>
<ServiceOverviewCard/>
<DetailServiceOverview/>
<ChooseBespoke/>
</div>

    );
}