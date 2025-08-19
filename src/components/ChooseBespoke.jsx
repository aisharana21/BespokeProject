import './CSS/choose-bespoke.css'
import ChooseBespokeImage from '../assets/choosebespoke.jpg';
import { motion } from 'framer-motion';

export function ChooseBespoke(){
    return(

        <div className="why-choose-bespoke-container">
 <div className="choose-bespoke-description">
    <div className="choose-bespoke">
    <div className="choose-bespoke-heading">
        <h2>Why Choose <span className='highlight'> Bespoke?</span>
</h2>
    </div>
    <div className="choose-bespoke-subheading">
        What Sets Us Apart?
    </div>
    <div className="choose-bespoke-list">
 <ul>
            <motion.li
            initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{delay:0.3, duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
            >Designs that connect emotionally</motion.li>
            <motion.li
            initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{delay:0.4, duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
            >Proven results with global brands</motion.li>
            <motion.li
            initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{delay:0.5, duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
            >Innovative approach to every project</motion.li>
            <motion.li
            
            initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{delay:0.6, duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
            >User-focused, business-driven strategies
</motion.li>
        </ul>
    </div>
       
    </div>
    <div className="choose-bespoke-img">
        <img src=
        {ChooseBespokeImage} alt="" />
    </div>
 </div>

        </div>
    );
}