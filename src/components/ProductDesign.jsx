import './CSS/product-design.css'
import WomenImage from '../assets/women.png'; 
import BagImage from '../assets/bag.png'; 
import ManImage from '../assets/man.png'; 
import './CSS/DefaultStyle/text-color.css';
import { NavLink } from "react-router-dom";

import { useState } from 'react';


export function ProductDesign(){

    const [image , setImage]= useState(WomenImage)
    function handleImage(URL){
setImage(URL);
    }
    return(
<div className="product-design-grid-container">

<div className="product-design-description">
    <div className='design-description-container'>
    <div className="design-title">
        <h1 className="design-heading">
  PRODUCT DESIGN THAT EVOKES <span className="highlight">EMOTION</span>
</h1>
    </div>

<div className="view-work">

    <button className='view-work-button'>
         <NavLink 
                to='/portfolio' 
                className='link-style'
               
              >
View Our Work              </NavLink></button>
</div>
    </div>




<div className="images-set">
    <img  onClick={()=>{
        handleImage(WomenImage)
    }} 
    src={WomenImage} alt="" />
    <img onClick={()=>{
        handleImage(BagImage)
    }} 
    src={BagImage} 
    alt="" />
    <img
     onClick={()=>{
        handleImage(ManImage)
    }}  src={ManImage} alt="" />
</div>
</div>
<div className="main-image">
    <img src={image} alt="" />
</div>
</div>
    );
}