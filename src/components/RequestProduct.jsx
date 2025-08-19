import './CSS/request-product.css'
import LogoVideo from "../assets/loop.mp4"; 
import { Link, Links } from 'react-router-dom';
import { RequestQuote } from './RequestQuote';
import { motion } from 'framer-motion';
export function RequestProduct(){
    return(
         
      <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={LogoVideo} type="video/mp4" />
      
      </video>

      <div className="video-container-description">
        <motion.h2   
         initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}>
        
          get your product started today</motion.h2>
        <motion.button
        
          initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
        > <Link  to="/requestQuote" className='link-style' >request a quote</Link> </motion.button>
      </div>
    </div>

  );
    
}