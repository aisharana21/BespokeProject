import './CSS/choose-bespoke.css'
import ChooseBespokeImage from '../assets/choosebespoke.jpg';
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
            <li>Designs that connect emotionally</li>
            <li>Proven results with global brands</li>
            <li>Innovative approach to every project</li>
            <li>User-focused, business-driven strategies
</li>
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