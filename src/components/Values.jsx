import './CSS/values.css'
import './CSS/DefaultStyle/card.css';
import './CSS/DefaultStyle/text-color.css';
import './CSS/DefaultStyle/page-heading.css';
import starImage from '../assets/star.png'; 
import ovalImage from '../assets/oval.png';
// import { motion } from 'framer-motion';
export function Values(){
    const valueData= [
        {
        image : starImage,
        name:"User Focused",
        subHeading: "We design every product with our users at the heart of the process. By understanding real needs and lifestyles, we create solutions that fit seamlessly into everyday life."

    },
        {
        image : ovalImage,
        name:"Global Perspective",
        subHeading: " Our vision extends beyond borders. We draw inspiration from diverse cultures and design products that resonate with people all around the world."

    },
        {
        image : starImage,
        name:"Innovation at Core",
        subHeading: " We believe in thinking differently. Every project is an opportunity to push boundaries, explore new ideas, and introduce designs that are fresh, functional, and future-ready."

    },
        {
        image : ovalImage,
        name:" Quality Craftsmanship",
        subHeading: " Our work reflects attention to detail and dedication to excellence. From the initial sketch to the final product, we ensure the highest standards of quality."

    },
        {
        image : starImage,
        name:"Sustainability Commitment",
        subHeading: "We care for the planet. Our designs are mindful of environmental impact, aiming for sustainable materials and processes that benefit future generations."

    },
        {
        image : ovalImage,
        name:"Collaborative Spirit",
        subHeading: "We believe the best ideas emerge from teamwork. By working closely with our clients, partners, and communities, we create designs that are richer and more meaningful."

    },
        {
        image : starImage,
        name:"Adaptability & Growth",
        subHeading: "The world is constantly evolving  and so are we. We embrace change, adapt to new challenges, and continuously learn to stay ahead in design and innovation."

    },
        {
        image : ovalImage,
        name:"Ethical Responsibility",
        subHeading: "We uphold integrity in every decision. From sourcing to production, our choices reflect fairness, transparency, and respect for people and communities."

    },
]
    return (
        <div className='bespoke-value-container'>
        
            <div className="bespoke-value-description page-heading-description">
           <div className="bespoke-value-heading page-heading">
            <h2>Our Company Values</h2>
            <h3>What Drives Bespoke Creations
</h3>
           </div>
           <div className="bespoke-value-subheading page-subheading">
            What Drives Bespoke Creations

           </div>

<div className="bespoke-values-read-more-button">
    <button>Read More</button>
</div>

            </div>

           <div
            className="value-overview-card-container ">
            <div  className="value-overview-card-grid card-grid">
                {
                    valueData.map((data, index) => (
                        <div key={index} className="values-card card">
                            <div className="card-image values-card-img">
                                <img src={data.image} alt="product design" />
                            </div>
                            <div className="card-heading">{data.name}</div>
                            <div className="card-subheading">
                                {data.subHeading}

                            </div>
                        </div>
                    ))


                }    </div>

        </div>
        </div>
       
    );
}