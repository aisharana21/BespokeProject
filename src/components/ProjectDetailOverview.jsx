import { motion } from 'framer-motion';
import './CSS/project-detail-overview.css';

export function ProjectDetailOverview({project}){

    return (
        <div className="project-detail-over-view-container">
           
           <div className="project-overview-grid">
            <motion.div
            
            initial={{ opacity: 0, x: -100 }}   
  whileInView={{ opacity: 1, x: 0 }} 
  transition={{  duration: 1, ease: "easeOut" }}
  viewport={{ once: true }} 
            className="project-overview-description">
                <div className="project-overview-heading">
                   <h2>{project.name}</h2> 
                </div>
                <div className="project-overview-subheading">
                 {project. projectOverviewP1}
          

                </div>
                <div className="project-overview-subheading">
                 {project. projectOverviewP2}
          

                </div>
            </motion.div>
            <div className="project-overview-img">
                <img src={project.image} alt="" />
            </div>
         

</div>
          
            </div>
    );
}