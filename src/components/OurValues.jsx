import './CSS/our-values.css'
import starImage from '../assets/star.png'; 
import ovalImage from '../assets/oval.png'; 
import { Values } from './Values';
import { Link } from "react-router-dom";
import {  motion } from "framer-motion";
export function OurValues(){

    return(

<motion.div
initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
className="our-value-grid-container">
<div


className="our-values-description">
    <div
        
    className="values-heading">
        <h1>
         <span className='colored-text'>Crafted </span>To Easily Fit Into Everyday Life
        </h1>
    </div>
    <div className="values-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
    <div className="values-button">
        <button> <Link className='link-style' to="/values" >COMPANY VALUES</Link> </button>
    </div>
</div>


   <div className="values-container" >
<div className="values">
    <div className="value-img">
        <img src={starImage} alt="" />
    </div>
    <div className="value-heading">
        user focused</div>
    <div className="value-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>
<div className="values">
    <div className="value-img">
        <img src={ovalImage} alt="" />
    </div>
    <div className="value-heading">
        global</div>
    <div className="value-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>
<div className="values">
    <div className="value-img">
        <img src={ovalImage} alt="" />
    </div>
    <div className="value-heading">
        global</div>
    <div className="value-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>
<div className="values">
    <div className="value-img">
        <img src={starImage} alt="" />
    </div>
    <div className="value-heading">
        user focused</div>
    <div className="value-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
</div>
</div> 


</motion.div>
    );
}