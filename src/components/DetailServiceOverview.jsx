import './CSS/DefaultStyle/card.css';
import { detailServiceData } from './data/detailServiceData';
import './CSS/DefaultStyle/detail-overview.css';
import { motion } from 'framer-motion';
export function DetailServiceOverview() {


  return (
    <div className="detail-service-overview-container
     detail-overview-container" >
      <div className="detail-service-overview 
      detail-overview">
        {detailServiceData.map((data, index) => (
          <motion.div
          
          initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
          key={index} className="service-detail detail">
           
            {index % 2 === 0 ? (
              <>
                <div className="service-img detail-img ">
                  <img src={data.image} alt={data.name} />
                </div>
                <div className="service-detail-description
                detail-description ">
                  <div className="service-heading detail-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading
                  detail-subheading ">{data.heading}</div>
                </div>
              </>
            ) : (
              <>
                 
                <div className="service-detail-description
                detail-description ">
                  <div className="service-heading detail-heading">
                    <h2>{data.name}</h2>
                  </div>
                  <div className="service-subheading
                  detail-subheading ">{data.heading}</div>
                </div>
                <div className="service-img detail-img ">
                  <img src={data.image} alt={data.name} />
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
