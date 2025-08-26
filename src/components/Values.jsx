import './CSS/values.css'
import './CSS/DefaultStyle/card.css';
import './CSS/DefaultStyle/text-color.css';
import './CSS/DefaultStyle/page-heading.css';

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { valueData } from './data/valueData';
export function Values() {
const cardContainer = {
hidden: { opacity: 0,
     scale: 0.8 
    },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition:
     { duration: 1,
         ease: "easeOut",
          delay: 0.2 
        }
}
};
const headingContainer={
    hidden:{
        opacity: 0, 
        scale: 0.8
    },
    visible:{
opacity: 1,
 scale: 1,
 transition:{ 
    duration: 1,
     ease: "easeOut" }
    }
}


    return (
        <div className='bespoke-value-container'>

            <div

                className="bespoke-value-description page-heading-description">
                <motion.div
                   variants={headingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
                    className="bespoke-value-heading page-heading">
                    <h2>Our Company Values</h2>
                    <h3>What Drives Bespoke Creations
                    </h3>
                </motion.div>
                <motion.div
                 variants={headingContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
                    className="bespoke-value-subheading page-subheading">
                    What Drives Bespoke Creations

                </motion.div>

                <div className="bespoke-values-read-more-button">
                    <button>Read More</button>
                </div>

            </div>

            <div
                className="value-overview-card-container ">
                <motion.div
                variants={cardContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
                className="value-overview-card-grid card-grid">
                    {
                        valueData.map((data, index) => (
                            <div
                             
  

      
      
                            key={index} className="values-card card">
                                <div className="card-image values-card-img">
                                    <img src={data.image} alt="product design" />
                                </div>
                                <div
                                 
                                className="card-heading">{data.name}</div>
                                <div
                             
                                className="card-subheading">
                                    {data.subHeading}

                                </div>
                            </div>
                        ))


                    }    </motion.div>

            </div>
        </div>

    );
}