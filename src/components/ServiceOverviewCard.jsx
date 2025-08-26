import './CSS/DefaultStyle/card.css';

import './CSS/service-overview-card.css'

import { serviceData } from './data/serviceData';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export function ServiceOverviewCard() {
 

    return (
        <div
            className="service-overview-card-container ">
            <motion.div
            initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.2, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
            className="service-overview-card-grid card-grid">
                {
                    serviceData.map((data, index) => (
                        <div key={index} className="service-card card">
                            <div className="card-image">
                                <img src={data.image} alt="product design" />
                            </div>
                            <div className="card-heading">{data.name}</div>
                            <div className="card-subheading">
                                {data.subheading}
                                

                            </div>
                       
                        </div>
                    ))


                }    </motion.div>

        </div>
    );

}