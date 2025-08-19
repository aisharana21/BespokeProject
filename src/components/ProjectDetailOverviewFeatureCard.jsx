import { motion } from 'framer-motion';
import './CSS/project-detail-feature-card.css';
// import { projectDetailData } from './data/projectDetailData';

export function ProjectDetailOverviewFeatureCard({project}){

  return(
    <div 
    className="project-detail-feature-card-container">
      <div className="feature-heading">
    <h2>Features</h2>
      </div>
  <motion.div 
        initial={{opacity:0 ,scale: 0.8}}
    whileInView={{opacity:1,scale: 1}}
    transition={{delay:0.3, duration:1, ease: "easeOut"}}
    viewport={{ once: true }}
  className="project-feature-card-grid">
{
 project.features.map((feature,index)=>(
    <div key={index} className="project-detail-feature-card">

  <p>{feature}</p>


    </div>
  ))
}
  </motion.div>
    </div>
  );
}
