import './CSS/values.css'
import './CSS/DefaultStyle/card.css';
import './CSS/DefaultStyle/text-color.css';
import './CSS/DefaultStyle/page-heading.css';

import { motion } from 'framer-motion';
import { valueData } from './data/valueData';
export function Values() {
const containerVariants = {
  hidden: {}, // parent hidden doesn't need properties
  visible: {
    transition: {
      staggerChildren: 0.2, // gap between children animations
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1, ease: "easeOut" }
  },
};

    return (
        <div className='bespoke-value-container'>

            <div

                className="bespoke-value-description page-heading-description">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bespoke-value-heading page-heading">
                    <h2>Our Company Values</h2>
                    <h3>What Drives Bespoke Creations
                    </h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
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
                variants={containerVariants}
                 initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
                className="value-overview-card-grid card-grid">
                    {
                        valueData.map((data, index) => (
                            <motion.div
                             
     variants={childVariants}

      
      
                            key={index} className="values-card card">
                                <div className="card-image values-card-img">
                                    <img src={data.image} alt="product design" />
                                </div>
                                <motion.div
                                 
                                className="card-heading">{data.name}</motion.div>
                                <motion.div
                             
                                className="card-subheading">
                                    {data.subHeading}

                                </motion.div>
                            </motion.div>
                        ))


                    }    </motion.div>

            </div>
        </div>

    );
}