import './CSS/request-product.css'
import LogoVideo from "../assets/loop.mp4"; 
import { Link, Links } from 'react-router-dom';
import { RequestQuote } from './RequestQuote';

export function RequestProduct(){
    return(
         
      <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={LogoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-container-description">
        <h2>get your product started today</h2>
        <button> <Link  to="/requestQuote" className='link-style' >request a quote</Link> </button>
      </div>
    </div>

  );
    
}